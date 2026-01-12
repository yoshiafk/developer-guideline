# .NET Clean Architecture Standards (Quick Reference)

> **📖 For detailed examples and explanations, see [dotnet-coding-standard-guide.md](./dotnet-coding-standard-guide.md)**

This is a quick reference guide for essential .NET development standards. Use this for daily development and code reviews.

## 🏗️ Architecture Decisions (Choose One Approach)

### Option 1: Clean Architecture (Complex Domains)
```
Domain → Application → Infrastructure → WebApi
```
**Use when:** Rich business logic, multiple applications, long-term projects

### Option 2: Vertical Slice (CRUD Applications)
```
Features/Orders/Create/, Features/Orders/GetById/
```
**Use when:** Independent features, rapid development, smaller teams

## 🎯 Design Patterns (Choose One Approach)

### Option 1: CQRS + MediatR
```csharp
public record CreateOrderCommand(string Product) : IRequest<OrderResult>;
public class CreateOrderHandler : IRequestHandler<CreateOrderCommand, OrderResult>
```
**Use when:** Complex workflows, cross-cutting concerns, event-driven architecture

### Option 2: Direct Services
```csharp
public interface IOrderService { Task<OrderResult> CreateAsync(CreateOrderRequest request); }
public class OrderService : IOrderService
```
**Use when:** Simple CRUD, smaller applications, performance-critical

## 💾 Data Access (Choose One Approach)

### Option 1: Repository Pattern
```csharp
public interface IOrderRepository { Task<Order> GetByIdAsync(int id); }
```
**Use when:** Testing abstraction needed, Clean Architecture, multiple data sources

### Option 2: Generic Repository + Unit of Work
```csharp
public interface IRepository<T> { Task<T> GetByIdAsync(int id); }
public interface IUnitOfWork { IOrderRepository Orders { get; } }
```
**Use when:** Many similar entities, consistent patterns, transaction coordination

### Option 3: Direct DbContext
```csharp
public class OrderHandler { private readonly IAppDbContext _context; }
```
**Use when:** Simple operations, Vertical Slice, performance important

## 🌐 API Approaches (Choose One Approach)

### Option 1: Standard Controllers
```csharp
[ApiController, Route("api/[controller]")]
public class OrdersController : ControllerBase
```
**Use when:** Complex APIs, many endpoints, traditional MVC experience

### Option 2: Minimal APIs
```csharp
app.MapPost("/api/orders", async (CreateOrderCommand cmd, ISender sender) => 
    Results.Ok(await sender.Send(cmd)));
```
**Use when:** Simple APIs, microservices, performance-critical, modern style

---

## 📋 Quick Standards Checklist

### ✅ Naming Conventions
- **Classes**: `PascalCase` → `OrderService`, `CreateOrderHandler`
- **Interfaces**: `IPascalCase` → `IOrderRepository`, `IEmailService`
- **Methods**: `PascalCase + Async` → `GetOrderAsync`, `CreateOrderAsync`
- **Properties**: `PascalCase` → `OrderId`, `CustomerName`
- **Fields**: `_camelCase` → `_dbContext`, `_logger`
- **Variables/Parameters**: `camelCase` → `orderId`, `cancellationToken`

### ✅ Async/Await Rules
```csharp
// ✅ DO: Async all the way through
public async Task<Order> GetOrderAsync(int id, CancellationToken cancellationToken)
{
    return await _repository.GetByIdAsync(id, cancellationToken);
}

// ❌ DON'T: Block async calls
var order = GetOrderAsync(id).Result; // DEADLOCK RISK!
```

### ✅ Dependency Injection
```csharp
// Service Registration
services.AddScoped<IOrderRepository, OrderRepository>();    // Per request
services.AddTransient<IEmailService, EmailService>();       // Per call
services.AddSingleton<ILogger, Logger>();                   // App lifetime

// Constructor Injection
public class OrderService(IOrderRepository repository, ILogger logger)
```

### ✅ Validation (FluentValidation)
```csharp
public class CreateOrderValidator : AbstractValidator<CreateOrderCommand>
{
    public CreateOrderValidator()
    {
        RuleFor(x => x.ProductName)
            .NotEmpty().WithMessage("Product name is required")
            .MaximumLength(100).WithMessage("Product name cannot exceed 100 characters");
    }
}
```

