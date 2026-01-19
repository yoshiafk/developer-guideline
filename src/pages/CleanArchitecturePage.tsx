import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import PageHero from '../components/PageHero';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Layers,
  Zap,
  ShieldCheck,
  Layout as LayoutIcon,
  Search,
  Database,
  Globe,
  CheckCircle2,
  CircleAlert as AlertCircle,
  Lightbulb,
  BookOpen,
  ArrowRight,
  Code2,
  Info,
  Server,
  FileCode,
  Table as TableIcon,
  FlaskConical,
  Bug,
  CircleHelp as HelpCircle,
} from 'lucide-react';
import { motion } from 'framer-motion';
import CodeSnippet from '../components/CodeSnippet';

const CleanArchitecturePage: React.FC = () => {
  const [activeSection, setActiveSection] = useState("architecture");

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'General', href: '/coding-standard' },
    { label: 'Clean Architecture Standards' }
  ];

  const sections = [
    { id: "architecture", title: "1. Architecture Decisions", icon: Layers },
    { id: "patterns", title: "2. Design Patterns", icon: Zap },
    { id: "data-access", title: "3. Data Access", icon: Database },
    { id: "api-style", title: "4. API Approaches", icon: Globe },
    { id: "checklist", title: "5. Standards Checklist", icon: CheckCircle2 },
    { id: "structure", title: "6. Project Structure", icon: LayoutIcon },
    { id: "code-patterns", title: "7. Essential Patterns", icon: Code2 },
    { id: "testing", title: "8. Testing Patterns", icon: FlaskConical },
    { id: "matrix", title: "9. Decision Matrix", icon: TableIcon },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2, rootMargin: "-10% 0px -70% 0px" }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Layout>
      <PageHero
        title="App Architecture Guide"
        subtitle="Comprehensive standards and quick reference for .NET Clean Architecture and Vertical Slice patterns."
        breadcrumbs={breadcrumbs}
      />

      <div className="py-12 flex flex-col lg:flex-row gap-12">
        {/* Content Area */}
        <main className="flex-1 space-y-20 min-w-0">
          {/* Introduction */}
          <section id="introduction" className="space-y-6">
            <div className="p-4 rounded-lg bg-primary/5 border border-primary/10 flex gap-4">
              <Info className="h-6 w-6 text-primary shrink-0" />
              <p className="text-sm text-primary/80 leading-relaxed italic">
                For detailed examples and explanations, see the full <a href="/coding-standard" className="underline font-bold">Coding Standards Guide</a>.
                This is a quick reference for daily development and code reviews.
              </p>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our architecture standards ensure consistency across services. We support two primary patterns based on complexity: <strong>Clean Architecture</strong> for rich domains and <strong>Vertical Slice</strong> for feature-focused or CRUD-heavy applications.
            </p>

            {/* Quick Handbook for New Joiners */}
            <div className="p-8 rounded-3xl bg-blue-500/5 border border-blue-500/10 space-y-6">
              <div className="flex items-center gap-3 text-blue-500">
                <div className="p-2 rounded-lg bg-blue-500/10">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold">The Developer Handbook</h3>
              </div>
              <p className="text-sm text-muted-foreground">If you're new to AII, here's the absolute essentials you need to know about our architectural philosophy:</p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: "Layered Isolation", desc: "The Domain Layer is the center and must NEVER depend on Infrastructure or WebApi." },
                  { title: "Dependency Flow", desc: "Dependencies always point inwards. Use Interfaces to decouple logic." },
                  { title: "Feature Focus", desc: "Vertical Slice allows for faster delivery by grouping logic by feature instead of layer." },
                ].map((item, i) => (
                  <div key={i} className="space-y-2">
                    <h4 className="font-bold text-sm flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-primary" /> {item.title}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 1. Architecture Decisions */}
          <section id="architecture" className="scroll-mt-28 space-y-8">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500">
                <Layers className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight">Architecture Decisions</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent pointer-events-none" />
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Clean Architecture
                    <Badge variant="secondary">Complex Domains</Badge>
                  </CardTitle>
                  <CardDescription>Domain → Application → Infrastructure → WebApi</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 text-sm">
                  <p className="text-muted-foreground">Focuses on business logic isolation and strict layer boundaries.</p>
                  <ul className="space-y-2 list-none p-0">
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                      <span>Rich business logic / Long-term projects</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                      <span>Multiple applications sharing the same domain</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent pointer-events-none" />
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Vertical Slice
                    <Badge variant="secondary">CRUD Heavy</Badge>
                  </CardTitle>
                  <CardDescription>Features/Orders/Create/, Features/Orders/GetById/</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 text-sm">
                  <p className="text-muted-foreground">Focuses on high cohesion by co-locating all code related to a specific feature.</p>
                  <ul className="space-y-2 list-none p-0">
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                      <span>Independent features / Rapid development</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                      <span>Smaller teams or microservices context</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* 2. Design Patterns */}
          <section id="patterns" className="scroll-mt-28 space-y-8">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-yellow-500/10 text-yellow-500">
                <Zap className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight">Design Patterns</h2>
            </div>

            <Tabs defaultValue="cqrs" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="cqrs">CQRS + MediatR</TabsTrigger>
                <TabsTrigger value="services">Direct Services</TabsTrigger>
              </TabsList>
              <TabsContent value="cqrs" className="space-y-4">
                <div className="bg-muted/30 p-6 rounded-lg border">
                  <h4 className="font-semibold mb-2">Pattern Overview</h4>
                  <p className="text-muted-foreground text-sm mb-4">Decouples commands (writes) and queries (reads). Uses MediatR for pipeline behaviors like logging and validation.</p>
                  <CodeSnippet
                    code={`public record CreateOrderCommand(string Product) : IRequest<OrderResult>;\npublic class CreateOrderHandler : IRequestHandler<CreateOrderCommand, OrderResult>`}
                    language="csharp"
                    title="CQRS Implementation"
                  />
                </div>
              </TabsContent>
              <TabsContent value="services" className="space-y-4">
                <div className="bg-muted/30 p-6 rounded-lg border">
                  <h4 className="font-semibold mb-2">Pattern Overview</h4>
                  <p className="text-muted-foreground text-sm mb-4">Traditional application services. Simpler, less abstraction overhead.</p>
                  <CodeSnippet
                    code={`public interface IOrderService { Task<OrderResult> CreateAsync(CreateOrderRequest request); }\npublic class OrderService : IOrderService`}
                    language="csharp"
                    title="Service Implementation"
                  />
                </div>
              </TabsContent>
            </Tabs>
          </section>

          {/* 3. Data Access */}
          <section id="data-access" className="scroll-mt-28 space-y-8">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500">
                <Database className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight">Data Access</h2>
            </div>

            <div className="grid gap-6">
              {[
                { title: "Option 1: Repository Pattern", desc: "Abstraction over EF Core, essential for CA/Testing.", use: "Testing abstraction needed, multiple data sources." },
                { title: "Option 2: Generic Repository + UoW", desc: "Consistent patterns for bulk entities.", use: "Many similar entities, transaction coordination." },
                { title: "Option 3: Direct DbContext", desc: "Highest performance, lowest complexity.", use: "Simple operations, Vertical Slice, performance critical." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-lg border bg-card hover:bg-accent/5 transition-colors">
                  <div className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-1 text-xs font-bold">{i + 1}</div>
                  <div>
                    <h4 className="font-bold underline decoration-primary/30 underline-offset-4">{item.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                    <p className="text-xs font-medium text-primary mt-2 flex items-center gap-1"><ArrowRight className="h-3 w-3" /> {item.use}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 4. Standards Checklist */}
          <section id="checklist" className="scroll-mt-28 space-y-8 p-8 rounded-2xl bg-muted/30 border border-primary/5">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-500">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight">Quick Standards Checklist</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 mt-4">
              <div className="space-y-4">
                <h4 className="font-semibold text-primary flex items-center gap-2"><TableIcon className="h-4 w-4" /> Naming Conventions</h4>
                <ul className="space-y-3 text-sm list-none p-0">
                  <li className="flex justify-between border-b pb-1"><span>Classes</span> <code className="text-blue-500">PascalCase</code></li>
                  <li className="flex justify-between border-b pb-1"><span>Interfaces</span> <code className="text-blue-500">IPascalCase</code></li>
                  <li className="flex justify-between border-b pb-1"><span>Methods</span> <code className="text-blue-500">PascalCaseAsync</code></li>
                  <li className="flex justify-between border-b pb-1"><span>Fields (private)</span> <code className="text-blue-500">_camelCase</code></li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-primary flex items-center gap-2"><Lightbulb className="h-4 w-4" /> Async/Await Rules</h4>
                <div className="p-3 rounded border bg-emerald-500/5 text-xs">
                  <p className="font-bold text-emerald-600 mb-2 whitespace-nowrap">✅ DO: Async all the way through</p>
                  <code className="text-muted-foreground">return await _repository.GetByIdAsync(id, ct);</code>
                </div>
                <div className="p-3 rounded border bg-destructive/5 text-xs">
                  <p className="font-bold text-destructive mb-2 whitespace-nowrap">❌ DON'T: Block async calls</p>
                  <code className="text-muted-foreground">var res = GetAsync().Result; // CRITICAL!</code>
                </div>
              </div>
            </div>
          </section>

          {/* 5. Project Structure */}
          <section id="structure" className="scroll-mt-28 space-y-8">
            <h2 className="text-3xl font-bold tracking-tight">Recommended Project Structure</h2>
            <div className="p-6 rounded-lg bg-slate-900 overflow-x-auto border border-slate-700">
              <pre className="text-xs text-blue-300 font-mono leading-relaxed group">
                {`src/
├── Domain/           # Entities, ValueObjects, Domain Interfaces
├── Application/      # UseCases, DTOs, Validators
├── Infrastructure/   # DbContext, Repositories, Services
└── WebApi/           # Controllers, Middleware, Auth`}
              </pre>
            </div>
          </section>

          {/* 6. Testing Patterns */}
          <section id="testing" className="scroll-mt-28 space-y-8">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-pink-500/10 text-pink-500">
                <FlaskConical className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight">Testing Patterns</h2>
            </div>

            <Card className="border-none bg-muted/40">
              <CardContent className="p-6 space-y-4">
                <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-sm">
                  <h5 className="font-bold text-emerald-600 mb-1 flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4" />
                    Unit Test Structure (AAA)
                  </h5>
                  <p className="text-muted-foreground italic mb-3">Arrange, Act, Assert. Everything must be isolatable.</p>
                  <CodeSnippet title="Test Example" code={`[Test]\npublic async Task Handle_ValidRequest_ReturnsSuccess()\n{\n    // Arrange\n    var cmd = new CreateOrderCommand("Prod");\n    // Act\n    var result = await _handler.Handle(cmd, CancellationToken.None);\n    // Assert\n    Assert.That(result.Success, Is.True);\n}`} />
                </div>
              </CardContent>
            </Card>
          </section>

          {/* 7. Decision Matrix */}
          <section id="matrix" className="scroll-mt-28 space-y-8">
            <h2 className="text-3xl font-bold tracking-tight">Decision Matrix</h2>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm text-left">
                <thead className="bg-muted text-muted-foreground uppercase text-[10px] font-bold tracking-wider">
                  <tr>
                    <th className="px-6 py-3">Scenario</th>
                    <th className="px-6 py-3">Architecture</th>
                    <th className="px-6 py-3">Pattern</th>
                    <th className="px-6 py-3">Data Access</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr className="hover:bg-accent/5">
                    <td className="px-6 py-4 font-medium">Complex Logic</td>
                    <td className="px-6 py-4">Clean Arch</td>
                    <td className="px-6 py-4">CQRS</td>
                    <td className="px-6 py-4">Repository</td>
                  </tr>
                  <tr className="hover:bg-accent/5">
                    <td className="px-6 py-4 font-medium">CRUD Application</td>
                    <td className="px-6 py-4">Vertical Slice</td>
                    <td className="px-6 py-4">Services</td>
                    <td className="px-6 py-4">Direct DbContext</td>
                  </tr>
                  <tr className="hover:bg-accent/5">
                    <td className="px-6 py-4 font-medium">Microservice</td>
                    <td className="px-6 py-4">Vertical Slice</td>
                    <td className="px-6 py-4">CQRS</td>
                    <td className="px-6 py-4">Direct DbContext</td>
                  </tr>
                  <tr className="hover:bg-accent/5">
                    <td className="px-6 py-4 font-medium">Enterprise App</td>
                    <td className="px-6 py-4">Clean Arch</td>
                    <td className="px-6 py-4">CQRS</td>
                    <td className="px-6 py-4">Repository + UoW</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 8. Common Mistakes */}
          <section id="mistakes" className="scroll-mt-28 space-y-8 bg-destructive/5 p-8 rounded-2xl border border-destructive/10">
            <h2 className="text-2xl font-bold flex items-center gap-2 text-destructive">
              <Bug className="h-6 w-6" /> Common Mistakes to Avoid
            </h2>
            <div className="grid gap-4">
              {[
                { title: "Mixing Patterns", rule: "Don't use OrderService and ISender for the same logic." },
                { title: "Blocking Async", rule: "Avoid .Result or .Wait() at all costs." },
                { title: "Entities in API", rule: "Never return Domain Entities directly; always use DTOs." },
                { title: "Logic in Controllers", rule: "Controllers should only orchestrate, never handle business rules." }
              ].map((mistake, i) => (
                <div key={i} className="flex gap-4 items-start border-l-4 border-destructive pl-4 py-2">
                  <div className="mt-1"><AlertCircle className="h-5 w-5 text-destructive" /></div>
                  <div>
                    <h5 className="font-bold text-destructive/90">{mistake.title}</h5>
                    <p className="text-sm text-muted-foreground">{mistake.rule}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Navigation Footer */}
          <section className="pt-12">
            <Card className="bg-primary text-primary-foreground border-none overflow-hidden group">
              <CardContent className="p-0">
                <a href="/coding-standard" className="flex items-center justify-between p-8 group-hover:bg-primary/90 transition-colors">
                  <div className="space-y-1">
                    <p className="text-primary-foreground/70 text-sm font-medium uppercase tracking-wider">Next Chapter</p>
                    <h3 className="text-2xl font-bold">Comprehensive Coding Standards</h3>
                  </div>
                  <div className="bg-primary-foreground/10 p-4 rounded-full group-hover:translate-x-2 transition-transform">
                    <ArrowRight className="h-6 w-6" />
                  </div>
                </a>
              </CardContent>
            </Card>
          </section>
        </main>

        {/* Right Side ToC */}
        <aside className="lg:w-64 shrink-0 h-[calc(100vh-8rem)] sticky top-24 hidden xl:block overflow-y-auto pl-4 border-l">
          <div className="space-y-1 pb-12">
            <h4 className="text-[10px] font-bold mb-6 px-3 text-muted-foreground/60 uppercase tracking-[0.2em]">On This Page</h4>
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-all ${activeSection === section.id
                  ? "text-primary font-bold"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                <section.icon className={`h-3.5 w-3.5 shrink-0 ${activeSection === section.id ? "text-primary" : "text-muted-foreground/40"}`} />
                {section.title}
              </a>
            ))}
          </div>
        </aside>
      </div>
    </Layout>
  );
};

export default CleanArchitecturePage;