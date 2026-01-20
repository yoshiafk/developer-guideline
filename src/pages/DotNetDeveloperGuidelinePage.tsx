import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import PageHero from '../components/PageHero';
import OnThisPage from '../components/OnThisPage';
import FileTree, { FileTreeItem } from '@/components/FileTree';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import CallToAction from '@/components/CallToAction';
import {
  CheckCircle2,
  Code2,
  BookOpen,
  ShieldCheck,
  Layout as LayoutIcon,
  Database,
  Server,
  Zap,
  ChevronRight,
  Activity,
  MessageSquare,
  Layers,
  Bug,
  CircleHelp as HelpCircle,
  PenTool,
  Settings,
  FlaskConical,
  ArrowRight
} from 'lucide-react';
import { motion } from 'framer-motion';
import CodeSnippet from '../components/CodeSnippet';
import PageNavigation from '../components/PageNavigation';

const chapters = [
  { id: "overview", title: "1. Project Overview", icon: BookOpen },
  { id: "architecture", title: "2. Architecture Design", icon: Layers },
  { id: "patterns", title: "3. Design Patterns", icon: Zap },
  { id: "data-access", title: "4. Data Access Patterns", icon: Database },
  { id: "api-approaches", title: "5. API Implementation", icon: Server },
  { id: "naming", title: "6. Naming Conventions", icon: PenTool },
  { id: "organization", title: "7. File & Project Org", icon: LayoutIcon },
  { id: "validation", title: "8. Validation & Error", icon: ShieldCheck },
  { id: "testing", title: "9. Testing Guidelines", icon: FlaskConical },
];

const folderStructureData: FileTreeItem[] = [
  {
    name: "src",
    type: "folder",
    children: [
      {
        name: "Application",
        type: "folder",
        comment: "UseCases, DTOs, Handlers",
        children: [
          { name: "Common", type: "folder" },
          { name: "Interfaces", type: "folder" },
          { name: "TodoItems", type: "folder", comment: "Feature-based folders" }
        ]
      },
      { name: "Domain", type: "folder", comment: "Entities, Value Objects" },
      { name: "Infrastructure", type: "folder", comment: "Persistence, External Systems" },
      { name: "WebApi", type: "folder", comment: "Controllers, Middleware" }
    ]
  }
];

