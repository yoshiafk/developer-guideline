# C# .NET Coding Standards Guide for New Developers

This comprehensive guide provides coding standards and best practices for new developers joining the AR Reconcile Service project. The standards are based on Microsoft conventions, industry best practices, and project-specific patterns observed in our Clean Architecture implementation.

## How to Use This Guide

This guide uses clear **DO** (✅) and **DON'T** (❌) examples to show:

- **✅ CORRECT patterns** to follow with real code examples
- **❌ WRONG patterns** to avoid with explanations of why they're problematic
- **Practical examples** from the actual project codebase
- **Specific guidance** for each architectural layer and pattern

## Quick Reference

- **Green checkmarks (✅)** = Good practices to follow
- **Red X marks (❌)** = Bad practices to avoid  
- **Real examples** from the AR Reconcile Service codebase
- **Clear explanations** of why certain patterns should be used or avoided

## Table of Contents

1. [Project Overview](#project-overview)
2. [Architecture Design Choices](#architecture-design-choices)
3. [Design Patterns](#design-patterns)
4. [Data Access Patterns](#data-access-patterns)
5. [API Implementation Approaches](#api-implementation-approaches)
6. [Naming Conventions](#naming-conventions)
7. [File and Project Organization](#file-and-project-organization)
8. [Code Structure and Formatting](#code-structure-and-formatting)
9. [Language-Specific Guidelines](#language-specific-guidelines)
10. [Validation and Error Handling](#validation-and-error-handling)
11. [Dependency Injection and Services](#dependency-injection-and-services)
12. [Testing Guidelines](#testing-guidelines)
13. [Performance and Best Practices](#performance-and-best-practices)
14. [Documentation and Comments](#documentation-and-comments)

---

## Project Overview

The AR Reconcile Service is a .NET 8.0 web API built using Clean Architecture principles with the following layers:

- **API Layer**: Controllers, endpoints, middleware
- **Application Layer**: Business logic, use cases, DTOs
- **Domain Layer**: Core entities, business rules
- **Infrastructure Layer**: Data access, external services

### Key Technologies

- .NET 8.0 with ASP.NET Core
- Entity Framework Core with PostgreSQL
- MediatR for application messaging
- FluentValidation for input validation
- Standard API controllers
- Mapster for object mapping
- Serilog for logging

---

## Architecture Design Choices

### 1. Clean Architecture vs Vertical Slice Architecture

#### Clean Architecture (Layered Approach)
**DO** use Clean Architecture for complex domains with rich business logic:

```csharp
// ✅ CORRECT: Clean Architecture with clear layer separation
// Domain Layer - Core business entities and rules
namespace MyApp.Domain.Entities;
public class Order : AggregateRoot
{
    public int Id { get; private set; }
    public decimal TotalAmount { get; private set; }
    public OrderStatus Status { get; private set; }
    
    public void MarkAsCompleted()
    {
        if (Status != OrderStatus.Processing)
            throw new InvalidOperationException("Only processing orders can be completed");
        Status = OrderStatus.Completed;
    }
}

// Application Layer - Use cases and business workflows
namespace MyApp.Application.UseCases;
public class CompleteOrderUseCase
{
    private readonly IOrderRepository _orderRepository;
    private readonly IEmailService _emailService;

    public async Task<CompleteOrderResult> Execute(int orderId)
    {
        var order = await _orderRepository.GetByIdAsync(orderId);
        order.MarkAsCompleted();
        await _orderRepository.SaveAsync(order);
        await _emailService.SendOrderCompletionEmailAsync(order);
        return new CompleteOrderResult { Success = true };
    }
}

// Infrastructure Layer - Data access implementations
namespace MyApp.Infrastructure.Repositories;
public class OrderRepository : IOrderRepository
{
    private readonly AppDbContext _context;
    // Repository implementation...
}
```

**Project Structure for Clean Architecture:**
```
src/
├── MyApp.Domain/           # Core business logic
│   ├── Entities/
│   ├── ValueObjects/
│   ├── DomainServices/
│   └── Interfaces/
├── MyApp.Application/      # Use cases and workflows
│   ├── UseCases/
│   ├── DTOs/
│   └── Interfaces/
├── MyApp.Infrastructure/   # External concerns
│   ├── Data/
│   ├── Services/
│   └── Repositories/
└── MyApp.API/             # Web layer
    ├── Controllers/
    └── Endpoints/
```

#### Vertical Slice Architecture (Feature-Based)
**DO** use Vertical Slice for CRUD-heavy applications or when features are independent:

```csharp
// ✅ CORRECT: Vertical Slice - all feature logic in one place
namespace MyApp.Features.Orders.Complete;

// Command and handler in same namespace/folder
public record CompleteOrderCommand(int OrderId) : IRequest<CompleteOrderResult>;

public class CompleteOrderHandler : IRequestHandler<CompleteOrderCommand, CompleteOrderResult>
{
    private readonly AppDbContext _context;
    private readonly IEmailService _emailService;

    public async Task<CompleteOrderResult> Handle(CompleteOrderCommand request, CancellationToken cancellationToken)
    {
        var order = await _context.Orders.FindAsync(request.OrderId);
        if (order == null) throw new NotFoundException("Order not found");
        
        order.Status = OrderStatus.Completed;
        await _context.SaveChangesAsync(cancellationToken);
        await _emailService.SendCompletionEmailAsync(order.CustomerEmail);
        
        return new CompleteOrderResult { Success = true };
    }
}

// Validator in same feature folder
public class CompleteOrderValidator : AbstractValidator<CompleteOrderCommand>
{
    public CompleteOrderValidator()
    {
        RuleFor(x => x.OrderId).GreaterThan(0);
    }
}
```

**Project Structure for Vertical Slice:**
```
src/
├── MyApp.API/
├── MyApp.Features/
│   ├── Orders/
│   │   ├── Create/
│   │   │   ├── CreateOrder.cs
│   │   │   ├── CreateOrderHandler.cs
│   │   │   ├── CreateOrderValidator.cs
│   │   │   └── CreateOrderEndpoint.cs
│   │   ├── Complete/
│   │   │   ├── CompleteOrder.cs
│   │   │   ├── CompleteOrderHandler.cs
│   │   │   └── CompleteOrderValidator.cs
│   │   └── GetById/
│   └── Customers/
│       ├── Register/
│       └── GetProfile/
└── MyApp.Shared/          # Common utilities
    ├── Database/
    └── Services/
```

**DON'T** mix architectural approaches in the same project:

```csharp
// ❌ WRONG: Mixing Clean Architecture with Vertical Slice
// This creates confusion about where to put business logic

// Domain entity with some logic
public class Order : AggregateRoot
{
    public void MarkAsCompleted() { /* domain logic */ }
}

// But then feature handler bypasses domain rules
public class CompleteOrderHandler
{
    public async Task Handle(CompleteOrderCommand request)
    {
        var order = await _context.Orders.FindAsync(request.OrderId);
        order.Status = OrderStatus.Completed; // Bypassing domain logic!
        await _context.SaveChangesAsync();
    }
}
```

### 2. When to Choose Which Architecture

**Use Clean Architecture when:**
- Rich domain logic with complex business rules
- Multiple applications sharing the same domain
- Long-term project with evolving business requirements
- Team prefers strong separation of concerns
- Need for extensive unit testing of business logic

**Use Vertical Slice when:**
- CRUD-heavy applications
- Features are largely independent
- Rapid development is prioritized
- Smaller team or project
- Business logic is primarily data manipulation

---

## Design Patterns

### 1. CQRS with MediatR vs Direct Service Pattern

#### CQRS with MediatR (Command Query Responsibility Segregation)
**DO** use CQRS with MediatR for complex applications with different read/write requirements:

```csharp
// ✅ CORRECT: CQRS with MediatR
// Commands for writes
public record CreateStudentCommand(string Name, string Email, int Grade) : IRequest<CreateStudentResult>;

public class CreateStudentHandler : IRequestHandler<CreateStudentCommand, CreateStudentResult>
{
    private readonly IStudentRepository _repository;
    
    public async Task<CreateStudentResult> Handle(CreateStudentCommand request, CancellationToken cancellationToken)
    {
        var student = new Student(request.Name, request.Email, request.Grade);
        await _repository.AddAsync(student, cancellationToken);
        return new CreateStudentResult { Id = student.Id, Success = true };
    }
}

// Queries for reads - optimized for display
public record GetStudentListQuery(string? SearchTerm, int Page, int PageSize) : IRequest<GetStudentListResult>;

public class GetStudentListHandler : IRequestHandler<GetStudentListQuery, GetStudentListResult>
{
    private readonly AppDbContext _context;
    
    public async Task<GetStudentListResult> Handle(GetStudentListQuery request, CancellationToken cancellationToken)
    {
        var students = await _context.Students
            .Where(s => string.IsNullOrEmpty(request.SearchTerm) || s.Name.Contains(request.SearchTerm))
            .Select(s => new StudentListItemDto { Id = s.Id, Name = s.Name, Email = s.Email })
            .Skip((request.Page - 1) * request.PageSize)
            .Take(request.PageSize)
            .ToListAsync(cancellationToken);
            
        return new GetStudentListResult { Students = students };
    }
}

// Usage in controller
[ApiController]
public class StudentsController : ControllerBase
{
    private readonly ISender _sender;
    
    [HttpPost]
    public async Task<IActionResult> Create(CreateStudentCommand command)
    {
        var result = await _sender.Send(command);
        return Ok(result);
    }
    
    [HttpGet]
    public async Task<IActionResult> GetList([FromQuery] GetStudentListQuery query)
    {
        var result = await _sender.Send(query);
        return Ok(result);
    }
}
```

#### Direct Service Pattern (Traditional Application Services)
**DO** use Direct Services for simpler applications or when MediatR overhead isn't justified:

```csharp
// ✅ CORRECT: Direct Service Pattern
public interface IStudentService
{
    Task<CreateStudentResult> CreateStudentAsync(CreateStudentRequest request, CancellationToken cancellationToken);
    Task<GetStudentListResult> GetStudentListAsync(GetStudentListRequest request, CancellationToken cancellationToken);
}

public class StudentService : IStudentService
{
    private readonly IStudentRepository _repository;
    private readonly AppDbContext _context;
    
    public async Task<CreateStudentResult> CreateStudentAsync(CreateStudentRequest request, CancellationToken cancellationToken)
    {
        var student = new Student(request.Name, request.Email, request.Grade);
        await _repository.AddAsync(student, cancellationToken);
        return new CreateStudentResult { Id = student.Id, Success = true };
    }
    
    public async Task<GetStudentListResult> GetStudentListAsync(GetStudentListRequest request, CancellationToken cancellationToken)
    {
        var students = await _context.Students
            .Where(s => string.IsNullOrEmpty(request.SearchTerm) || s.Name.Contains(request.SearchTerm))
            .Select(s => new StudentListItemDto { Id = s.Id, Name = s.Name, Email = s.Email })
            .ToListAsync(cancellationToken);
            
        return new GetStudentListResult { Students = students };
    }
}

// Usage in controller
[ApiController]
public class StudentsController : ControllerBase
{
    private readonly IStudentService _studentService;
    
    [HttpPost]
    public async Task<IActionResult> Create(CreateStudentRequest request)
    {
        var result = await _studentService.CreateStudentAsync(request, HttpContext.RequestAborted);
        return Ok(result);
    }
    
    [HttpGet]
    public async Task<IActionResult> GetList([FromQuery] GetStudentListRequest request)
    {
        var result = await _studentService.GetStudentListAsync(request, HttpContext.RequestAborted);
        return Ok(result);
    }
}
```

**DON'T** mix CQRS and Direct Service patterns inconsistently:

```csharp
// ❌ WRONG: Inconsistent patterns in same project
public class StudentsController : ControllerBase
{
    private readonly ISender _sender;
    private readonly IStudentService _studentService;
    
    [HttpPost]
    public async Task<IActionResult> Create(CreateStudentCommand command)
    {
        // Using CQRS for this operation
        var result = await _sender.Send(command);
        return Ok(result);
    }
    
    [HttpGet]
    public async Task<IActionResult> GetList([FromQuery] GetStudentListRequest request)
    {
        // But using direct service for this operation - inconsistent!
        var result = await _studentService.GetStudentListAsync(request, HttpContext.RequestAborted);
        return Ok(result);
    }
}
```

### 2. When to Choose Which Pattern

**Use CQRS with MediatR when:**
- Complex business workflows
- Different models for reads and writes
- Cross-cutting concerns (logging, validation, caching) via pipeline behaviors
- Event-driven architecture
- Team prefers request/response messaging patterns

**Use Direct Services when:**
- Simple CRUD operations
- Single models for reads and writes
- Smaller applications
- Team prefers traditional service layers
- Performance is critical (less abstraction overhead)

---

## Data Access Patterns

### 1. Repository Pattern vs Direct DbContext

#### Repository Pattern
**DO** use Repository Pattern when you need abstraction over data access:

```csharp
// ✅ CORRECT: Repository Pattern for abstraction
public interface IStudentRepository
{
    Task<Student?> GetByIdAsync(int id, CancellationToken cancellationToken = default);
    Task<List<Student>> GetByGradeAsync(int grade, CancellationToken cancellationToken = default);
    Task AddAsync(Student student, CancellationToken cancellationToken = default);
    Task UpdateAsync(Student student, CancellationToken cancellationToken = default);
    Task DeleteAsync(int id, CancellationToken cancellationToken = default);
}

public class StudentRepository : IStudentRepository
{
    private readonly AppDbContext _context;
    
    public StudentRepository(AppDbContext context)
    {
        _context = context;
    }
    
    public async Task<Student?> GetByIdAsync(int id, CancellationToken cancellationToken = default)
    {
        return await _context.Students
            .Include(s => s.Enrollments)
            .FirstOrDefaultAsync(s => s.Id == id, cancellationToken);
    }
    
    public async Task<List<Student>> GetByGradeAsync(int grade, CancellationToken cancellationToken = default)
    {
        return await _context.Students
            .Where(s => s.Grade == grade)
            .ToListAsync(cancellationToken);
    }
    
    public async Task AddAsync(Student student, CancellationToken cancellationToken = default)
    {
        await _context.Students.AddAsync(student, cancellationToken);
        await _context.SaveChangesAsync(cancellationToken);
    }
}

// Usage in application service
public class CreateStudentService
{
    private readonly IStudentRepository _studentRepository;
    
    public async Task<CreateStudentResult> CreateAsync(CreateStudentRequest request, CancellationToken cancellationToken)
    {
        var student = new Student(request.Name, request.Email, request.Grade);
        await _studentRepository.AddAsync(student, cancellationToken);
        return new CreateStudentResult { Id = student.Id, Success = true };
    }
}
```

#### Generic Repository Pattern
**DO** use Generic Repository when you have many entities with similar CRUD operations:

```csharp
// ✅ CORRECT: Generic Repository with base interface
public interface IRepository<TEntity> where TEntity : class
{
    Task<TEntity?> GetByIdAsync(int id, CancellationToken cancellationToken = default);
    Task<TEntity?> GetByIdAsync(int id, params Expression<Func<TEntity, object>>[] includes);
    Task<List<TEntity>> GetAllAsync(CancellationToken cancellationToken = default);
    Task<List<TEntity>> FindAsync(Expression<Func<TEntity, bool>> predicate, CancellationToken cancellationToken = default);
    Task<PagedResult<TEntity>> GetPagedAsync(int page, int pageSize, Expression<Func<TEntity, bool>>? filter = null, CancellationToken cancellationToken = default);
    Task AddAsync(TEntity entity, CancellationToken cancellationToken = default);
    Task AddRangeAsync(IEnumerable<TEntity> entities, CancellationToken cancellationToken = default);
    void Update(TEntity entity);
    void UpdateRange(IEnumerable<TEntity> entities);
    void Delete(TEntity entity);
    void DeleteRange(IEnumerable<TEntity> entities);
    Task<bool> ExistsAsync(Expression<Func<TEntity, bool>> predicate, CancellationToken cancellationToken = default);
    Task<int> CountAsync(Expression<Func<TEntity, bool>>? predicate = null, CancellationToken cancellationToken = default);
}

// Generic Repository Implementation
public class Repository<TEntity> : IRepository<TEntity> where TEntity : class
{
    protected readonly AppDbContext _context;
    protected readonly DbSet<TEntity> _dbSet;

    public Repository(AppDbContext context)
    {
        _context = context;
        _dbSet = context.Set<TEntity>();
    }

    public virtual async Task<TEntity?> GetByIdAsync(int id, CancellationToken cancellationToken = default)
    {
        return await _dbSet.FindAsync(new object[] { id }, cancellationToken);
    }

    public virtual async Task<TEntity?> GetByIdAsync(int id, params Expression<Func<TEntity, object>>[] includes)
    {
        IQueryable<TEntity> query = _dbSet;
        
        foreach (var include in includes)
        {
            query = query.Include(include);
        }
        
        return await query.FirstOrDefaultAsync(e => EF.Property<int>(e, "Id") == id);
    }

    public virtual async Task<List<TEntity>> GetAllAsync(CancellationToken cancellationToken = default)
    {
        return await _dbSet.ToListAsync(cancellationToken);
    }

    public virtual async Task<List<TEntity>> FindAsync(Expression<Func<TEntity, bool>> predicate, CancellationToken cancellationToken = default)
    {
        return await _dbSet.Where(predicate).ToListAsync(cancellationToken);
    }

    public virtual async Task<PagedResult<TEntity>> GetPagedAsync(
        int page, 
        int pageSize, 
        Expression<Func<TEntity, bool>>? filter = null, 
        CancellationToken cancellationToken = default)
    {
        IQueryable<TEntity> query = _dbSet;
        
        if (filter != null)
        {
            query = query.Where(filter);
        }
        
        var totalCount = await query.CountAsync(cancellationToken);
        var items = await query
            .Skip((page - 1) * pageSize)
            .Take(pageSize)
            .ToListAsync(cancellationToken);
        
        return new PagedResult<TEntity>
        {
            Items = items,
            TotalCount = totalCount,
            Page = page,
            PageSize = pageSize,
            TotalPages = (int)Math.Ceiling(totalCount / (double)pageSize)
        };
    }

    public virtual async Task AddAsync(TEntity entity, CancellationToken cancellationToken = default)
    {
        await _dbSet.AddAsync(entity, cancellationToken);
    }

    public virtual async Task AddRangeAsync(IEnumerable<TEntity> entities, CancellationToken cancellationToken = default)
    {
        await _dbSet.AddRangeAsync(entities, cancellationToken);
    }

    public virtual void Update(TEntity entity)
    {
        _dbSet.Update(entity);
    }

    public virtual void UpdateRange(IEnumerable<TEntity> entities)
    {
        _dbSet.UpdateRange(entities);
    }

    public virtual void Delete(TEntity entity)
    {
        _dbSet.Remove(entity);
    }

    public virtual void DeleteRange(IEnumerable<TEntity> entities)
    {
        _dbSet.RemoveRange(entities);
    }

    public virtual async Task<bool> ExistsAsync(Expression<Func<TEntity, bool>> predicate, CancellationToken cancellationToken = default)
    {
        return await _dbSet.AnyAsync(predicate, cancellationToken);
    }

    public virtual async Task<int> CountAsync(Expression<Func<TEntity, bool>>? predicate = null, CancellationToken cancellationToken = default)
    {
        if (predicate == null)
            return await _dbSet.CountAsync(cancellationToken);
        
        return await _dbSet.CountAsync(predicate, cancellationToken);
    }
}

// Specific repository inheriting from generic
public interface IStudentRepository : IRepository<Student>
{
    Task<List<Student>> GetByGradeAsync(int grade, CancellationToken cancellationToken = default);
    Task<Student?> GetByEmailAsync(string email, CancellationToken cancellationToken = default);
    Task<List<Student>> GetActiveStudentsAsync(CancellationToken cancellationToken = default);
}

public class StudentRepository : Repository<Student>, IStudentRepository
{
    public StudentRepository(AppDbContext context) : base(context)
    {
    }

    public async Task<List<Student>> GetByGradeAsync(int grade, CancellationToken cancellationToken = default)
    {
        return await _dbSet
            .Where(s => s.Grade == grade)
            .Include(s => s.Enrollments)
            .ToListAsync(cancellationToken);
    }

    public async Task<Student?> GetByEmailAsync(string email, CancellationToken cancellationToken = default)
    {
        return await _dbSet
            .FirstOrDefaultAsync(s => s.Email == email, cancellationToken);
    }

    public async Task<List<Student>> GetActiveStudentsAsync(CancellationToken cancellationToken = default)
    {
        return await _dbSet
            .Where(s => s.Status == StudentStatus.Active)
            .ToListAsync(cancellationToken);
    }
}

// Unit of Work pattern to coordinate repositories
public interface IUnitOfWork : IDisposable
{
    IStudentRepository Students { get; }
    ICourseRepository Courses { get; }
    IEnrollmentRepository Enrollments { get; }
    Task<int> SaveChangesAsync(CancellationToken cancellationToken = default);
    Task BeginTransactionAsync();
    Task CommitTransactionAsync();
    Task RollbackTransactionAsync();
}

public class UnitOfWork : IUnitOfWork
{
    private readonly AppDbContext _context;
    private IDbContextTransaction? _transaction;

    public UnitOfWork(AppDbContext context)
    {
        _context = context;
        Students = new StudentRepository(_context);
        Courses = new CourseRepository(_context);
        Enrollments = new EnrollmentRepository(_context);
    }

    public IStudentRepository Students { get; }
    public ICourseRepository Courses { get; }
    public IEnrollmentRepository Enrollments { get; }

    public async Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
    {
        return await _context.SaveChangesAsync(cancellationToken);
    }

    public async Task BeginTransactionAsync()
    {
        _transaction = await _context.Database.BeginTransactionAsync();
    }

    public async Task CommitTransactionAsync()
    {
        if (_transaction != null)
        {
            await _transaction.CommitAsync();
            await _transaction.DisposeAsync();
            _transaction = null;
        }
    }

    public async Task RollbackTransactionAsync()
    {
        if (_transaction != null)
        {
            await _transaction.RollbackAsync();
            await _transaction.DisposeAsync();
            _transaction = null;
        }
    }

    public void Dispose()
    {
        _transaction?.Dispose();
        _context.Dispose();
    }
}

// Usage in application service
public class StudentManagementService
{
    private readonly IUnitOfWork _unitOfWork;

    public StudentManagementService(IUnitOfWork unitOfWork)
    {
        _unitOfWork = unitOfWork;
    }

    public async Task<CreateStudentResult> CreateStudentAsync(CreateStudentRequest request, CancellationToken cancellationToken)
    {
        // Check if email exists
        var existingStudent = await _unitOfWork.Students.GetByEmailAsync(request.Email, cancellationToken);
        if (existingStudent != null)
            throw new DuplicateEmailException($"Student with email {request.Email} already exists");

        // Create student
        var student = new Student(request.Name, request.Email, request.Grade);
        await _unitOfWork.Students.AddAsync(student, cancellationToken);
        await _unitOfWork.SaveChangesAsync(cancellationToken);

        return new CreateStudentResult { Id = student.Id, Success = true };
    }

    public async Task<List<StudentDto>> GetStudentsByGradeAsync(int grade, CancellationToken cancellationToken)
    {
        var students = await _unitOfWork.Students.GetByGradeAsync(grade, cancellationToken);
        return students.Select(s => new StudentDto { Id = s.Id, Name = s.Name, Email = s.Email }).ToList();
    }
}

// Service registration for Generic Repository + Unit of Work
public static class ServiceCollectionExtensions
{
    public static IServiceCollection AddGenericRepository(this IServiceCollection services)
    {
        services.AddScoped(typeof(IRepository<>), typeof(Repository<>));
        services.AddScoped<IStudentRepository, StudentRepository>();
        services.AddScoped<ICourseRepository, CourseRepository>();
        services.AddScoped<IEnrollmentRepository, EnrollmentRepository>();
        services.AddScoped<IUnitOfWork, UnitOfWork>();
        
        return services;
    }
}
```

**DON'T** overuse Generic Repository when specific repositories are more appropriate:

```csharp
// ❌ WRONG: Generic repository for complex domain-specific operations
public class ComplexStudentService
{
    private readonly IRepository<Student> _studentRepository; // Too generic!

    public async Task<List<Student>> GetStudentsEligibleForGraduationAsync()
    {
        // This complex business logic doesn't belong in a generic repository
        // It should be in a specific repository method
        return await _studentRepository.FindAsync(s => 
            s.Grade == 12 && 
            s.Enrollments.Count(e => e.Status == EnrollmentStatus.Completed) >= 20 &&
            s.GPA >= 2.5);
    }
}

// ✅ BETTER: Specific repository method for domain operations
public interface IStudentRepository : IRepository<Student>
{
    Task<List<Student>> GetStudentsEligibleForGraduationAsync(CancellationToken cancellationToken = default);
}
```

#### Direct DbContext Usage
**DO** use Direct DbContext for simpler applications or when repository abstraction isn't needed:

```csharp
// ✅ CORRECT: Direct DbContext usage
public interface IAppDbContext
{
    DbSet<Student> Students { get; set; }
    DbSet<Course> Courses { get; set; }
    Task<int> SaveChangesAsync(CancellationToken cancellationToken = default);
}

public class AppDbContext : DbContext, IAppDbContext
{
    public DbSet<Student> Students { get; set; }
    public DbSet<Course> Courses { get; set; }
    
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfigurationsFromAssembly(typeof(AppDbContext).Assembly);
    }
}

// Usage in service or handler
public class GetStudentListHandler : IRequestHandler<GetStudentListQuery, GetStudentListResult>
{
    private readonly IAppDbContext _context;
    
    public async Task<GetStudentListResult> Handle(GetStudentListQuery request, CancellationToken cancellationToken)
    {
        var students = await _context.Students
            .Where(s => s.Grade >= request.MinGrade)
            .Select(s => new StudentDto { Id = s.Id, Name = s.Name })
            .ToListAsync(cancellationToken);
            
        return new GetStudentListResult { Students = students };
    }
}
```

**DON'T** use both patterns inconsistently in the same project:

```csharp
// ❌ WRONG: Inconsistent data access patterns
public class StudentService
{
    private readonly IStudentRepository _repository;
    private readonly AppDbContext _context;
    
    public async Task<Student> GetStudentAsync(int id)
    {
        // Sometimes using repository
        return await _repository.GetByIdAsync(id);
    }
    
    public async Task<List<Course>> GetCoursesAsync()
    {
        // Sometimes using direct context - inconsistent!
        return await _context.Courses.ToListAsync();
    }
}
```

### 2. Entity Framework Core vs Dapper

#### Entity Framework Core (ORM)
**DO** use EF Core for complex object graphs and when you need change tracking:

```csharp
// ✅ CORRECT: EF Core for complex relationships
public class StudentService
{
    private readonly AppDbContext _context;
    
    public async Task<StudentWithCoursesDto> GetStudentWithCoursesAsync(int studentId)
    {
        var student = await _context.Students
            .Include(s => s.Enrollments)
                .ThenInclude(e => e.Course)
            .Include(s => s.Address)
            .FirstOrDefaultAsync(s => s.Id == studentId);
            
        return student.ToDto(); // Complex mapping handled by EF
    }
    
    public async Task UpdateStudentAsync(UpdateStudentRequest request)
    {
        var student = await _context.Students.FindAsync(request.Id);
        student.UpdateDetails(request.Name, request.Email);
        // EF automatically tracks changes
        await _context.SaveChangesAsync();
    }
}

// Entity configuration for complex relationships
public class StudentConfiguration : IEntityTypeConfiguration<Student>
{
    public void Configure(EntityTypeBuilder<Student> builder)
    {
        builder.HasKey(s => s.Id);
        
        builder.Property(s => s.Name)
            .HasMaxLength(100)
            .IsRequired();
            
        builder.HasMany(s => s.Enrollments)
            .WithOne(e => e.Student)
            .HasForeignKey(e => e.StudentId);
            
        builder.OwnsOne(s => s.Address, address =>
        {
            address.Property(a => a.Street).HasMaxLength(200);
            address.Property(a => a.City).HasMaxLength(100);
        });
    }
}
```

#### Dapper (Micro-ORM)
**DO** use Dapper for high-performance scenarios with stored procedures and database functions:

```csharp
// ✅ CORRECT: Dapper for performance-critical operations using stored procedures
public class InquiryDapperRepository(IDbConnection connection, ILoggingService loggingService) 
    : IInquiryDapperRepository
{
    private readonly IDbConnection _connection = connection;
    private readonly ILoggingService _loggingService = loggingService;

    // ✅ CORRECT: Using stored procedure for data insertion
    public async Task<int> InsertLogInquiryRequestAsync(object parameters)
    {
        var serializeParameters = JsonConvert.SerializeObject(parameters);
        _loggingService.LogInfo($"Log inquiry request| params : {serializeParameters}");
        
        return await _connection.ExecuteAsync(
            "dbo.sp_insert_log_inquiry_request", 
            parameters, 
            commandType: CommandType.StoredProcedure);
    }

    // ✅ CORRECT: Using stored procedure for transaction logging
    public async Task<int> InsertTransDataInquiryAsync(object parameters)
    {
        var serializeParameters = JsonConvert.SerializeObject(parameters);
        _loggingService.LogInfo($"Log inquiry data transaction | params : {serializeParameters}");
        
        return await _connection.ExecuteAsync(
            "dbo.sp_insert_trans_data_inquiry", 
            parameters, 
            commandType: CommandType.StoredProcedure);
    }

    // ✅ CORRECT: Using stored procedure for complex data retrieval
    public async Task<IEnumerable<Domain.Entities.H2HPaymentBucket>> GetH2HPaymentBucketsAsync(
        string virtualAccountNo, string partnerId)
    {
        _loggingService.LogInfo($"Get H2H Payment Bucket data by params, VirtualAccountNo: {virtualAccountNo} | PartnerId : {partnerId}");
        
        var parameters = new DynamicParameters();
        parameters.Add("@va", virtualAccountNo);
        parameters.Add("@partnerId", partnerId);
        
        var result = await _connection.QueryAsync<Domain.Entities.H2HPaymentBucket>(
            "dbo.SP_Inquiry_H2H_Bucket",
            parameters,
            commandType: CommandType.StoredProcedure
        );
        return result;
    }

    // ✅ CORRECT: Using stored procedure for filtered data retrieval
    public async Task<IEnumerable<Domain.Entities.H2HPaymentBucket>> GetH2HPaymentBucketsUnPaidAsync(
        string virtualAccountNo, string partnerId)
    {
        var parameters = new DynamicParameters();
        parameters.Add("@va", virtualAccountNo);
        parameters.Add("@partnerId", partnerId);
        
        var result = await _connection.QueryAsync<Domain.Entities.H2HPaymentBucket>(
            "dbo.SP_Inquiry_H2H_Bucket_Unpaid",
            parameters,
            commandType: CommandType.StoredProcedure
        );
        return result;
    }

    // ✅ CORRECT: Using database function for calculations
    public async Task<string> GetPremiValueByVaAsync(string virtualAccountNo)
    {
        // Use database function instead of inline SQL
        var result = await _connection.QueryFirstOrDefaultAsync<string>(
            "SELECT dbo.fn_getpremiamount(@VirtualAccountNo) as value",
            new { VirtualAccountNo = virtualAccountNo }
        );
        return result ?? string.Empty;
    }
}

// ✅ CORRECT: Repository interface defining contracts
public interface IInquiryDapperRepository
{
    Task<int> InsertLogInquiryRequestAsync(object parameters);
    Task<int> InsertTransDataInquiryAsync(object parameters);
    Task<IEnumerable<Domain.Entities.H2HPaymentBucket>> GetH2HPaymentBucketsAsync(string virtualAccountNo, string partnerId);
    Task<IEnumerable<Domain.Entities.H2HPaymentBucket>> GetH2HPaymentBucketsUnPaidAsync(string virtualAccountNo, string partnerId);
    Task<string> GetPremiValueByVaAsync(string virtualAccountNo);
}
```

**DON'T** use complex inline SQL queries with Dapper:

```csharp
// ❌ WRONG: Complex inline SQL queries are harder to maintain
public class BadDapperRepository
{
    public async Task<List<PaymentData>> GetComplexPaymentDataAsync(string partnerId)
    {
        // Avoid complex inline SQL - use stored procedures instead
        var sql = "SELECT p.Id, p.Amount, p.Status, " +
                  "       c.CustomerName, c.AccountNumber, " +
                  "       b.BucketType, b.DueDate " +
                  "FROM Payments p " +
                  "INNER JOIN Customers c ON p.CustomerId = c.Id " +
                  "LEFT JOIN PaymentBuckets b ON p.BucketId = b.Id " +
                  "WHERE p.PartnerId = @PartnerId " +
                  "  AND p.Status IN ('PENDING', 'PROCESSING') " +
                  "  AND p.CreatedDate >= DATEADD(day, -30, GETDATE()) " +
                  "ORDER BY p.CreatedDate DESC";
        
        return await _connection.QueryAsync<PaymentData>(sql, new { PartnerId = partnerId });
    }
}

// ✅ BETTER: Use stored procedure for complex operations
public class GoodDapperRepository
{
    public async Task<List<PaymentData>> GetComplexPaymentDataAsync(string partnerId)
    {
        var parameters = new DynamicParameters();
        parameters.Add("@PartnerId", partnerId);
        
        return await _connection.QueryAsync<PaymentData>(
            "dbo.SP_GetComplexPaymentData",
            parameters,
            commandType: CommandType.StoredProcedure
        );
    }
}
```
```

### 3. When to Choose Which Data Access Pattern

**Use Repository Pattern when:**
- Need to abstract data access for testing
- Complex domain logic that requires repository methods
- Multiple data sources
- Clean Architecture with domain-driven design

**Use Generic Repository Pattern when:**
- Multiple entities with similar CRUD operations
- Want to reduce code duplication across repositories
- Need consistent data access patterns across the application
- Working with a Unit of Work pattern for transactions
- Team prefers strong abstraction and testability
- Have many simple entities with standard operations

**Use Direct DbContext when:**
- Simple CRUD operations
- Vertical Slice Architecture
- Performance is important (less abstraction)
- Small to medium applications
- Working with complex queries that don't fit repository patterns

**Use Entity Framework Core when:**
- Complex object relationships
- Need change tracking
- Rich domain models
- CRUD-heavy applications

**Use Dapper when:**
- Performance is critical
- Working with stored procedures and database functions
- Need precise control over database operations
- Read-heavy scenarios with complex business logic in the database
- Working with legacy database systems
- Bulk operations and data processing

**DO** prefer stored procedures and database functions over inline SQL:
- **Stored Procedures**: For complex business operations, data modifications, and multi-step processes
- **Database Functions**: For calculations, data transformations, and reusable business logic
- **Views**: For complex data retrieval and reporting
- **Simple Parameterized Queries**: Only for very basic operations where stored procedures would be overkill

---

## API Implementation Approaches

### 1. Standard Controllers vs Minimal APIs

#### Standard Controllers (Traditional Approach)
**DO** use Controllers for complex APIs with many endpoints and cross-cutting concerns:

```csharp
// ✅ CORRECT: Standard Controllers for complex scenarios
[ApiController]
[Route("api/v1/[controller]")]
[Authorize]
public class StudentsController : ControllerBase
{
    private readonly ISender _sender;
    private readonly ILogger<StudentsController> _logger;
    
    public StudentsController(ISender sender, ILogger<StudentsController> logger)
    {
        _sender = sender;
        _logger = logger;
    }
    
    /// <summary>
    /// Creates a new student
    /// </summary>
    /// <param name="command">Student creation details</param>
    /// <returns>Created student information</returns>
    [HttpPost]
    [ProducesResponseType(typeof(CreateStudentResult), StatusCodes.Status201Created)]
    [ProducesResponseType(typeof(ValidationProblemDetails), StatusCodes.Status400BadRequest)]
    public async Task<IActionResult> Create([FromBody] CreateStudentCommand command)
    {
        _logger.LogInformation("Creating student with name: {StudentName}", command.Name);
        var result = await _sender.Send(command);
        return CreatedAtAction(nameof(GetById), new { id = result.Id }, result);
    }
    
    /// <summary>
    /// Gets a student by ID
    /// </summary>
    [HttpGet("{id:int}")]
    [ProducesResponseType(typeof(StudentDto), StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<IActionResult> GetById(int id)
    {
        var query = new GetStudentByIdQuery(id);
        var result = await _sender.Send(query);
        return Ok(result);
    }
    
    /// <summary>
    /// Gets a paginated list of students
    /// </summary>
    [HttpGet]
    [ProducesResponseType(typeof(GetStudentListResult), StatusCodes.Status200OK)]
    public async Task<IActionResult> GetList([FromQuery] GetStudentListQuery query)
    {
        var result = await _sender.Send(query);
        return Ok(result);
    }
    
    /// <summary>
    /// Updates an existing student
    /// </summary>
    [HttpPut("{id:int}")]
    [ProducesResponseType(StatusCodes.Status204NoContent)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<IActionResult> Update(int id, [FromBody] UpdateStudentCommand command)
    {
        if (id != command.Id)
            return BadRequest("ID mismatch");
            
        await _sender.Send(command);
        return NoContent();
    }
    
    /// <summary>
    /// Deletes a student
    /// </summary>
    [HttpDelete("{id:int}")]
    [ProducesResponseType(StatusCodes.Status204NoContent)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<IActionResult> Delete(int id)
    {
        await _sender.Send(new DeleteStudentCommand(id));
        return NoContent();
    }
}
```

#### Minimal APIs (Modern Approach)
**DO** use Minimal APIs for simple APIs or microservices:

```csharp
// ✅ CORRECT: Minimal APIs for simple scenarios
public static class StudentEndpoints
{
    public static void MapStudentEndpoints(this IEndpointRouteBuilder app)
    {
        var group = app.MapGroup("/api/v1/students")
            .WithTags("Students")
            .RequireAuthorization();
            
        group.MapPost("/", CreateStudent)
            .WithName("CreateStudent")
            .WithSummary("Creates a new student")
            .WithOpenApi()
            .Produces<CreateStudentResult>(StatusCodes.Status201Created)
            .ProducesValidationProblem();
            
        group.MapGet("/{id:int}", GetStudentById)
            .WithName("GetStudentById")
            .WithSummary("Gets a student by ID")
            .WithOpenApi()
            .Produces<StudentDto>()
            .Produces(StatusCodes.Status404NotFound);
            
        group.MapGet("/", GetStudentList)
            .WithName("GetStudentList")
            .WithSummary("Gets a paginated list of students")
            .WithOpenApi()
            .Produces<GetStudentListResult>();
            
        group.MapPut("/{id:int}", UpdateStudent)
            .WithName("UpdateStudent")
            .WithSummary("Updates an existing student")
            .WithOpenApi()
            .Produces(StatusCodes.Status204NoContent)
            .Produces(StatusCodes.Status404NotFound);
            
        group.MapDelete("/{id:int}", DeleteStudent)
            .WithName("DeleteStudent")
            .WithSummary("Deletes a student")
            .WithOpenApi()
            .Produces(StatusCodes.Status204NoContent)
            .Produces(StatusCodes.Status404NotFound);
    }
    
    private static async Task<IResult> CreateStudent(
        CreateStudentCommand command,
        ISender sender,
        ILogger<StudentEndpoints> logger)
    {
        logger.LogInformation("Creating student with name: {StudentName}", command.Name);
        var result = await sender.Send(command);
        return Results.CreatedAtRoute("GetStudentById", new { id = result.Id }, result);
    }
    
    private static async Task<IResult> GetStudentById(
        int id,
        ISender sender)
    {
        var query = new GetStudentByIdQuery(id);
        var result = await sender.Send(query);
        return Results.Ok(result);
    }
    
    private static async Task<IResult> GetStudentList(
        [AsParameters] GetStudentListQuery query,
        ISender sender)
    {
        var result = await sender.Send(query);
        return Results.Ok(result);
    }
    
    private static async Task<IResult> UpdateStudent(
        int id,
        UpdateStudentCommand command,
        ISender sender)
    {
        if (id != command.Id)
            return Results.BadRequest("ID mismatch");
            
        await sender.Send(command);
        return Results.NoContent();
    }
    
    private static async Task<IResult> DeleteStudent(
        int id,
        ISender sender)
    {
        await sender.Send(new DeleteStudentCommand(id));
        return Results.NoContent();
    }
}

// Register in Program.cs
var app = builder.Build();
app.MapStudentEndpoints();
```

#### Feature-Based Minimal API (Vertical Slice)
**DO** co-locate minimal API endpoints with their features:

```csharp
// ✅ CORRECT: Feature-based endpoint organization
namespace MyApp.Features.Students.Create;

public static class CreateStudentEndpoint
{
    public static void Map(IEndpointRouteBuilder app) => app
        .MapPost("/api/students", Handle)
        .WithName("CreateStudent")
        .WithSummary("Creates a new student")
        .WithOpenApi();
        
    private static async Task<IResult> Handle(
        CreateStudentCommand command,
        CreateStudentHandler handler,
        IValidator<CreateStudentCommand> validator)
    {
        var validationResult = await validator.ValidateAsync(command);
        if (!validationResult.IsValid)
            return Results.ValidationProblem(validationResult.ToDictionary());
            
        var result = await handler.Handle(command, CancellationToken.None);
        return Results.Created($"/api/students/{result.Id}", result);
    }
}

// Feature structure:
// Features/
//   Students/
//     Create/
//       CreateStudent.cs (command/dto)
//       CreateStudentHandler.cs
//       CreateStudentValidator.cs
//       CreateStudentEndpoint.cs
```

**DON'T** mix controller and minimal API approaches in the same feature area:

```csharp
// ❌ WRONG: Mixing approaches inconsistently
// Having some student endpoints as controllers and others as minimal APIs
[ApiController]
public class StudentsController : ControllerBase
{
    [HttpPost] // Controller approach
    public async Task<IActionResult> Create(CreateStudentCommand command) { }
}

// And then also having:
app.MapGet("/api/students/{id}", GetStudentById); // Minimal API approach
```

### 2. When to Choose Which API Approach

**Use Standard Controllers when:**
- Complex APIs with many endpoints
- Need extensive use of filters and middleware
- Team is familiar with traditional MVC patterns
- Rich model binding and validation requirements
- Extensive use of attributes for configuration

**Use Minimal APIs when:**
- Simple APIs or microservices
- Performance is critical (less overhead)
- Modern, functional programming style preferred
- Quick prototyping
- Cloud-native applications

**Use Feature-Based Minimal APIs when:**
- Vertical Slice Architecture
- Each endpoint is largely independent
- Team prefers co-location of related code
- Microservices or single-responsibility APIs

---

## Naming Conventions

### 1. General Rules

| Element | Convention | Example |
|---------|------------|---------|
| Classes | PascalCase | `Student`, `GetStudentListService` |
| Interfaces | PascalCase with 'I' prefix | `ISchoolDbContext`, `IStudentDomainService` |
| Methods | PascalCase | `SaveChangesAsync`, `GetListAsync` |
| Properties | PascalCase | `FirstName`, `CreatedBy` |
| Fields (private) | camelCase with underscore | `_dbContext`, `_logger` |
| Variables | camelCase | `connectionString`, `currencyList` |
| Constants | PascalCase | `MaxRetryAttempts`, `DefaultPageSize` |
| Parameters | camelCase | `request`, `cancellationToken` |

### 2. Specific Patterns

**DO** use descriptive names that clearly indicate purpose:

```csharp
// ✅ GOOD: Descriptive and clear
public async Task<GetStudentListResult> Handle(
    GetStudentListQuery request, 
    CancellationToken cancellationToken)

// ✅ GOOD: Clear method names
public async Task<Employee> GetEmployeeWithDepartmentAsync(int employeeId)
public async Task UpdateEmployeeSalaryAsync(int employeeId, decimal newSalary)
```

**DON'T** use abbreviated or unclear names:

```csharp
// ❌ BAD: Abbreviated and unclear
public async Task<GetListRes> Handle(GetListReq req, CancellationToken ct)

// ❌ BAD: Unclear abbreviations
public async Task<List<Emp>> GetEmpsAsync()
public async Task UpdEmpAsync(int id, decimal sal)

// ❌ BAD: Generic names that don't indicate purpose
public async Task ProcessData(object data)
public void DoStuff(int id)
public string GetValue() // What value?
```

**DO** suffix async methods with 'Async':

```csharp
// ✅ CORRECT: Async suffix
public async Task<List<Car>> GetCarsAsync()
public async Task SaveChangesAsync(CancellationToken cancellationToken)
public async Task<bool> ValidateStudentAsync(Student student)
```

**DON'T** forget async suffix or use it incorrectly:

```csharp
// ❌ WRONG: Missing async suffix
public async Task<List<Car>> GetCars() // Should be GetCarsAsync

// ❌ WRONG: Async suffix on non-async method
public List<Car> GetCarsAsync() // No async, shouldn't have Async suffix

// ❌ WRONG: Inconsistent naming
public async Task SaveData() // Should be SaveDataAsync
public async Task UpdateAsync() // Too generic, should be UpdateWhatAsync
```

**DO** use meaningful names for DDD application services and domain services:

```csharp
// ✅ GOOD: Pattern: {Action}{Entity}Service or {Entity}DomainService
public class GetStudentListService
public class CreateEmployeeService
public class UpdateCarDetailsService
public class DeleteWeatherRecordService
public class StudentDomainService
```

**DON'T** use generic or unclear service names:

```csharp
// ❌ BAD: Too generic
public class DataService
public class ProcessService
public class RequestService

// ❌ BAD: Unclear purpose
public class StudentService // Does what exactly?
public class CarProcessor // Process how?
public class EntityManager // Manages what operations?
```

### 3. Database Entity Naming

**DO** follow database naming conventions:
```csharp
public class Student : AuditedEntity
{
    public int Id { get; set; }
    public string? FirstName { get; set; }
    public string? LastName { get; set; }
    public string? Email { get; set; }
    public DateTime? EnrollmentDate { get; set; }
}
```

---

---

## File and Project Organization

### 1. Clean Architecture Project Structure

```
src/
├── MyApp.Domain/                 # Core business logic
│   ├── Entities/                 # Aggregate roots and entities
│   │   ├── Student.cs
│   │   ├── Course.cs
│   │   └── Enrollment.cs
│   ├── ValueObjects/             # Value objects
│   │   ├── Email.cs
│   │   └── Address.cs
│   ├── DomainServices/           # Domain services
│   │   └── IStudentDomainService.cs
│   ├── Interfaces/               # Repository abstractions
│   │   ├── IStudentRepository.cs
│   │   └── IUnitOfWork.cs
│   └── Exceptions/               # Domain exceptions
│       └── StudentNotFoundException.cs
├── MyApp.Application/            # Use cases and application logic
│   ├── UseCases/                 # Application services/use cases
│   │   ├── Students/
│   │   │   ├── CreateStudent/
│   │   │   │   ├── CreateStudentUseCase.cs
│   │   │   │   ├── CreateStudentRequest.cs
│   │   │   │   ├── CreateStudentResult.cs
│   │   │   │   └── CreateStudentValidator.cs
│   │   │   └── GetStudentList/
│   │   └── Courses/
│   ├── DTOs/                     # Data transfer objects
│   │   ├── StudentDto.cs
│   │   └── CourseDto.cs
│   └── Interfaces/               # Application service interfaces
│       └── IEmailService.cs
├── MyApp.Infrastructure/         # External concerns
│   ├── Data/                     # Database context and configurations
│   │   ├── AppDbContext.cs
│   │   └── Configurations/
│   │       ├── StudentConfiguration.cs
│   │       └── CourseConfiguration.cs
│   ├── Repositories/             # Repository implementations
│   │   ├── StudentRepository.cs
│   │   └── UnitOfWork.cs
│   ├── Services/                 # External service implementations
│   │   └── EmailService.cs
│   └── Migrations/               # EF migrations
└── MyApp.API/                   # Web layer
    ├── Controllers/
    │   └── StudentsController.cs
    ├── Endpoints/               # Minimal API endpoints
    │   └── StudentEndpoints.cs
    ├── Middlewares/
    │   └── ExceptionMiddleware.cs
    └── Extensions/
        └── ServiceCollectionExtensions.cs
```

### 2. Vertical Slice Project Structure

```
src/
├── MyApp.API/                   # Entry point and shared concerns
│   ├── Program.cs
│   ├── appsettings.json
│   └── Middlewares/
├── MyApp.Features/              # Feature-based organization
│   ├── Students/
│   │   ├── Create/
│   │   │   ├── CreateStudent.cs           # Command/DTO
│   │   │   ├── CreateStudentHandler.cs    # Business logic
│   │   │   ├── CreateStudentValidator.cs  # Validation
│   │   │   └── CreateStudentEndpoint.cs   # API endpoint
│   │   ├── GetById/
│   │   │   ├── GetStudentById.cs
│   │   │   ├── GetStudentByIdHandler.cs
│   │   │   └── GetStudentByIdEndpoint.cs
│   │   ├── GetList/
│   │   └── Update/
│   ├── Courses/
│   │   ├── Create/
│   │   ├── GetList/
│   │   └── Update/
│   └── Enrollments/
├── MyApp.Shared/                # Shared utilities and infrastructure
│   ├── Database/
│   │   ├── AppDbContext.cs
│   │   └── Configurations/
│   ├── Services/
│   │   └── EmailService.cs
│   ├── Behaviors/               # MediatR behaviors
│   │   └── ValidationBehavior.cs
│   └── Exceptions/
│       └── NotFoundException.cs
└── MyApp.Tests/                 # Tests organized by feature
    ├── Students/
    │   ├── Create/
    │   └── GetById/
    └── Courses/
```

### 3. File Naming Conventions

**DO** match file names with primary class names:

```
CreateStudentHandler.cs          # Contains CreateStudentHandler class
StudentConfiguration.cs         # Contains StudentConfiguration class
GetStudentListEndpoint.cs       # Contains GetStudentListEndpoint class
```

**DO** use descriptive folder names that indicate purpose:

```
// Good - clear purpose
Features/Students/Create/
Features/Students/GetById/
UseCases/Students/CreateStudent/

// Bad - generic names
Handlers/
Services/
Utilities/
```

### 4. Namespace Conventions

**DO** follow the folder structure in namespaces:

```csharp
// Clean Architecture
namespace MyApp.Domain.Entities;              // Domain/Entities/
namespace MyApp.Application.UseCases.Students; // Application/UseCases/Students/
namespace MyApp.Infrastructure.Repositories;   // Infrastructure/Repositories/
namespace MyApp.API.Controllers;              // API/Controllers/

// Vertical Slice
namespace MyApp.Features.Students.Create;     // Features/Students/Create/
namespace MyApp.Features.Students.GetById;   // Features/Students/GetById/
namespace MyApp.Shared.Database;             // Shared/Database/
```

---

## Code Structure and Formatting

### 1. Indentation and Spacing

**DO** use 4 spaces for indentation (no tabs):
```csharp
public class Employee
{
    public int Id { get; set; }
    public string? FirstName { get; set; }
    public string? LastName { get; set; }
    
    public static Employee Create(int id, string? firstName, string? lastName)
    {
        return new Employee
        {
            Id = id,
            FirstName = firstName,
            LastName = lastName
        };
    }
}
```

**DO** use blank lines to separate logical sections:
```csharp
public class GetEmployeeListService
{
    private readonly ICompanyDbContext _dbContext;

    public GetEmployeeListService(ICompanyDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task<GetListMstCurrencyResult> GetListAsync(
        GetListMstCurrencyRequest request, 
        CancellationToken cancellationToken)
    {
        // Implementation
    }
}
```

### 2. Braces and Line Breaks

**DO** use Allman brace style:
```csharp
// Correct
if (condition)
{
    DoSomething();
}

// Wrong
if (condition) {
    DoSomething();
}
```

**DO** place opening braces on new lines:
```csharp
public class ExampleClass
{
    public void ExampleMethod()
    {
        if (someCondition)
        {
            // Do something
        }
    }
}
```

### 3. Line Length and Wrapping

**DO** limit lines to 100-120 characters:
```csharp
// Good - readable parameter list
public async Task<GetListMstCurrencyResult> Handle(
    GetListMstCurrencyQuery request, 
    CancellationToken cancellationToken)

// Better for very long parameter lists
public async Task<SubmitNewClaimResult> Handle(
    SubmitNewClaimCommand request,
    CancellationToken cancellationToken)
```

---

## Language-Specific Guidelines

### 1. Variable Declarations

**DO** use `var` when the type is obvious:
```csharp
// Good - type is obvious
var currencies = new List<MstCurrency>();
var result = await dbContext.MstCurrencies.ToListAsync();

// Bad - type is not obvious
var data = GetSomeData(); // What type is returned?
```

**DO** use explicit types when clarity is needed:
```csharp
// Preferred when type isn't obvious
IQueryable<MstCurrency> query = dbContext.MstCurrencies;
Expression<Func<MstCurrency, bool>> filter = PredicateHelper.True<MstCurrency>();
```

### 2. String Handling

**DO** use string interpolation for simple concatenation:
```csharp
// Good
var message = $"Currency {currency.CurrencyCode} not found";

// Bad
var message = "Currency " + currency.CurrencyCode + " not found";
```

**DO** use multi-line strings with proper formatting for complex SQL queries:
```csharp
// Good for database queries - avoid raw string literals
var sql = "SELECT c.Id, c.CurrencyCode " +
          "FROM MstCurrencies c " +
          "WHERE c.IsActive = @IsActive " +
          "ORDER BY c.CurrencyCode";

// Alternative: Use string concatenation for better readability
var sql = "SELECT c.Id, c.CurrencyCode " +
          "FROM MstCurrencies c " + 
          "WHERE c.IsActive = @IsActive " +
          "ORDER BY c.CurrencyCode";

// For very complex queries, consider using StringBuilder
var sqlBuilder = new StringBuilder();
sqlBuilder.AppendLine("SELECT c.Id, c.CurrencyCode");
sqlBuilder.AppendLine("FROM MstCurrencies c");
sqlBuilder.AppendLine("WHERE c.IsActive = @IsActive");
sqlBuilder.AppendLine("ORDER BY c.CurrencyCode");
var sql = sqlBuilder.ToString();
```

**DON'T** use raw string literals for database queries:
```csharp
// ❌ WRONG: Avoid raw string literals for SQL queries
var sql = """
    SELECT * FROM Students 
    WHERE Grade = @Grade
    """;

// ✅ BETTER: Use string concatenation
var sql = "SELECT * FROM Students " +
          "WHERE Grade = @Grade";
```

### 3. Null Handling

**DO** use nullable reference types:
```csharp
public class MstCurrency
{
    public string? CurrencyCode { get; set; }  // Nullable
    public string Description { get; set; } = string.Empty;  // Non-nullable with default
}
```

**DO** use null-conditional operators:
```csharp
// Good
var length = currency?.CurrencyCode?.Length ?? 0;

// Instead of
var length = 0;
if (currency != null && currency.CurrencyCode != null)
{
    length = currency.CurrencyCode.Length;
}
```

### 4. Collection Initialization

**DO** use collection expressions (C# 12):
```csharp
// Preferred
List<string> currencies = ["USD", "EUR", "GBP"];

// Traditional (still acceptable)
var currencies = new List<string> { "USD", "EUR", "GBP" };
```

### 5. Pattern Matching

**DO** use pattern matching where appropriate:
```csharp
// Good - using pattern matching
public string GetStatusMessage(string status) => status switch
{
    "Pending" => "Request is pending approval",
    "Approved" => "Request has been approved",
    "Rejected" => "Request was rejected",
    _ => "Unknown status"
};
```

---

## Validation and Error Handling

### 1. FluentValidation Implementation

**DO** create validators with specific, actionable rules:

```csharp
// ✅ CORRECT: Comprehensive validation with clear messages
public class CreateEmployeeCommandValidator : AbstractValidator<CreateEmployeeCommand>
{
    public CreateEmployeeCommandValidator()
    {
        RuleFor(x => x.Name)
            .NotEmpty()
            .WithMessage("Employee name is required")
            .MaximumLength(100)
            .WithMessage("Employee name cannot exceed 100 characters");
            
        RuleFor(x => x.Email)
            .NotEmpty()
            .WithMessage("Email address is required")
            .EmailAddress()
            .WithMessage("Please provide a valid email address");
            
        RuleFor(x => x.Age)
            .GreaterThan(18)
            .WithMessage("Employee must be at least 18 years old")
            .LessThan(65)
            .WithMessage("Employee age cannot exceed 65 years");
    }
}
```

**DON'T** skip validation or use generic validation:

```csharp
// ❌ WRONG: No validation at all
public class CreateEmployeeHandler
{
    public async Task<CreateEmployeeResult> Handle(CreateEmployeeCommand request)
    {
        // No validation - accepting any input!
        var employee = new Employee
        {
            Name = request.Name,     // Could be null or empty
            Email = request.Email,   // Could be invalid format
            Age = request.Age        // Could be negative or unrealistic
        };
    }
}

// ❌ WRONG: Generic or insufficient validation
public class BadValidator : AbstractValidator<CreateEmployeeCommand>
{
    public BadValidator()
    {
        RuleFor(x => x.Name).NotNull(); // Too generic
        RuleFor(x => x.Age).GreaterThan(0); // No error message
    }
}
```

**DO** use meaningful and user-friendly error messages:

```csharp
// ✅ GOOD: Specific and helpful messages
RuleFor(x => x.StudentId)
    .GreaterThan(0)
    .WithMessage("Student ID must be greater than 0");

RuleFor(x => x.Email)
    .NotEmpty()
    .WithMessage("Email address is required")
    .EmailAddress()
    .WithMessage("Please provide a valid email address format");

RuleFor(x => x.VehicleNumber)
    .NotEmpty()
    .WithMessage("Vehicle number is required")
    .Matches(@"^[A-Z]{2}\d{2}[A-Z]{2}\d{4}$")
    .WithMessage("Vehicle number must be in format: 2 letters, 2 digits, 2 letters, 4 digits (e.g., AB12CD3456)");
```

**DON'T** use generic or confusing error messages:

```csharp
// ❌ BAD: Generic and unhelpful messages
RuleFor(x => x.StudentId)
    .GreaterThan(0)
    .WithMessage("Invalid ID"); // Not specific enough

RuleFor(x => x.Email)
    .EmailAddress()
    .WithMessage("Bad email"); // Too terse

RuleFor(x => x.VehicleNumber)
    .Matches(@"^[A-Z]{2}\d{2}[A-Z]{2}\d{4}$")
    .WithMessage("Invalid format"); // User doesn't know what format is expected

// ❌ WRONG: Technical messages for business users
RuleFor(x => x.Salary)
    .Must(x => x != null && x.Value > 0)
    .WithMessage("Property Salary failed validation rule Must(x => x != null && x.Value > 0)");
```

### 2. Exception Handling

**DO** use global exception handling:
```csharp
public class ExceptionMiddleware
{
    public async Task InvokeAsync(HttpContext httpContext)
    {
        try
        {
            await _next(httpContext);
        }
        catch (Exception ex)
        {
            await HandleExceptionAsync(httpContext, ex);
        }
    }

    private Task HandleExceptionAsync(HttpContext context, Exception exception)
    {
        var response = new ObjectResponse<bool>();

        if (exception is UnauthorizedAccessException)
        {
            context.Response.StatusCode = (int)HttpStatusCode.Unauthorized;
            response.AddErrorMessage("Unauthorized access. Please log in.");
        }
        else if (exception is StudentNotFoundException)
        {
            context.Response.StatusCode = (int)HttpStatusCode.NotFound;
            response.AddErrorMessage("Student not found.");
        }
        else if (exception is ValidationException)
        {
            context.Response.StatusCode = (int)HttpStatusCode.BadRequest;
            response.AddErrorMessage("Validation failed.");
        }
        // Handle other exception types...
        
        return context.Response.WriteAsJsonAsync(response);
    }
}
```

**DO** use specific exception types for different scenarios:
```csharp
// ✅ GOOD: Specific exceptions for different business cases
public async Task<Student> GetStudentAsync(int studentId)
{
    if (studentId <= 0)
        throw new ArgumentException("Student ID must be greater than 0", nameof(studentId));

    var student = await _repository.GetByIdAsync(studentId);
    
    if (student == null)
        throw new StudentNotFoundException($"Student with ID {studentId} not found");

    if (!student.IsActive)
        throw new StudentInactiveException($"Student {studentId} is not currently active");

    return student;
}

// Custom exceptions for specific business rules
public class StudentNotFoundException : Exception
{
    public StudentNotFoundException(string message) : base(message) { }
}

public class StudentInactiveException : Exception
{
    public StudentInactiveException(string message) : base(message) { }
}
```

**DON'T** use generic exceptions or swallow exceptions:
```csharp
// ❌ BAD: Generic exception loses context
public async Task<Student> GetStudentAsync(int studentId)
{
    var student = await _repository.GetByIdAsync(studentId);
    
    if (student == null)
        throw new Exception("Something went wrong"); // Too generic!

    return student;
}

// ❌ WRONG: Swallowing exceptions
public async Task<Student> GetStudentAsync(int studentId)
{
    try
    {
        return await _repository.GetByIdAsync(studentId);
    }
    catch (Exception)
    {
        return null; // Lost the error information!
    }
}

// ❌ BAD: Not handling specific cases
public async Task<Student> GetStudentAsync(int studentId)
{
    try
    {
        return await _repository.GetByIdAsync(studentId);
    }
    catch (Exception ex)
    {
        // All exceptions treated the same way
        throw new Exception("Database error occurred");
    }
}
```

### 3. Validation Behavior

**DO** use MediatR pipeline behaviors for validation:
```csharp
public class ValidationBehavior<TRequest, TResponse>
    : IPipelineBehavior<TRequest, TResponse>
    where TRequest : ICommand<TResponse>
{
    private readonly IEnumerable<IValidator<TRequest>> _validators;

    public async Task<TResponse> Handle(
        TRequest request, 
        RequestHandlerDelegate<TResponse> next, 
        CancellationToken cancellationToken)
    {
        var context = new ValidationContext<TRequest>(request);
        var validationResults = await Task.WhenAll(
            _validators.Select(v => v.ValidateAsync(context, cancellationToken)));

        var failures = validationResults
            .Where(r => r.Errors.Any())
            .SelectMany(r => r.Errors)
            .ToList();

        if (failures.Any())
            throw new ValidationException(failures);

        return await next();
    }
}
```

---

## Dependency Injection and Services

### 1. Service Registration Patterns

**DO** use extension methods for clean service registration:
```csharp
public static class DependencyInjection
{
    public static IServiceCollection AddApplicationServices(this IServiceCollection services)
    {
        services.AddMediatR(cfg => cfg.RegisterServicesFromAssembly(Assembly.GetExecutingAssembly()));
        services.AddValidatorsFromAssembly(Assembly.GetExecutingAssembly());
        services.AddTransient(typeof(IPipelineBehavior<,>), typeof(ValidationBehavior<,>));
        
        return services;
    }
}
```

### 2. Service Lifetimes

**DO** use appropriate service lifetimes:
```csharp
// Singleton - expensive to create, stateless
services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();

// Scoped - per request lifetime
services.AddScoped<ISchoolDbContext, SchoolDbContext>();

// Transient - lightweight, stateless
services.AddTransient<IValidator<GetStudentByIdQuery>, GetStudentByIdQueryValidator>();
```

### 3. Constructor Injection

**DO** use primary constructors where appropriate:
```csharp
// Primary constructor (C# 12)
public class GetStudentListHandler(ISchoolDbContext dbContext)
    : IQueryHandler<GetStudentListQuery, GetStudentListResult>
{
    public async Task<GetListMstCurrencyResult> Handle(
        GetListMstCurrencyQuery request, 
        CancellationToken cancellationToken)
    {
        // Use dbContext directly
    }
}
```

**DO** store injected services in readonly fields for traditional constructors:
```csharp
public class TraditionalHandler : IQueryHandler<SomeQuery, SomeResult>
{
    private readonly IArRecDbContext _dbContext;
    private readonly ILogger<TraditionalHandler> _logger;

    public TraditionalHandler(IArRecDbContext dbContext, ILogger<TraditionalHandler> logger)
    {
        _dbContext = dbContext;
        _logger = logger;
    }
}
```

---

## Testing Guidelines

### 1. Test Structure

**DO** organize tests by functionality:
```
arreconcile.unittests/
├── Services/
│   ├── Students/
│   │   └── UpsertMstDetailReassuradur/
│   │       └── UpsertMstDetailReassuradurServiceTests.cs
│   └── Students/
│       └── GetListMstCurrency/
│           └── GetListMstCurrencyServiceTests.cs
└── Data/
    └── TestData.cs
```

### 2. Test Naming

**DO** use descriptive test method names:
```csharp
[Test]
public async Task Handle_WithValidRequest_ReturnsSuccess()

[Test]
public async Task Handle_WithNonExistentRecord_ThrowsNotFoundException()

[Test]
public void Validate_MissingReasId_ShouldFailValidation()
```

### 3. Test Implementation

**DO** use Arrange-Act-Assert pattern:
```csharp
[Test]
public async Task InsertNewRecord_ReturnsSuccess()
{
    // Arrange
    var request = new UpsertMstDetailReassuradurRequest
    {
        ReasId = 12345,
        COB = "COB123",
        EmailPic = "test@example.com",
        Department = "Finance"
    };

    mockDbContext.Setup(x => x.MstPicReas)
        .ReturnsDbSet(new List<MstPicReas>());

    // Act
    var result = await service.UpsertAsync(request, CancellationToken.None);

    // Assert
    Assert.That(result.Result.IsSuccess, Is.True);
    mockDbContext.Verify(x => x.SaveChangesAsync(It.IsAny<CancellationToken>()), Times.Once);
}
```

### 4. Validation Testing

**DO** test validation rules separately:
```csharp
[Test]
public void Validate_MissingReasId_ShouldFailValidation()
{
    // Arrange
    var command = new UpsertMstDetailReassuradurCommand(
        new UpsertMstDetailReassuradurParamRequest
        {
            COB = "COB123",
            EmailPic = "test@example.com",
            Department = "Finance"
        });

    // Act
    var result = validator.TestValidate(command);

    // Assert
    result.ShouldHaveValidationErrorFor(x => x.Request.ReasId)
        .WithErrorMessage("ReasId is required");
}
```

---

## Performance and Best Practices

### 1. Async/Await

**DO** use async/await consistently throughout the call stack:

```csharp
// ✅ CORRECT: Async all the way through
public async Task<GetListMstCurrencyResult> GetListAsync(
    GetListMstCurrencyRequest request, 
    CancellationToken cancellationToken)
{
    var result = await dbContext.MstCurrencies
        .Where(x => x.IsActive)
        .ToListAsync(cancellationToken);
    
    return new GetListMstCurrencyResult(result);
}

// ✅ CORRECT: Proper async endpoint
app.MapGet("v1/currencies", async (ISender sender, CancellationToken cancellationToken) =>
{
    var result = await sender.Send(new GetListMstCurrencyQuery(null), cancellationToken);
    return Results.Ok(result);
});
```

**DON'T** block on async operations or mix sync/async incorrectly:

```csharp
// ❌ WRONG: Blocking async operation with .Result
public GetListMstCurrencyResult Handle(GetListMstCurrencyQuery request)
{
    var result = dbContext.MstCurrencies
        .Where(x => x.IsActive)
        .ToListAsync()
        .Result; // DEADLOCK RISK!
    
    return new GetListMstCurrencyResult(result);
}

// ❌ WRONG: Using .Wait() blocks the thread
public void ProcessCurrencies()
{
    var task = GetCurrenciesAsync();
    task.Wait(); // DEADLOCK RISK!
}

// ❌ WRONG: Mixing sync and async incorrectly
public async Task<List<MstCurrency>> GetCurrenciesAsync()
{
    var currencies = dbContext.MstCurrencies.ToList(); // Sync call in async method
    await Task.Delay(100); // Why are we delaying?
    return currencies;
}

// ❌ WRONG: Unnecessary Task.Run in ASP.NET Core
public async Task<IActionResult> GetCurrencies()
{
    var result = await Task.Run(() => 
    {
        return dbContext.MstCurrencies.ToList(); // Don't use Task.Run in web apps!
    });
    return Ok(result);
}
```

### 2. Database Performance

**DO** use cancellation tokens:
```csharp
public async Task<List<MstCurrency>> GetCurrenciesAsync(CancellationToken cancellationToken)
{
    return await dbContext.MstCurrencies
        .Where(x => x.IsActive)
        .ToListAsync(cancellationToken);
}
```

**DO** handle string comparisons properly in EF Core:
```csharp
// Correct for EF Core - disable warning for case-insensitive comparison
if (!string.IsNullOrEmpty(request.Keyword))
{
    var keywordLower = request.Keyword.ToLower();
    #pragma warning disable CA1862
    queryFilter = queryFilter.And(x => x.CurrencyCode.ToLower().Contains(keywordLower));
    #pragma warning restore CA1862
}
```

### 3. Memory Management

**DO** use appropriate collection types:
```csharp
// Use List<T> for known size collections
var currencies = new List<MstCurrency>(capacity: expectedCount);

// Use IEnumerable<T> for streaming data
public IEnumerable<MstCurrency> GetCurrenciesLazy()
{
    return dbContext.MstCurrencies.Where(x => x.IsActive);
}
```

**DO** dispose resources properly:
```csharp
// Using statement for automatic disposal
using var scope = serviceScopeFactory.CreateScope();
var context = scope.ServiceProvider.GetRequiredService<ArRecDbContext>();
```

---

## Documentation and Comments

### 1. XML Documentation

**DO** use XML documentation for public APIs:
```csharp
/// <summary>
/// Represents a master currency entity with basic currency information.
/// </summary>
/// <remarks>
/// This entity stores currency codes and descriptions used throughout the system.
/// It inherits audit fields from AuditedEntity for tracking changes.
/// </remarks>
public class MstCurrency : AuditedEntity
{
    /// <summary>
    /// Gets or sets the unique identifier for the currency.
    /// </summary>
    public int Id { get; set; }

    /// <summary>
    /// Gets or sets the ISO currency code (e.g., USD, EUR, GBP).
    /// </summary>
    /// <value>
    /// A 3-character ISO currency code, or null if not specified.
    /// </value>
    public string? CurrencyCode { get; set; }
}
```

### 2. Code Comments

**DO** explain complex business logic:
```csharp
// Disable CA1862 warning for Entity Framework Core compatibility
// EF Core cannot translate StringComparison to SQL, so we use ToLower() instead
#pragma warning disable CA1862
queryFilter = queryFilter.And(x => x.CurrencyCode.ToLower().Contains(keywordLower));
#pragma warning restore CA1862
```

**DO** document non-obvious code:
```csharp
public static WeatherData Create(WeatherData source)
{
    // Create a new instance to avoid reference issues
    // when the original entity is modified elsewhere
    var weatherToCreate = new WeatherData
    {
        Id = source.Id,
        Temperature = source.Temperature,
        City = source.City,
        Humidity = source.Humidity,
        // ... copy other properties
    };
    
    return weatherToCreate;
}
```

### 3. README and Documentation

**DO** maintain project documentation:
- Keep README.md updated with current setup instructions
- Document API endpoints and their purposes
- Explain architectural decisions
- Provide examples for common scenarios

**DO** document breaking changes:
```csharp
/// <summary>
/// Creates a new MstCurrency instance.
/// </summary>
/// <param name="id">The unique identifier.</param>
/// <param name="currencyCode">The ISO currency code.</param>
/// <param name="description">Optional description.</param>
/// <returns>A new MstCurrency instance.</returns>
/// <remarks>
/// Changed in v2.0: Description parameter is now optional.
/// </remarks>
public static MstCurrency Create(int id, string currencyCode, string? description = null)
```

---

## Common Patterns and Templates

### 1. Clean Architecture Templates

#### Domain Entity Template

```csharp
// ✅ CORRECT: Rich domain entity with business logic
public class Student : AggregateRoot
{
    public int Id { get; private set; }
    public string Name { get; private set; }
    public Email Email { get; private set; }
    public int Grade { get; private set; }
    public StudentStatus Status { get; private set; }
    
    private readonly List<Enrollment> _enrollments = new();
    public IReadOnlyList<Enrollment> Enrollments => _enrollments.AsReadOnly();

    // Private constructor for EF Core
    private Student() { }

    // Factory method for creation
    public static Student Create(string name, Email email, int grade)
    {
        // Domain validation
        if (string.IsNullOrWhiteSpace(name))
            throw new DomainException("Student name cannot be empty");
        if (grade < 1 || grade > 12)
            throw new DomainException("Grade must be between 1 and 12");

        return new Student
        {
            Name = name,
            Email = email,
            Grade = grade,
            Status = StudentStatus.Active
        };
    }

    // Business logic methods
    public void EnrollInCourse(Course course)
    {
        if (Status != StudentStatus.Active)
            throw new DomainException("Only active students can enroll in courses");

        if (_enrollments.Any(e => e.CourseId == course.Id))
            throw new DomainException("Student is already enrolled in this course");

        var enrollment = Enrollment.Create(Id, course.Id);
        _enrollments.Add(enrollment);
    }

    public void ChangeGrade(int newGrade)
    {
        if (newGrade < 1 || newGrade > 12)
            throw new DomainException("Grade must be between 1 and 12");
        
        Grade = newGrade;
    }
}
```

#### Application Use Case Template

```csharp
// ✅ CORRECT: Clean Architecture use case
public interface ICreateStudentUseCase
{
    Task<CreateStudentResult> ExecuteAsync(CreateStudentRequest request, CancellationToken cancellationToken);
}

public class CreateStudentUseCase : ICreateStudentUseCase
{
    private readonly IStudentRepository _studentRepository;
    private readonly IEmailService _emailService;
    private readonly IUnitOfWork _unitOfWork;

    public CreateStudentUseCase(
        IStudentRepository studentRepository,
        IEmailService emailService,
        IUnitOfWork unitOfWork)
    {
        _studentRepository = studentRepository;
        _emailService = emailService;
        _unitOfWork = unitOfWork;
    }

    public async Task<CreateStudentResult> ExecuteAsync(CreateStudentRequest request, CancellationToken cancellationToken)
    {
        // Check if email already exists
        var existingStudent = await _studentRepository.GetByEmailAsync(request.Email, cancellationToken);
        if (existingStudent != null)
            throw new DuplicateEmailException($"Student with email {request.Email} already exists");

        // Create domain entity
        var email = Email.Create(request.Email);
        var student = Student.Create(request.Name, email, request.Grade);

        // Save to repository
        await _studentRepository.AddAsync(student, cancellationToken);
        await _unitOfWork.SaveChangesAsync(cancellationToken);

        // Send welcome email (infrastructure concern)
        await _emailService.SendWelcomeEmailAsync(student.Email.Value, student.Name);

        return new CreateStudentResult
        {
            Id = student.Id,
            Name = student.Name,
            Email = student.Email.Value,
            Success = true
        };
    }
}
```

#### Repository Interface Template

```csharp
// ✅ CORRECT: Repository interface in Domain layer
public interface IStudentRepository
{
    Task<Student?> GetByIdAsync(int id, CancellationToken cancellationToken = default);
    Task<Student?> GetByEmailAsync(string email, CancellationToken cancellationToken = default);
    Task<List<Student>> GetByGradeAsync(int grade, CancellationToken cancellationToken = default);
    Task<PagedResult<Student>> GetPagedAsync(int page, int pageSize, string? searchTerm = null, CancellationToken cancellationToken = default);
    Task AddAsync(Student student, CancellationToken cancellationToken = default);
    void Update(Student student);
    void Delete(Student student);
}
```

### 2. Vertical Slice Templates

#### Feature Handler Template

```csharp
// ✅ CORRECT: Vertical Slice feature handler
namespace MyApp.Features.Students.Create;

public record CreateStudentCommand(string Name, string Email, int Grade) : IRequest<CreateStudentResult>;

public record CreateStudentResult(int Id, string Name, string Email, bool Success);

public class CreateStudentHandler : IRequestHandler<CreateStudentCommand, CreateStudentResult>
{
    private readonly AppDbContext _context;
    private readonly IEmailService _emailService;

    public CreateStudentHandler(AppDbContext context, IEmailService emailService)
    {
        _context = context;
        _emailService = emailService;
    }

    public async Task<CreateStudentResult> Handle(CreateStudentCommand request, CancellationToken cancellationToken)
    {
        // Check for duplicate email
        var existingStudent = await _context.Students
            .FirstOrDefaultAsync(s => s.Email == request.Email, cancellationToken);
        
        if (existingStudent != null)
            throw new DuplicateEmailException($"Student with email {request.Email} already exists");

        // Create student entity
        var student = new Student
        {
            Name = request.Name,
            Email = request.Email,
            Grade = request.Grade,
            Status = StudentStatus.Active,
            CreatedDate = DateTime.UtcNow
        };

        _context.Students.Add(student);
        await _context.SaveChangesAsync(cancellationToken);

        // Send welcome email
        await _emailService.SendWelcomeEmailAsync(student.Email, student.Name);

        return new CreateStudentResult(student.Id, student.Name, student.Email, true);
    }
}

public class CreateStudentValidator : AbstractValidator<CreateStudentCommand>
{
    public CreateStudentValidator()
    {
        RuleFor(x => x.Name)
            .NotEmpty()
            .WithMessage("Student name is required")
            .MaximumLength(100)
            .WithMessage("Student name cannot exceed 100 characters");

        RuleFor(x => x.Email)
            .NotEmpty()
            .WithMessage("Email address is required")
            .EmailAddress()
            .WithMessage("Please provide a valid email address");

        RuleFor(x => x.Grade)
            .InclusiveBetween(1, 12)
            .WithMessage("Grade must be between 1 and 12");
    }
}
```

#### Minimal API Endpoint Template

```csharp
// ✅ CORRECT: Feature-based minimal API endpoint
namespace MyApp.Features.Students.Create;

public static class CreateStudentEndpoint
{
    public static void Map(IEndpointRouteBuilder app) => app
        .MapPost("/api/students", Handle)
        .WithName("CreateStudent")
        .WithSummary("Creates a new student")
        .WithDescription("Creates a new student with the provided information")
        .WithOpenApi()
        .Produces<CreateStudentResult>(StatusCodes.Status201Created)
        .ProducesValidationProblem()
        .Produces(StatusCodes.Status409Conflict);

    private static async Task<IResult> Handle(
        CreateStudentCommand command,
        ISender sender,
        IValidator<CreateStudentCommand> validator)
    {
        // Validate request
        var validationResult = await validator.ValidateAsync(command);
        if (!validationResult.IsValid)
            return Results.ValidationProblem(validationResult.ToDictionary());

        try
        {
            // Process command
            var result = await sender.Send(command);
            return Results.Created($"/api/students/{result.Id}", result);
        }
        catch (DuplicateEmailException ex)
        {
            return Results.Conflict(new { error = ex.Message });
        }
    }
}
```

### 3. Standard Controller Template

```csharp
// ✅ CORRECT: Standard controller with comprehensive features
[ApiController]
[Route("api/v1/[controller]")]
[Produces("application/json")]
public class StudentsController : ControllerBase
{
    private readonly ISender _sender;
    private readonly ILogger<StudentsController> _logger;

    public StudentsController(ISender sender, ILogger<StudentsController> logger)
    {
        _sender = sender;
        _logger = logger;
    }

    /// <summary>
    /// Creates a new student
    /// </summary>
    /// <param name="command">Student creation details</param>
    /// <returns>Created student information</returns>
    [HttpPost]
    [ProducesResponseType(typeof(CreateStudentResult), StatusCodes.Status201Created)]
    [ProducesResponseType(typeof(ValidationProblemDetails), StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status409Conflict)]
    public async Task<IActionResult> Create([FromBody] CreateStudentCommand command)
    {
        _logger.LogInformation("Creating student with email: {Email}", command.Email);
        
        try
        {
            var result = await _sender.Send(command);
            return CreatedAtAction(nameof(GetById), new { id = result.Id }, result);
        }
        catch (DuplicateEmailException ex)
        {
            _logger.LogWarning("Attempt to create student with duplicate email: {Email}", command.Email);
            return Conflict(new { error = ex.Message });
        }
    }

    /// <summary>
    /// Gets a student by ID
    /// </summary>
    /// <param name="id">Student ID</param>
    /// <returns>Student information</returns>
    [HttpGet("{id:int}")]
    [ProducesResponseType(typeof(StudentDto), StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<IActionResult> GetById(int id)
    {
        var query = new GetStudentByIdQuery(id);
        var result = await _sender.Send(query);
        return Ok(result);
    }

    /// <summary>
    /// Gets a paginated list of students
    /// </summary>
    /// <param name="query">List query parameters</param>
    /// <returns>Paginated student list</returns>
    [HttpGet]
    [ProducesResponseType(typeof(GetStudentListResult), StatusCodes.Status200OK)]
    public async Task<IActionResult> GetList([FromQuery] GetStudentListQuery query)
    {
        var result = await _sender.Send(query);
        return Ok(result);
    }

    /// <summary>
    /// Updates an existing student
    /// </summary>
    /// <param name="id">Student ID</param>
    /// <param name="command">Updated student information</param>
    /// <returns>No content if successful</returns>
    [HttpPut("{id:int}")]
    [ProducesResponseType(StatusCodes.Status204NoContent)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<IActionResult> Update(int id, [FromBody] UpdateStudentCommand command)
    {
        if (id != command.Id)
            return BadRequest("ID mismatch between route and request body");

        await _sender.Send(command);
        return NoContent();
    }

    /// <summary>
    /// Deletes a student
    /// </summary>
    /// <param name="id">Student ID</param>
    /// <returns>No content if successful</returns>
    [HttpDelete("{id:int}")]
    [ProducesResponseType(StatusCodes.Status204NoContent)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<IActionResult> Delete(int id)
    {
        await _sender.Send(new DeleteStudentCommand(id));
        return NoContent();
    }
}
```

### 4. Entity Configuration Template

```csharp
// ✅ CORRECT: Comprehensive entity configuration
public class StudentConfiguration : IEntityTypeConfiguration<Student>
{
    public void Configure(EntityTypeBuilder<Student> builder)
    {
        // Table mapping
        builder.ToTable("Students");

        // Primary key
        builder.HasKey(s => s.Id);
        builder.Property(s => s.Id)
            .ValueGeneratedOnAdd();

        // Properties
        builder.Property(s => s.Name)
            .HasMaxLength(100)
            .IsRequired();

        builder.Property(s => s.Grade)
            .IsRequired();

        builder.Property(s => s.Status)
            .HasConversion<string>()
            .HasMaxLength(20);

        // Value object mapping
        builder.OwnsOne(s => s.Email, email =>
        {
            email.Property(e => e.Value)
                .HasColumnName("Email")
                .HasMaxLength(255)
                .IsRequired();

            email.HasIndex(e => e.Value)
                .IsUnique()
                .HasDatabaseName("IX_Students_Email");
        });

        // Audit fields (if using base entity)
        builder.Property(s => s.CreatedDate)
            .IsRequired();

        builder.Property(s => s.CreatedBy)
            .HasMaxLength(100);

        builder.Property(s => s.ModifiedDate);

        builder.Property(s => s.ModifiedBy)
            .HasMaxLength(100);

        // Relationships
        builder.HasMany(s => s.Enrollments)
            .WithOne(e => e.Student)
            .HasForeignKey(e => e.StudentId)
            .OnDelete(DeleteBehavior.Cascade);

        // Indexes
        builder.HasIndex(s => s.Grade)
            .HasDatabaseName("IX_Students_Grade");

        builder.HasIndex(s => s.Status)
            .HasDatabaseName("IX_Students_Status");

        // Constraints
        builder.ToTable(t => t.HasCheckConstraint("CK_Students_Grade", "Grade >= 1 AND Grade <= 12"));
    }
}
```

---

## Checklist for New Developers

### Architecture Decision Checklist

**Before starting a new project, decide on:**

- [ ] **Architecture Style**: Clean Architecture (layered) vs Vertical Slice (feature-based)
- [ ] **Design Pattern**: CQRS with MediatR vs Direct Services
- [ ] **Data Access**: Repository Pattern vs Generic Repository vs Direct DbContext
- [ ] **ORM Choice**: Entity Framework Core vs Dapper (vs Mixed approach)
- [ ] **API Style**: Standard Controllers vs Minimal APIs

### Before Writing Code

- [ ] Understand the chosen architecture and patterns for this project
- [ ] Review existing similar implementations in the codebase
- [ ] Plan the structure based on the project's architectural decisions
- [ ] Identify validation requirements
- [ ] Consider database impact and performance requirements
- [ ] Check if business logic belongs in domain layer (Clean Arch) or handlers (Vertical Slice)

### During Development

- [ ] Follow the established naming conventions
- [ ] Use the appropriate design patterns consistently
- [ ] Add proper validation (FluentValidation)
- [ ] Handle exceptions appropriately with specific exception types
- [ ] Use async/await consistently throughout the call stack
- [ ] Follow the data access pattern chosen for the project
- [ ] Add unit tests that match the architectural style

### For Clean Architecture Projects

- [ ] Keep domain logic in entities and domain services
- [ ] Use interfaces for all infrastructure dependencies
- [ ] Ensure application layer only depends on domain abstractions
- [ ] Place use cases/application services in Application layer
- [ ] Keep controllers thin - they should only orchestrate

### For Vertical Slice Projects

- [ ] Keep related features together in the same folder/namespace
- [ ] Use handlers that contain all logic for a specific feature
- [ ] Consider using MediatR for cross-cutting concerns
- [ ] Ensure features are as independent as possible
- [ ] Share common functionality through shared services

### For Data Access

**If using Repository Pattern:**
- [ ] Define repositories in domain layer as interfaces
- [ ] Implement repositories in infrastructure layer
- [ ] Use Unit of Work pattern for transactions
- [ ] Keep repositories focused on single aggregate

**If using Generic Repository Pattern:**
- [ ] Implement base generic repository with common CRUD operations
- [ ] Create specific repository interfaces that inherit from IRepository<T>
- [ ] Add domain-specific methods to specific repository interfaces
- [ ] Use Unit of Work pattern to coordinate multiple repositories
- [ ] Ensure generic methods are truly reusable across entities
- [ ] Don't force complex domain operations into generic interface

**If using Direct DbContext:**
- [ ] Create interface for DbContext for testability
- [ ] Use projection to DTOs in query handlers
- [ ] Keep context usage consistent across the application
- [ ] Consider performance implications of change tracking

### For API Development

**If using Standard Controllers:**
- [ ] Add comprehensive XML documentation
- [ ] Use proper HTTP status codes
- [ ] Add OpenAPI/Swagger annotations
- [ ] Implement proper error handling
- [ ] Use model binding and validation attributes

**If using Minimal APIs:**
- [ ] Group related endpoints together
- [ ] Add OpenAPI metadata with WithOpenApi()
- [ ] Use Results.* methods for responses
- [ ] Consider endpoint filters for cross-cutting concerns
- [ ] Keep endpoint handlers focused and small

### Before Committing

- [ ] Run all tests and ensure they pass
- [ ] Check code coverage meets project standards
- [ ] Verify formatting consistency with project standards
- [ ] Add/update documentation for any new patterns
- [ ] Review for performance implications
- [ ] Ensure proper error handling and logging
- [ ] Verify architectural consistency with rest of project

### Performance Considerations

- [ ] Use appropriate caching strategies
- [ ] Consider database query performance (N+1 problems)
- [ ] Use async/await properly throughout
- [ ] Consider using Dapper for read-heavy scenarios
- [ ] Implement proper logging without performance impact
- [ ] Use pagination for large data sets

---

## Summary

This guide provides clear separation between different architectural approaches and patterns commonly used in .NET development. The key is **consistency** - choose the approach that fits your project's needs and apply it consistently throughout the codebase.

**Remember:**
- **Clean Architecture** for complex domains with rich business logic
- **Vertical Slice** for CRUD-heavy applications with independent features  
- **CQRS with MediatR** for complex workflows and cross-cutting concerns
- **Direct Services** for simpler applications
- **Repository Pattern** when you need data access abstraction
- **Direct DbContext** when performance and simplicity are priorities
- **Entity Framework Core** for complex object relationships
- **Dapper** for performance-critical scenarios
- **Standard Controllers** for complex APIs with many endpoints
- **Minimal APIs** for simple APIs and microservices

The patterns and practices in this guide evolve with the .NET ecosystem and project needs. When in doubt, refer to existing code in your project and follow established patterns consistently.