### ✅ Error Handling
```csharp
// ✅ DO: Specific exceptions
public class OrderNotFoundException : Exception
{
    public OrderNotFoundException(int id) : base($"Order {id} not found") { }
}

// ✅ DO: Global exception middleware
public class ExceptionMiddleware
{
    public async Task InvokeAsync(HttpContext context)
    {
        try { await _next(context); }
        catch (OrderNotFoundException) { context.Response.StatusCode = 404; }
        catch (ValidationException) { context.Response.StatusCode = 400; }
    }
}
```

---

## 🚀 Project Structure Templates

### Clean Architecture Structure

### Clean Architecture Structure
```
src/
├── Domain/                    # Core business logic
│   ├── Entities/             # Order, Customer, Product
│   ├── ValueObjects/         # Email, Money, Address
│   └── Interfaces/           # IOrderRepository, IDomainService
├── Application/              # Use cases and workflows  
│   ├── UseCases/Orders/      # CreateOrder/, GetOrder/, UpdateOrder/
│   ├── DTOs/                 # OrderDto, CustomerDto
│   └── Validators/           # CreateOrderValidator
├── Infrastructure/           # External concerns
│   ├── Data/                 # DbContext, Configurations
│   ├── Repositories/         # OrderRepository, CustomerRepository
│   └── Services/             # EmailService, PaymentService
└── WebApi/                   # Controllers, middleware
    ├── Controllers/          # OrdersController
    └── Middleware/           # ExceptionMiddleware
```

### Vertical Slice Structure
```
src/
├── Features/
│   ├── Orders/
│   │   ├── Create/           # CreateOrder.cs, Handler, Validator, Endpoint
│   │   ├── GetById/          # GetOrderById.cs, Handler, Endpoint
│   │   └── Update/           # UpdateOrder.cs, Handler, Validator
│   └── Customers/
│       ├── Register/         # RegisterCustomer.cs, Handler, Validator
│       └── GetProfile/       # GetCustomerProfile.cs, Handler
├── Shared/                   # Common infrastructure
│   ├── Database/             # DbContext, Configurations
│   └── Services/             # EmailService, PaymentService
└── WebApi/                   # Program.cs, middleware
```

---

## 🔧 Essential Code Patterns

### Entity Framework Configuration
```csharp
// Entity Configuration
public class OrderConfiguration : IEntityTypeConfiguration<Order>
{
    public void Configure(EntityTypeBuilder<Order> builder)
    {
        builder.HasKey(o => o.Id);
        builder.Property(o => o.Total).HasPrecision(18, 2);
        builder.HasMany(o => o.Items).WithOne(i => i.Order);
    }
}

// DbContext Interface
public interface IAppDbContext
{
    DbSet<Order> Orders { get; set; }
    Task<int> SaveChangesAsync(CancellationToken cancellationToken = default);
}
```

### Generic Repository (if chosen)
```csharp
public interface IRepository<T> where T : class
{
    Task<T?> GetByIdAsync(int id, CancellationToken cancellationToken = default);
    Task<List<T>> GetAllAsync(CancellationToken cancellationToken = default);
    Task AddAsync(T entity, CancellationToken cancellationToken = default);
    void Update(T entity);
    void Delete(T entity);
}

public class Repository<T> : IRepository<T> where T : class
{
    protected readonly DbContext _context;
    protected readonly DbSet<T> _dbSet;
    
    public Repository(DbContext context)
    {
        _context = context;
        _dbSet = context.Set<T>();
    }
    
    public virtual async Task<T?> GetByIdAsync(int id, CancellationToken cancellationToken = default)
        => await _dbSet.FindAsync(new object[] { id }, cancellationToken);
}
```

### Service Registration
```csharp
// Extension method for clean registration
public static class ServiceCollectionExtensions
{
    public static IServiceCollection AddApplicationServices(this IServiceCollection services)
    {
        // MediatR (if using CQRS)
        services.AddMediatR(cfg => cfg.RegisterServicesFromAssembly(Assembly.GetExecutingAssembly()));
        
        // Validation
        services.AddValidatorsFromAssembly(Assembly.GetExecutingAssembly());
        
        // Data Access (choose one approach)
        services.AddScoped<IOrderRepository, OrderRepository>();
        // OR
        services.AddScoped(typeof(IRepository<>), typeof(Repository<>));
        
        // Business Services
        services.AddScoped<IOrderService, OrderService>();
        services.AddScoped<IEmailService, EmailService>();
        
        return services;
    }
}
```

---

## 🧪 Testing Patterns

