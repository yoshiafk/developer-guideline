import MiniSearch from 'minisearch';

export interface SearchIndexItem {
  id: string;
  title: string;
  content: string;
  url: string;
  category: string;
  tags: string[];
  excerpt: string;
  section?: string;
}

export interface SearchResult {
  id: string;
  title: string;
  url: string;
  category: string;
  tags: string[];
  matchedTerms: string[];
  excerpt: string;
  score: number;
  match?: any; // MiniSearch match info
}

// Comprehensive search index covering all pages and content
export const searchIndex: SearchIndexItem[] = [
  // Home Page Content
  {
    id: 'home-welcome',
    title: 'Welcome to .NET Developer Guidelines',
    content: 'Your comprehensive guide to .NET development at AII using Clean Architecture principles, Domain-Driven Design patterns, and enterprise-grade coding standards.',
    url: '/',
    category: 'Home',
    tags: ['welcome', 'introduction', 'guidelines', 'AII'],
    excerpt: 'Welcome to the comprehensive .NET Developer Guidelines for AII development teams.'
  },
  {
    id: 'home-clean-architecture',
    title: 'Clean Architecture Standards',
    content: 'Modern .NET Development Standards with Clean Architecture principles, SOLID design patterns, and enterprise best practices.',
    url: '/clean-architecture',
    category: 'Architecture',
    tags: ['clean architecture', 'SOLID', 'DDD', 'enterprise', 'standards'],
    excerpt: 'Learn Clean Architecture principles, SOLID design patterns, and modern .NET development standards.'
  },
  {
    id: 'home-coding-standard',
    title: 'Coding Standard Guide',
    content: 'Detailed coding standards with advanced patterns, performance guidelines, validation examples, and enterprise-level coding practices.',
    url: '/coding-standard',
    category: 'Coding',
    tags: ['coding standards', 'best practices', 'performance', 'validation', 'enterprise'],
    excerpt: 'Comprehensive coding standard guide with advanced patterns and enterprise practices.'
  },
  {
    id: 'home-dotnet-guideline',
    title: '.NET Developer Guideline',
    content: 'Central hub for all coding standards, architectural patterns, and best practices for .NET development.',
    url: '/dotnet-developer-guideline',
    category: 'Guidelines',
    tags: ['guidelines', 'developer', 'hub', 'standards', 'patterns'],
    excerpt: 'Central hub for .NET development guidelines and best practices.'
  },

  // Clean Architecture Page Content
  {
    id: 'ca-overview',
    title: 'Clean Architecture Overview',
    content: 'Organize solution into layers: Core (Domain, Application): Entities, interfaces, business logic. Infrastructure: Data access, external services, implementations. WebApi (or Presentation): API controllers, middleware.',
    url: '/clean-architecture#overview',
    category: 'Architecture',
    tags: ['clean architecture', 'layers', 'solution structure', 'DDD'],
    excerpt: 'Learn about Clean Architecture layered approach and solution organization.',
    section: 'Overview'
  },
  {
    id: 'ca-solid-principles',
    title: 'SOLID Principles',
    content: 'Five fundamental principles for building maintainable, extensible software systems: Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion.',
    url: '/clean-architecture#solid',
    category: 'Architecture',
    tags: ['SOLID', 'principles', 'SRP', 'OCP', 'LSP', 'ISP', 'DIP'],
    excerpt: 'Master the five SOLID principles for better software design.',
    section: 'SOLID Principles'
  },
  {
    id: 'ca-single-responsibility',
    title: 'Single Responsibility Principle (SRP)',
    content: 'Each class should have one responsibility and one reason to change. Classes should focus on a single concern.',
    url: '/clean-architecture#solid',
    category: 'Architecture',
    tags: ['SRP', 'single responsibility', 'class design', 'SOLID'],
    excerpt: 'Each class should have one responsibility and one reason to change.',
    section: 'SOLID Principles'
  },
  {
    id: 'ca-open-closed',
    title: 'Open/Closed Principle (OCP)',
    content: 'Classes should be open for extension, closed for modification. Use inheritance and polymorphism instead of modifying existing code.',
    url: '/clean-architecture#solid',
    category: 'Architecture',
    tags: ['OCP', 'open closed', 'extension', 'polymorphism', 'SOLID'],
    excerpt: 'Classes should be open for extension, closed for modification.',
    section: 'SOLID Principles'
  },
  {
    id: 'ca-liskov-substitution',
    title: 'Liskov Substitution Principle (LSP)',
    content: 'Derived classes should be substitutable for their base classes. Objects of a superclass should be replaceable with objects of its subclasses.',
    url: '/clean-architecture#solid',
    category: 'Architecture',
    tags: ['LSP', 'liskov', 'substitution', 'inheritance', 'SOLID'],
    excerpt: 'Derived classes should be substitutable for their base classes.',
    section: 'SOLID Principles'
  },
  {
    id: 'ca-interface-segregation',
    title: 'Interface Segregation Principle (ISP)',
    content: 'Prefer small, specific interfaces over large, general-purpose ones. Clients should not be forced to depend on methods they do not use.',
    url: '/clean-architecture#solid',
    category: 'Architecture',
    tags: ['ISP', 'interface segregation', 'interfaces', 'SOLID'],
    excerpt: 'Prefer small, specific interfaces over large, general-purpose ones.',
    section: 'SOLID Principles'
  },
  {
    id: 'ca-dependency-inversion',
    title: 'Dependency Inversion Principle (DIP)',
    content: 'Depend on abstractions, not concretions. High-level modules should not depend on low-level modules.',
    url: '/clean-architecture#solid',
    category: 'Architecture',
    tags: ['DIP', 'dependency inversion', 'abstractions', 'SOLID'],
    excerpt: 'Depend on abstractions, not concretions.',
    section: 'SOLID Principles'
  },
  {
    id: 'ca-clean-code',
    title: 'Clean Code Practices',
    content: 'Writing code that is easy to read, understand, and maintain. Meaningful names, short focused methods, avoid magic numbers, self-documenting code.',
    url: '/clean-architecture#clean-code',
    category: 'Coding',
    tags: ['clean code', 'best practices', 'naming', 'methods', 'maintainability'],
    excerpt: 'Learn clean code practices for better, more maintainable code.',
    section: 'Clean Code Practices'
  },
  {
    id: 'ca-dependency-injection',
    title: 'Dependency Injection (DI)',
    content: 'Dependency Injection is a core principle enabling loose coupling, easier testing, and better maintainability. Use constructor injection, prefer abstractions over concretions.',
    url: '/clean-architecture#dependency-injection',
    category: 'Architecture',
    tags: ['dependency injection', 'DI', 'loose coupling', 'testing', 'abstractions'],
    excerpt: 'Master dependency injection for better software architecture.',
    section: 'Dependency Injection'
  },
  {
    id: 'ca-service-lifetimes',
    title: 'Service Lifetimes',
    content: 'AddScoped: one instance per request. AddTransient: new instance every time. AddSingleton: single instance for the app.',
    url: '/clean-architecture#dependency-injection',
    category: 'Architecture',
    tags: ['service lifetimes', 'scoped', 'transient', 'singleton', 'DI'],
    excerpt: 'Understand different service lifetimes in dependency injection.',
    section: 'Dependency Injection'
  },
  {
    id: 'ca-middleware',
    title: 'Middleware for Logging, Security, Health',
    content: 'Use middleware for logging, security headers, and health checks. Implement RequestLoggingMiddleware, authentication, authorization, health endpoints.',
    url: '/clean-architecture#middleware',
    category: 'Infrastructure',
    tags: ['middleware', 'logging', 'security', 'health checks', 'monitoring'],
    excerpt: 'Implement middleware for logging, security, and health monitoring.',
    section: 'Middleware'
  },
  {
    id: 'ca-mapster',
    title: 'Mapping Entities to DTOs with Mapster',
    content: 'Use Mapster for efficient, type-safe mapping between entities and DTOs. Install with dotnet add package Mapster.',
    url: '/clean-architecture#mapster',
    category: 'Infrastructure',
    tags: ['mapster', 'mapping', 'DTOs', 'entities', 'type safety'],
    excerpt: 'Learn to use Mapster for efficient entity to DTO mapping.',
    section: 'Mapster Mapping'
  },
  {
    id: 'ca-example-flow',
    title: 'Example Flow: Controller → Service → Repository',
    content: 'Typical Clean Architecture flow: Controller receives HTTP request, calls service (use case), service contains business logic, interacts with repositories, repository handles data access.',
    url: '/clean-architecture#example-flow',
    category: 'Architecture',
    tags: ['flow', 'controller', 'service', 'repository', 'use case'],
    excerpt: 'Understand the typical request flow in Clean Architecture applications.',
    section: 'Example Flow'
  },
  {
    id: 'ca-database-migration',
    title: 'Database Migration: Code-First Approach',
    content: 'Use Entity Framework Core for code-first migrations. Define entities and DbContext in Core and Infrastructure layers.',
    url: '/clean-architecture#database-migration',
    category: 'Infrastructure',
    tags: ['database', 'migration', 'EF Core', 'code-first', 'entity framework'],
    excerpt: 'Learn database migration with Entity Framework Core code-first approach.',
    section: 'Database Migration'
  },
  {
    id: 'ca-repository-pattern',
    title: 'Repository Pattern',
    content: 'Define generic repository interfaces in Core for CRUD operations. Implement repositories in Infrastructure for each entity or aggregate.',
    url: '/clean-architecture#repository-pattern',
    category: 'Architecture',
    tags: ['repository pattern', 'CRUD', 'data access', 'interfaces'],
    excerpt: 'Master the repository pattern for data access abstraction.',
    section: 'Repository Pattern'
  },
  {
    id: 'ca-unit-testing',
    title: 'Unit Testing (Moq & NUnit)',
    content: 'Use NUnit for test framework and Moq for mocking dependencies. Follow Arrange-Act-Assert pattern.',
    url: '/clean-architecture#unit-testing',
    category: 'Testing',
    tags: ['unit testing', 'NUnit', 'Moq', 'mocks', 'arrange-act-assert'],
    excerpt: 'Learn unit testing with NUnit and Moq for robust test coverage.',
    section: 'Unit Testing'
  },
  {
    id: 'ca-security',
    title: 'Security Compliance',
    content: 'Implement security best practices: HTTPS, secure vaults for secrets, input validation, authentication, authorization, keep dependencies updated.',
    url: '/clean-architecture#security',
    category: 'Security',
    tags: ['security', 'HTTPS', 'secrets', 'validation', 'authentication'],
    excerpt: 'Implement security best practices for application protection.',
    section: 'Security Compliance'
  },
  {
    id: 'ca-performance',
    title: 'Performance Improvements',
    content: 'Use Redis for caching, async/await for I/O, response compression, Application Insights monitoring, proper indexing.',
    url: '/clean-architecture#performance',
    category: 'Performance',
    tags: ['performance', 'caching', 'async', 'compression', 'monitoring'],
    excerpt: 'Optimize application performance with best practices and tools.',
    section: 'Performance Improvements'
  },

  // Coding Standard Page Content
  {
    id: 'cs-overview',
    title: 'Coding Standard Guide Overview',
    content: 'Comprehensive coding standard guide with detailed examples, advanced patterns, performance guidelines, validation examples, and enterprise-level coding practices.',
    url: '/coding-standard',
    category: 'Coding',
    tags: ['coding standards', 'guide', 'examples', 'patterns', 'enterprise'],
    excerpt: 'Comprehensive guide to coding standards and best practices.',
    section: 'Overview'
  },
  {
    id: 'cs-architecture-patterns',
    title: 'Architecture and Patterns',
    content: 'Learn about Dependency Rule, Inner Layer Dependency, Aggregate Root pattern, Domain Services, Repository Abstraction, Dependency Injection patterns.',
    url: '/coding-standard#architecture-patterns',
    category: 'Architecture',
    tags: ['architecture', 'patterns', 'dependency rule', 'aggregate root', 'domain services'],
    excerpt: 'Master architectural patterns and dependency management.',
    section: 'Architecture and Patterns'
  },
  {
    id: 'cs-ddd-implementation',
    title: 'DDD Implementation',
    content: 'Domain-Driven Design implementation with Aggregate Root, Domain Services, Value Objects, Domain Events.',
    url: '/coding-standard#ddd-implementation',
    category: 'Architecture',
    tags: ['DDD', 'domain driven design', 'aggregate root', 'domain services', 'value objects'],
    excerpt: 'Implement Domain-Driven Design patterns effectively.',
    section: 'DDD Implementation'
  },
  {
    id: 'cs-repository-pattern',
    title: 'Repository Pattern',
    content: 'Repository Abstraction and Dependency Injection for data access. Generic repositories, specific repositories, unit of work.',
    url: '/coding-standard#repository-pattern',
    category: 'Architecture',
    tags: ['repository', 'data access', 'abstraction', 'dependency injection'],
    excerpt: 'Learn repository pattern implementation and best practices.',
    section: 'Repository Pattern'
  },
  {
    id: 'cs-naming-conventions',
    title: 'Naming Conventions',
    content: 'Descriptive Names, Abbreviated Names, Async Method Suffix, Missing Async Suffix. Follow consistent naming throughout the codebase.',
    url: '/coding-standard#naming-conventions',
    category: 'Coding',
    tags: ['naming', 'conventions', 'descriptive', 'async', 'consistency'],
    excerpt: 'Follow proper naming conventions for clean, readable code.',
    section: 'Naming Conventions'
  },
  {
    id: 'cs-file-organization',
    title: 'File and Project Organization',
    content: 'Feature-Based Organization, Type-Based Organization, proper folder structure, namespace conventions.',
    url: '/coding-standard#file-organization',
    category: 'Organization',
    tags: ['file organization', 'project structure', 'folders', 'namespaces'],
    excerpt: 'Organize files and projects for better maintainability.',
    section: 'File and Project Organization'
  },
  {
    id: 'cs-code-structure',
    title: 'Code Structure and Formatting',
    content: 'Indentation, Allman Brace Style, consistent formatting, code style guidelines.',
    url: '/coding-standard#code-structure',
    category: 'Coding',
    tags: ['code structure', 'formatting', 'indentation', 'braces', 'style'],
    excerpt: 'Maintain consistent code structure and formatting.',
    section: 'Code Structure and Formatting'
  },
  {
    id: 'cs-language-features',
    title: 'Language-Specific Guidelines',
    content: 'Collection Expressions, Pattern Matching, Raw String Literals, Primary Constructors, String Interpolation, Null Handling.',
    url: '/coding-standard#language-features',
    category: 'Coding',
    tags: ['language features', 'C# 12', 'collections', 'pattern matching', 'constructors'],
    excerpt: 'Use modern C# language features effectively.',
    section: 'Language-Specific Guidelines'
  },
  {
    id: 'cs-validation-error-handling',
    title: 'Validation and Error Handling',
    content: 'FluentValidation, meaningful error messages, proper validation patterns, error handling best practices.',
    url: '/coding-standard#validation-error-handling',
    category: 'Validation',
    tags: ['validation', 'error handling', 'fluent validation', 'messages'],
    excerpt: 'Implement proper validation and error handling.',
    section: 'Validation and Error Handling'
  },
  {
    id: 'cs-dependency-injection-services',
    title: 'Dependency Injection and Services',
    content: 'Appropriate service lifetimes, extension methods for registration, primary constructors, traditional constructor injection.',
    url: '/coding-standard#dependency-injection-services',
    category: 'Architecture',
    tags: ['dependency injection', 'services', 'lifetimes', 'registration'],
    excerpt: 'Master dependency injection and service management.',
    section: 'Dependency Injection and Services'
  },
  {
    id: 'cs-database-entity-framework',
    title: 'Database and Entity Framework',
    content: 'Entity design, Fluent API configuration, proper database modeling, Entity Framework best practices.',
    url: '/coding-standard#database-entity-framework',
    category: 'Infrastructure',
    tags: ['database', 'entity framework', 'fluent api', 'modeling'],
    excerpt: 'Design entities and configure Entity Framework properly.',
    section: 'Database and Entity Framework'
  },
  {
    id: 'cs-testing-guidelines',
    title: 'Testing Guidelines',
    content: 'Test structure, Arrange-Act-Assert pattern, unit testing best practices, mocking strategies.',
    url: '/coding-standard#testing-guidelines',
    category: 'Testing',
    tags: ['testing', 'unit tests', 'arrange-act-assert', 'mocking'],
    excerpt: 'Write effective unit tests and testing strategies.',
    section: 'Testing Guidelines'
  },
  {
    id: 'cs-performance-best-practices',
    title: 'Performance and Best Practices',
    content: 'Async/await patterns, cancellation tokens, resource disposal, projection to DTOs, appropriate collection types.',
    url: '/coding-standard#performance-best-practices',
    category: 'Performance',
    tags: ['performance', 'async', 'cancellation tokens', 'DTOs', 'collections'],
    excerpt: 'Optimize performance with best practices and patterns.',
    section: 'Performance and Best Practices'
  },
  {
    id: 'cs-developer-checklist',
    title: 'Developer Checklist',
    content: 'Before writing code, during development, and contributing guidelines. Ensure quality and consistency.',
    url: '/coding-standard#developer-checklist',
    category: 'Guidelines',
    tags: ['checklist', 'developer', 'quality', 'consistency', 'contributing'],
    excerpt: 'Follow the developer checklist for quality assurance.',
    section: 'Developer Checklist'
  },

  // .NET Developer Guideline Page Content
  {
    id: 'guideline-overview',
    title: '.NET Developer Guideline Overview',
    content: 'Central hub for all coding standards, architectural patterns, and best practices for .NET development. Comprehensive coverage, team collaboration, proven excellence.',
    url: '/dotnet-developer-guideline#overview',
    category: 'Guidelines',
    tags: ['guidelines', 'overview', 'hub', 'standards', 'collaboration'],
    excerpt: 'Welcome to the comprehensive .NET Developer Guidelines hub.',
    section: 'Overview'
  },
  {
    id: 'guideline-available-guidelines',
    title: 'Available Guidelines',
    content: 'Clean Architecture Standards and Coding Standard Guide. Choose your learning path based on experience level.',
    url: '/dotnet-developer-guideline#available-guidelines',
    category: 'Guidelines',
    tags: ['available guidelines', 'learning path', 'clean architecture', 'coding standard'],
    excerpt: 'Explore available guidelines and choose your learning path.',
    section: 'Available Guidelines'
  },
  {
    id: 'guideline-quick-start',
    title: 'Quick Start for New Developers',
    content: 'Follow these steps to get productive quickly: understand requirements, analyze existing code, design domain model, implement solution, code review and testing.',
    url: '/dotnet-developer-guideline#quick-start',
    category: 'Guidelines',
    tags: ['quick start', 'new developers', 'productivity', 'workflow'],
    excerpt: 'Get started quickly with these essential steps for new developers.',
    section: 'Quick Start'
  },
  {
    id: 'guideline-key-principles',
    title: 'Key Principles',
    content: 'Clean Architecture, Domain-Driven Design, Async/Await Patterns, Dependency Injection, Unit Testing, Security Compliance.',
    url: '/dotnet-developer-guideline#key-principles',
    category: 'Principles',
    tags: ['key principles', 'clean architecture', 'DDD', 'async', 'DI', 'testing', 'security'],
    excerpt: 'Master the key principles that guide our development approach.',
    section: 'Key Principles'
  },
  {
    id: 'guideline-architecture-overview',
    title: 'Architecture Overview',
    content: 'Four-layer architecture: API Layer, Application Layer, Domain Layer, Infrastructure Layer. Clear separation of concerns.',
    url: '/dotnet-developer-guideline#architecture-overview',
    category: 'Architecture',
    tags: ['architecture overview', 'layers', 'API', 'application', 'domain', 'infrastructure'],
    excerpt: 'Understand the four-layer architecture approach.',
    section: 'Architecture Overview'
  },
  {
    id: 'guideline-development-workflow',
    title: 'Development Workflow',
    content: 'Understand requirements, analyze existing code, design domain model, implement solution, code review and testing.',
    url: '/dotnet-developer-guideline#development-workflow',
    category: 'Workflow',
    tags: ['development workflow', 'requirements', 'analysis', 'design', 'implementation', 'review'],
    excerpt: 'Follow the proven development workflow for quality results.',
    section: 'Development Workflow'
  },
  {
    id: 'guideline-getting-help',
    title: 'Getting Help',
    content: 'Documentation first, team collaboration, external resources. Use README files, consult team members, check external documentation.',
    url: '/dotnet-developer-guideline#getting-help',
    category: 'Help',
    tags: ['getting help', 'documentation', 'collaboration', 'resources', 'README'],
    excerpt: 'Find help and resources when you need assistance.',
    section: 'Getting Help'
  },
  {
    id: 'guideline-contributing',
    title: 'Contributing to Standards',
    content: 'Use real examples, follow Microsoft conventions, update all related documents, validate examples. Ensure standards evolve with best practices.',
    url: '/dotnet-developer-guideline#contributing',
    category: 'Contributing',
    tags: ['contributing', 'standards', 'examples', 'conventions', 'validation'],
    excerpt: 'Learn how to contribute to the evolution of our standards.',
    section: 'Contributing'
  },
  {
    id: 'guideline-version-history',
    title: 'Version History',
    content: 'Version 1.0.0 - Initial release with modern design, comprehensive standards, enhanced navigation and search functionality.',
    url: '/dotnet-developer-guideline#version-history',
    category: 'History',
    tags: ['version history', 'changelog', 'releases', 'updates'],
    excerpt: 'Track the evolution and updates to the guidelines.',
    section: 'Version History'
  },

  // GitHub AXA Usage Page Content
  {
    id: 'github-overview',
    title: 'GitHub AXA Usage Guidelines',
    content: 'Guidelines for using GitHub within AXA organization. Repository management, collaboration workflows, security practices.',
    url: '/github-axa-usage',
    category: 'GitHub',
    tags: ['github', 'AXA', 'guidelines', 'repository', 'collaboration', 'security'],
    excerpt: 'Learn GitHub usage guidelines specific to AXA organization.',
    section: 'Overview'
  }
];