const DotNetDeveloperGuidelinePage: React.FC = () => {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: '.NET Guideline' }
  ];

  return (
    <Layout>
      <PageHero
        title=".NET Developer Guideline"
        subtitle="The exhaustive reference for .NET development, clean code patterns, and project-specific conventions at AII."
        breadcrumbs={breadcrumbs}
        readingTime={25}
      />

      <div className="py-8 flex flex-col lg:flex-row gap-12">
        {/* Content */}
        <main className="flex-1 min-w-0 space-y-16 pb-16">

          {/* 1. Project Overview */}
          <section id="overview" className="scroll-mt-28 space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 1</Badge>
              <h2 className="text-4xl font-extrabold tracking-tight">Project Overview</h2>
            </div>

            <div className="prose prose-slate dark:prose-invert max-w-none space-y-6">
              <p className="text-xl text-muted-foreground leading-relaxed">
                AII .NET applications are built using <strong>.NET 8.0/9.0</strong> following <strong>Clean Architecture</strong> or <strong>Vertical Slice</strong> principles. Our goal is to maintain highly testable, independent, and scalable codebases.
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 not-prose">
                {[
                  { text: ".NET 8.0/9.0 ASP.NET Core", icon: Server },
                  { text: "EF Core with PostgreSQL/SQL Server", icon: Database },
                  { text: "MediatR for In-Process Messaging", icon: Zap },
                  { text: "FluentValidation for Logic", icon: ShieldCheck },
                  { text: "Mapster/AutoMapper for DTOs", icon: Layers },
                  { text: "Serilog & OpenTelemetry", icon: Activity },
                ].map((tech, i) => (
                  <div key={i} className="glass flex items-center gap-3 p-4 rounded-xl border border-border/50">
                    <tech.icon className="h-5 w-5 text-primary" />
                    <span className="font-semibold text-sm">{tech.text}</span>
                  </div>
                ))}
              </div>

              {/* New Joiner Checklist */}
              <div className="mt-12 p-8 rounded-3xl bg-blue-500/5 border border-blue-500/10 space-y-6 not-prose">
                <div className="flex items-center gap-3 text-blue-500">
                  <div className="p-2 rounded-lg bg-blue-500/10">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold">New Developer Checklist</h3>
                </div>
                <p className="text-muted-foreground">Follow these steps to get your first .NET project running at AII:</p>
                <div className="grid gap-4">
                  {[
                    { step: "Install SDK", desc: "Download and install .NET 8.0 SDK and Runtime." },
                    { step: "Setup IDE", desc: "Install JetBrains Rider (preferred) or VS 2022 with C# extensions." },
                    { step: "Clone Template", desc: "Run 'dotnet new install AII.Templates' to get our latest skeleton." },
                    { step: "Docker Setup", desc: "Ensure Docker Desktop is running for local PostgreSQL/Redis instances." },
                    { step: "Run Tests", desc: "Execute 'dotnet test' to ensure the baseline project is stable." },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 p-4 rounded-xl border border-border/50 bg-background/50">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center font-bold text-sm">
                        {i + 1}
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground">{item.step}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <Separator />

          {/* 2. Architecture Design */}
          <section id="architecture" className="scroll-mt-28 space-y-12">
            <div className="space-y-4">
              <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 2</Badge>
              <h2 className="text-4xl font-extrabold tracking-tight">Architecture Design Choices</h2>
            </div>

            <div className="space-y-10">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold flex items-center gap-2">Clean Architecture (Layered)</h3>
                <p className="text-muted-foreground">Standard for enterprise-grade applications with complex domains.</p>
                <div className="grid grid-cols-1 gap-6">
                  <CodeSnippet title="Order.cs (Domain Layer)" language="csharp" code={`public class Order : AggregateRoot\n{\n    public void MarkAsCompleted() {\n        if (Status != OrderStatus.Processing)\n            throw new DomainException("Invalid state transition");\n        Status = OrderStatus.Completed;\n    }\n}`} />
                  <CodeSnippet title="CompleteOrderUseCase.cs (App Layer)" language="csharp" code={`public async Task Execute(int orderId) {\n    var order = await _orderRepository.GetByIdAsync(orderId);\n    order.MarkAsCompleted();\n    await _unitOfWork.SaveChangesAsync();\n}`} />
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10 space-y-4">
                <h4 className="font-bold flex items-center gap-2 text-primary"><LayoutIcon className="h-5 w-5" /> Layer Responsibilities</h4>
                <div className="grid md:grid-cols-2 gap-6 text-sm">
                  <div className="space-y-2">
                    <p><strong>API Layer</strong>: Controllers, Endpoints, Middleware, Auth registration.</p>
                    <p><strong>Application Layer</strong>: Commands, Queries, Handlers, DTOs, Validators.</p>
                  </div>
                  <div className="space-y-2">
                    <p><strong>Domain Layer</strong>: Entities, Value Objects, Domain Logic, Exceptions.</p>
                    <p><strong>Infrastructure Layer</strong>: Data Access, External Clients, File Storage.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Separator />

          {/* 3. Design Patterns */}
          <section id="patterns" className="scroll-mt-28 space-y-12">
            <div className="space-y-4">
              <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 3</Badge>
              <h2 className="text-4xl font-extrabold tracking-tight">Design Patterns</h2>
            </div>

            <div className="space-y-8">
              <div className="grid grid-cols-1 gap-8">
                <div className="space-y-4">
                  <h4 className="text-xl font-bold flex items-center gap-2"><Zap className="h-5 w-5 text-yellow-500" /> CQRS with MediatR</h4>
                  <p className="text-sm text-muted-foreground">Separates read models from write models and enables decorators for logging and validation.</p>
                  <CodeSnippet language="csharp" code={`public record CreateStudentCommand(string Name) : IRequest<int>;\npublic class CreateStudentHandler : IRequestHandler<CreateStudentCommand, int> { ... }`} />
                </div>
                <div className="space-y-4">
                  <h4 className="text-xl font-bold flex items-center gap-2"><Activity className="h-5 w-5 text-emerald-500" /> Dependency Injection</h4>
                  <p className="text-sm text-muted-foreground">Always use Constructor Injection. Prefer Scoped for DB context and Transient for lightweight services.</p>
                  <CodeSnippet language="csharp" code={`public class Service(IRepository repo) : IService {\n    // Use Primary Constructor (C# 12)\n}`} />
                </div>
              </div>
            </div>
          </section>

          <Separator />

          {/* 4. Data Access */}
          <section id="data-access" className="scroll-mt-28 space-y-12">
            <div className="space-y-4">
              <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 4</Badge>
              <h2 className="text-4xl font-extrabold tracking-tight">Data Access Patterns</h2>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Entity Framework Core</h3>
              <p className="text-muted-foreground">The primary ORM for AII .NET projects. Follow these best practices for performance.</p>

              <div className="grid grid-cols-1 gap-6">
                <div className="glass p-6 rounded-2xl border border-emerald-500/20 space-y-4">
                  <h5 className="font-bold text-emerald-600">✅ Eager Loading & NoTracking</h5>
                  <CodeSnippet language="csharp" code={`var students = await _context.Students\n    .AsNoTracking()\n    .Include(s => s.Courses)\n    .Where(s => s.IsActive)\n    .ToListAsync();`} />
                </div>
                <div className="glass p-6 rounded-2xl border border-blue-500/20 space-y-4">
                  <h5 className="font-bold text-blue-600 font-mono">Dapper for Performance</h5>
                  <p className="text-xs text-muted-foreground">Use Dapper for high-performance read scenarios or complex stored procedures.</p>
                  <CodeSnippet language="csharp" code={`return await _dbConnection.QueryAsync<ReportDTO>(\n    "EXEC GetComplexReport @Date", new { Date = DateTime.Now });`} />
                </div>
              </div>
            </div>
          </section>

          <Separator />

          {/* 5. API Implementation */}
          <section id="api-approaches" className="scroll-mt-28 space-y-12">
            <div className="space-y-4">
              <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 5</Badge>
              <h2 className="text-4xl font-extrabold tracking-tight">API Implementation Approaches</h2>
            </div>

            <div className="grid grid-cols-1 gap-8">
              <div className="space-y-4">
                <h4 className="text-xl font-bold">Standard Controllers</h4>
                <p className="text-sm text-muted-foreground">Best for large-scale APIs requiring complex route attributes or filters.</p>
                <CodeSnippet language="csharp" code={`[ApiController, Route("api/[controller]")]\npublic class StudentsController : ControllerBase {\n    [HttpPost] public async Task<IActionResult> Create(DTO data) => Ok();\n}`} />
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-bold">Minimal APIs</h4>
                <p className="text-sm text-muted-foreground">Recommended for microservices or simple feature sets. Less boilerplate.</p>
                <CodeSnippet language="csharp" code={`app.MapPost("/api/students", async (Command cmd, ISender sender) => \n    Results.Ok(await sender.Send(cmd)));`} />
              </div>
            </div>
          </section>

          <Separator />

          {/* 6. Naming Conventions */}
          <section id="naming" className="scroll-mt-28 space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 6</Badge>
              <h2 className="text-4xl font-extrabold tracking-tight">Naming Conventions</h2>
            </div>

            <div className="overflow-x-auto rounded-3xl border glass">
              <table className="w-full text-sm">
                <thead className="bg-muted text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  <tr>
                    <th className="px-6 py-4 text-left">Element</th>
                    <th className="px-6 py-4 text-left">Convention</th>
                    <th className="px-6 py-4 text-left">Example</th>
                  </tr>
                </thead>
                <tbody className="divide-y border-t">
                  {[
                    { el: "Classes", conv: "PascalCase", ex: "UserService" },
                    { el: "Interfaces", conv: "IPascalCase", ex: "IUserRepository" },
                    { el: "Methods", conv: "PascalCaseAsync", ex: "GetListAsync" },
                    { el: "Fields (Private)", conv: "_camelCase", ex: "_logger" },
                    { el: "Parameters", conv: "camelCase", ex: "userId" },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-accent/5 transition-colors">
                      <td className="px-6 py-4 font-semibold">{row.el}</td>
                      <td className="px-6 py-4"><Badge variant="outline" className="bg-primary/5">{row.conv}</Badge></td>
                      <td className="px-6 py-4 font-mono text-xs text-primary">{row.ex}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <Separator />

          {/* 7. File Organization */}
          <section id="organization" className="scroll-mt-28 space-y-12">
            <div className="space-y-4">
              <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 7</Badge>
              <h2 className="text-4xl font-extrabold tracking-tight">File and Project Organization</h2>
            </div>

            <FileTree
              title="Clean Architecture Structure"
              data={folderStructureData}
            />
          </section>

          <Separator />

          {/* 8. Validation */}
          <section id="validation" className="scroll-mt-28 space-y-12">
            <div className="space-y-4">
              <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 8</Badge>
              <h2 className="text-4xl font-extrabold tracking-tight">Validation & Error Handling</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="font-bold flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-emerald-500" /> FluentValidation</h4>
                <p className="text-sm text-muted-foreground">Keep validation logic separate from your entities and commands.</p>
                <CodeSnippet language="csharp" code={`public class CreateUserValidator : AbstractValidator<CreateUserCommand>\n{\n    public CreateUserValidator() {\n        RuleFor(x => x.Email).NotEmpty().EmailAddress();\n    }\n}`} />
              </div>
              <div className="space-y-4">
                <h4 className="font-bold flex items-center gap-2"><Bug className="h-5 w-5 text-red-500" /> Global Exception Handling</h4>
                <p className="text-sm text-muted-foreground italic">Use Exception Filters or Middleware to catch errors and return RFC-standard Problem Details.</p>
              </div>
            </div>
          </section>

          <Separator />

          {/* 9. Testing */}
          <section id="testing" className="scroll-mt-28 space-y-12">
            <div className="space-y-4">
              <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 9</Badge>
              <h2 className="text-4xl font-extrabold tracking-tight">Testing Guidelines</h2>
            </div>

            <div className="space-y-10">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="font-bold">Unit Testing (xUnit)</h4>
                  <p className="text-sm text-muted-foreground">Test business logic in isolation using Moq or NSubstitute.</p>
                  <CodeSnippet language="csharp" code={`[Fact]\npublic async Task Handle_ValidRequest_ShouldReturnId() {\n    // Arrange, Act, Assert\n}`} />
                </div>
                <div className="space-y-4">
                  <h4 className="font-bold">Integration Testing</h4>
                  <p className="text-sm text-muted-foreground">Test the whole ASP.NET Core stack using WebApplicationFactory and Respawn.</p>
                </div>
              </div>
            </div>
          </section>

          <CallToAction
            description="Following these .NET standards ensures your application is robust, secure, and ready for production at AII."
            primaryAction={{ label: "GitHub Workflow", href: "/github-axa-usage" }}
            secondaryAction={{ label: "Global Standards", href: "/coding-standard" }}
          />

        </main>

        <OnThisPage chapters={chapters} />
      </div>

      {/* Page Navigation */}
      <div className="px-4 pb-8">
        <PageNavigation
          previous={{ title: "GitHub Workflow", href: "/github-axa-usage" }}
          next={{ title: "Java Development", href: "/java-developer-guideline" }}
        />
      </div>
    </Layout>
  );
};

export default DotNetDeveloperGuidelinePage;