### Unit Test Structure
```csharp
[TestFixture]
public class CreateOrderHandlerTests
{
    private Mock<IOrderRepository> _mockRepository;
    private CreateOrderHandler _handler;
    
    [SetUp]
    public void Setup()
    {
        _mockRepository = new Mock<IOrderRepository>();
        _handler = new CreateOrderHandler(_mockRepository.Object);
    }
    
    [Test]
    public async Task Handle_ValidOrder_ReturnsSuccess()
    {
        // Arrange
        var command = new CreateOrderCommand("Product", 10.99m);
        
        // Act
        var result = await _handler.Handle(command, CancellationToken.None);
        
        // Assert
        Assert.That(result.Success, Is.True);
        _mockRepository.Verify(r => r.AddAsync(It.IsAny<Order>(), It.IsAny<CancellationToken>()), Times.Once);
    }
}
```

### Validation Testing
```csharp
[Test]
public void Validate_EmptyProductName_ShouldFailValidation()
{
    // Arrange
    var command = new CreateOrderCommand("", 10.99m);
    var validator = new CreateOrderValidator();
    
    // Act
    var result = validator.TestValidate(command);
    
    // Assert
    result.ShouldHaveValidationErrorFor(x => x.ProductName)
          .WithErrorMessage("Product name is required");
}
```

---

## 📝 Key Principles Summary

### SOLID Principles (Quick Reference)
- **S**ingle Responsibility: One class, one reason to change
- **O**pen/Closed: Open for extension, closed for modification  
- **L**iskov Substitution: Derived classes must be substitutable for base classes
- **I**nterface Segregation: Many specific interfaces > one general interface
- **D**ependency Inversion: Depend on abstractions, not concretions

### Clean Code Rules
- Use meaningful, descriptive names
- Keep methods short and focused (≤ 20 lines)
- Avoid magic numbers/strings (use constants)
- Write self-documenting code
- Remove dead code and outdated comments

### Performance Guidelines
- Use `async/await` consistently
- Include `CancellationToken` in async methods
- Use `IQueryable` projections for database queries
- Consider caching for expensive operations
- Use appropriate service lifetimes (Scoped/Transient/Singleton)

---

## 🎯 Decision Matrix

| Scenario | Architecture | Pattern | Data Access | API Style |
|----------|-------------|---------|-------------|-----------|
| **Complex Business Logic** | Clean Architecture | CQRS + MediatR | Repository | Controllers |
| **CRUD Application** | Vertical Slice | Direct Services | Generic Repository | Minimal APIs |
| **Microservice** | Vertical Slice | CQRS + MediatR | Direct DbContext | Minimal APIs |
| **Enterprise Application** | Clean Architecture | CQRS + MediatR | Repository + UoW | Controllers |
| **Rapid Prototype** | Vertical Slice | Direct Services | Direct DbContext | Minimal APIs |

---

## ⚠️ Common Mistakes to Avoid

```csharp
// ❌ DON'T: Mix architectural patterns
public class OrderService : IOrderService  // Direct Service
{
    public async Task<OrderResult> CreateAsync(CreateOrderRequest request)
    {
        return await _sender.Send(new CreateOrderCommand()); // But using MediatR?
    }
}

// ❌ DON'T: Block async calls
var result = CreateOrderAsync().Result; // DEADLOCK RISK!

// ❌ DON'T: Generic validation messages
RuleFor(x => x.Email).EmailAddress().WithMessage("Invalid"); // Too vague!

// ❌ DON'T: Put business logic in controllers
[HttpPost]
public async Task<IActionResult> CreateOrder(CreateOrderRequest request)
{
    // Validation here - WRONG!
    if (string.IsNullOrEmpty(request.ProductName)) return BadRequest();
    
    // Business logic here - WRONG!
    var order = new Order { ProductName = request.ProductName };
    _context.Orders.Add(order);
    await _context.SaveChangesAsync();
    
    return Ok(); // Should be in service/handler!
}
```

---

## 📚 Quick Reference Links

- **Detailed Guide**: [dotnet-coding-standard-guide.md](./dotnet-coding-standard-guide.md)
- **FluentValidation**: [Official Docs](https://docs.fluentvalidation.net/)
- **MediatR**: [GitHub](https://github.com/jbogard/MediatR)
- **Clean Architecture**: [Microsoft Docs](https://docs.microsoft.com/en-us/dotnet/architecture/modern-web-apps-azure/)

---

**💡 Remember**: Choose one approach per project and apply it consistently. When in doubt, refer to existing code patterns in your project and follow the established conventions.