// Initialize MiniSearch with advanced configuration
const miniSearch = new MiniSearch({
  fields: ['title', 'content', 'tags', 'category', 'excerpt'], // Fields to search in
  storeFields: ['title', 'content', 'url', 'category', 'tags', 'excerpt', 'section'], // Fields to return in results
  searchOptions: {
    boost: {
      title: 4,      // Title matches are 4x more important
      tags: 3,       // Tag matches are 3x more important
      category: 2,   // Category matches are 2x more important
      excerpt: 2,    // Excerpt matches are 2x more important
      content: 1     // Content matches are baseline
    },
    fuzzy: 0.3,     // Allow 30% fuzzy matching for typos
    prefix: true,   // Enable prefix search
    combineWith: 'AND' // Require all search terms to match
  }
});

// Initialize the search index with error handling
let searchInitialized = false;
try {
  miniSearch.addAll(searchIndex);
  searchInitialized = true;
  console.log('Search index initialized successfully with', searchIndex.length, 'documents');
} catch (error) {
  console.error('Failed to initialize search index:', error);
}

// Fallback search function using basic string matching
const fallbackSearch = (query: string, categoryFilter: string = 'All'): SearchResult[] => {
  if (!query.trim()) return [];

  const searchTerms = query.toLowerCase().split(' ').filter(term => term.length > 0);

  return searchIndex
    .filter(item => {
      // Category filter
      if (categoryFilter !== 'All' && item.category !== categoryFilter) return false;

      // Content search - basic string matching
      const searchableContent = `${item.title} ${item.content} ${item.tags.join(' ')} ${item.excerpt}`.toLowerCase();

      // Check if all search terms are present
      return searchTerms.every(term => searchableContent.includes(term));
    })
    .map(item => {
      // Calculate basic relevance score
      let score = 0;
      const matchedTerms: string[] = [];

      searchTerms.forEach(term => {
        if (item.title.toLowerCase().includes(term)) {
          score += 40;
          if (!matchedTerms.includes(term)) matchedTerms.push(term);
        } else if (item.tags.some(tag => tag.toLowerCase().includes(term))) {
          score += 30;
          if (!matchedTerms.includes(term)) matchedTerms.push(term);
        } else if (item.excerpt.toLowerCase().includes(term)) {
          score += 20;
          if (!matchedTerms.includes(term)) matchedTerms.push(term);
        } else if (item.content.toLowerCase().includes(term)) {
          score += 10;
          if (!matchedTerms.includes(term)) matchedTerms.push(term);
        }
      });

      return {
        id: item.id,
        title: item.title,
        url: item.url,
        category: item.category,
        tags: item.tags,
        matchedTerms,
        excerpt: item.excerpt,
        score: Math.min(score, 100) // Cap at 100%
      };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 50);
};

// Advanced search function using MiniSearch
export const searchContent = (query: string, categoryFilter: string = 'All'): SearchResult[] => {
  try {
    if (!searchInitialized) {
      console.warn('Search index not initialized, using fallback search');
      return fallbackSearch(query, categoryFilter);
    }

    if (!query.trim()) return [];

    console.log('Searching for:', query, 'with category filter:', categoryFilter);

    // Build search query with category filter if specified
    let searchQuery = query;
    if (categoryFilter !== 'All') {
      searchQuery = `${query} category:${categoryFilter}`;
    }

    // Perform search with MiniSearch
    const results = miniSearch.search(searchQuery, {
      boost: {
        title: 4,
        tags: 3,
        category: 2,
        excerpt: 2,
        content: 1
      },
      fuzzy: 0.3,
      prefix: true,
      combineWith: 'AND'
    });

    console.log('Search results:', results.length, 'found');

    // Transform results to match our SearchResult interface
    return results.map(result => {
      const item = result as any;
      return {
        id: item.id,
        title: item.title,
        url: item.url,
        category: item.category,
        tags: item.tags || [],
        matchedTerms: Object.keys(result.match || {}),
        excerpt: item.excerpt,
        score: Math.round(result.score * 100), // Convert to percentage
        match: result.match
      };
    });
  } catch (error) {
    console.error('MiniSearch failed, using fallback search:', error);
    return fallbackSearch(query, categoryFilter);
  }
};

// Get all available categories
export const getCategories = (): string[] => {
  const categories = Array.from(new Set(searchIndex.map(item => item.category)));
  return ['All', ...categories.sort()];
};

// Get search suggestions based on partial query
export const getSearchSuggestions = (partialQuery: string): string[] => {
  try {
    if (!searchInitialized) {
      console.warn('Search index not initialized for suggestions, using fallback');
      return getFallbackSuggestions(partialQuery);
    }

    if (!partialQuery.trim()) return [];

    const query = partialQuery.toLowerCase();
    const suggestions = new Set<string>();

    // Get auto-suggestions from MiniSearch
    const autoSuggestions = miniSearch.autoSuggest(query, {
      fuzzy: 0.3,
      prefix: true
    });

    // Add auto-suggestions
    autoSuggestions.forEach(suggestion => {
      suggestions.add(suggestion.suggestion);
    });

    // Add matching titles
    searchIndex.forEach(item => {
      if (item.title.toLowerCase().includes(query)) {
        suggestions.add(item.title);
      }
    });

    // Add matching tags
    searchIndex.forEach(item => {
      item.tags.forEach(tag => {
        if (tag.toLowerCase().includes(query)) {
          suggestions.add(tag);
        }
      });
    });

    return Array.from(suggestions).slice(0, 10);
  } catch (error) {
    console.error('MiniSearch suggestions failed, using fallback:', error);
    return getFallbackSuggestions(partialQuery);
  }
};

// Fallback suggestions function
const getFallbackSuggestions = (partialQuery: string): string[] => {
  if (!partialQuery.trim()) return [];

  const query = partialQuery.toLowerCase();
  const suggestions = new Set<string>();

  // Add matching titles
  searchIndex.forEach(item => {
    if (item.title.toLowerCase().includes(query)) {
      suggestions.add(item.title);
    }
  });

  // Add matching tags
  searchIndex.forEach(item => {
    item.tags.forEach(tag => {
      if (tag.toLowerCase().includes(query)) {
        suggestions.add(tag);
      }
    });
  });

  return Array.from(suggestions).slice(0, 10);
};

// Get search analytics (useful for debugging and optimization)
export const getSearchStats = () => {
  try {
    if (!searchInitialized) {
      console.warn('Search index not initialized, returning basic stats');
      return {
        documentCount: searchIndex.length,
        indexSize: 0,
        initialized: false
      };
    }

    return {
      documentCount: miniSearch.documentCount,
      indexSize: JSON.stringify(miniSearch).length,
      initialized: true
    };
  } catch (error) {
    console.error('Failed to get search stats:', error);
    return {
      documentCount: searchIndex.length,
      indexSize: 0,
      initialized: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
};

// Advanced search with filters and options
export interface AdvancedSearchOptions {
  query: string;
  category?: string;
  tags?: string[];
  fuzzy?: boolean;
  prefix?: boolean;
  boost?: Record<string, number>;
  limit?: number;
}

export const advancedSearch = (options: AdvancedSearchOptions): SearchResult[] => {
  try {
    if (!searchInitialized) {
      console.warn('Search index not initialized, using fallback search for advanced search');
      return fallbackSearch(options.query, options.category);
    }

    const {
      query,
      category,
      tags,
      fuzzy = true,
      prefix = true,
      boost = { title: 4, tags: 3, category: 2, excerpt: 2, content: 1 },
      limit = 50
    } = options;

    if (!query.trim()) return [];

    let searchQuery = query;

    // Add category filter
    if (category && category !== 'All') {
      searchQuery += ` category:${category}`;
    }

    // Add tag filters
    if (tags && tags.length > 0) {
      tags.forEach(tag => {
        searchQuery += ` tags:${tag}`;
      });
    }

    const results = miniSearch.search(searchQuery, {
      boost,
      fuzzy: fuzzy ? 0.3 : false,
      prefix,
      combineWith: 'AND'
    });

    return results.slice(0, limit).map(result => {
      const item = result as any;
      return {
        id: item.id,
        title: item.title,
        url: item.url,
        category: item.category,
        tags: item.tags || [],
        matchedTerms: Object.keys(result.match || {}),
        excerpt: item.excerpt,
        score: Math.round(result.score * 100),
        match: result.match
      };
    });
  } catch (error) {
    console.error('Advanced search failed, using fallback:', error);
    return fallbackSearch(options.query, options.category);
  }
};