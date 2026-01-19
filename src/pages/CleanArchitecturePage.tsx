import React, { useState, useEffect } from 'react';
import PageHero from '@/components/PageHero';
import Layout from '@/components/Layout';
import OnThisPage from '@/components/OnThisPage';
import CodeSnippet from '@/components/CodeSnippet';
import FileTree, { FileTreeItem } from '@/components/FileTree';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Layers,
  ShieldCheck,
  Zap,
  CheckCircle2,
  ArrowRight,
  Code2,
  Database,
  Globe,
  Settings,
  Puzzle,
  GitMerge,
  FlaskConical,
  Bug,
  Info,
  BookOpen,
  Layout as LayoutIcon,
  Table as TableIcon
} from 'lucide-react';

const chapters = [
  { id: "core-concept", title: "1. Core Concept", icon: Layers },
  { id: "layers", title: "2. Layer Responsibilities", icon: Settings },
  { id: "dependency-rule", title: "3. The Dependency Rule", icon: ShieldCheck },
  { id: "hexagonal", title: "4. Hexagonal (Ports & Adapters)", icon: Puzzle },
  { id: "onion", title: "5. Onion Architecture", icon: GitMerge },
  { id: "implementation", title: "6. Practical Implementation", icon: Code2 },
  { id: "testing", title: "7. Testing the Layers", icon: FlaskConical },
];

const folderStructureData: FileTreeItem[] = [
  {
    name: "src",
    type: "folder",
    children: [
      {
        name: "core",
        type: "folder",
        children: [
          { name: "domain", type: "folder", comment: "Entities, Value Objects, Repository Interfaces" },
          { name: "application", type: "folder", comment: "Use Cases, DTOs, Handlers" }
        ]
      },
      {
        name: "infrastructure",
        type: "folder",
        comment: "DB Context, Repository Impls, External Clients"
      },
      {
        name: "webapi",
        type: "folder",
        comment: "Controllers, Routes, Middlewares"
      }
    ]
  }
];

const CleanArchitecturePage: React.FC = () => {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Architecture & Standards' },
    { label: 'Clean Architecture' }
  ];

  return (
    <Layout>
      <PageHero
        title="Clean Architecture Standards"
        subtitle="Creating systems that are independent of frameworks, UI, and databases while being highly testable."
        breadcrumbs={breadcrumbs}
        readingTime={40}
      />

      <div className="py-8 flex flex-col lg:flex-row gap-12">
        <main className="flex-1 min-w-0 space-y-20 pb-16">

          {/* Chapter 1: Core Concept */}
          <section id="core-concept" className="scroll-mt-28 space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 1</Badge>
              <h2 className="text-4xl font-extrabold tracking-tight">Core Concept</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                The primary goal of Clean Architecture is the <strong>separation of concerns</strong>. By keeping the business logic independent of external agencies like databases and UI, we create systems that are easier to maintain and test.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10 space-y-3">
                  <h4 className="font-bold text-lg flex items-center gap-2 text-primary">
                    <CheckCircle2 className="h-5 w-5" />
                    Key Characteristics
                  </h4>
                  <ul className="text-sm space-y-3 text-muted-foreground">
                    <li>• <strong>Independent of Frameworks:</strong> Use frameworks as tools, don't build your logic around them.</li>
                    <li>• <strong>Testable:</strong> Business rules can be tested without the UI, Database, or any external element.</li>
                    <li>• <strong>Independent of UI:</strong> Changing the web UI shouldn't require changing the business rules.</li>
                    <li>• <strong>Independent of Database:</strong> Switch from SQL Server to MongoDB with minimal impact on logic.</li>
                  </ul>
                </div>
              </div>
              <div className="relative aspect-square flex items-center justify-center p-8 bg-slate-900 rounded-3xl overflow-hidden border border-slate-700">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500 to-transparent animate-pulse" />
                <div className="z-10 text-center space-y-2 font-mono">
                  <div className="w-56 h-56 rounded-full border-2 border-indigo-500 flex items-center justify-center">
                    <div className="w-40 h-40 rounded-full border-2 border-blue-400 flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full border-2 border-emerald-400 flex items-center justify-center">
                        <span className="text-emerald-400 text-xs font-bold">Domain</span>
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] text-slate-500 block uppercase pt-4">Inward Dependency Rule</span>
                </div>
              </div>
            </div>
          </section>

          <Separator />

          {/* Chapter 2: Layers */}
          <section id="layers" className="scroll-mt-28 space-y-12">
            <div className="space-y-4">
              <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 2</Badge>
              <h2 className="text-4xl font-extrabold tracking-tight">Layer Responsibilities</h2>
              <p className="text-lg text-muted-foreground">Standardized definition of what goes into each architectural layer.</p>
            </div>

            <div className="grid gap-6">
              {[
                {
                  name: "Entities (Domain)",
                  color: "emerald",
                  desc: "Business objects and enterprise-wide rules. No dependencies on anything else.",
                  items: ["Value Objects", "Aggregates", "Domain Services", "Domain Events"]
                },
                {
                  name: "Use Cases (Application)",
                  color: "blue",
                  desc: "Application-specific business rules. Orchestrates flow of data to and from entities.",
                  items: ["Command/Query Handlers", "DTOs", "Mappers", "Ports/Interfaces"]
                },
                {
                  name: "Interface Adapters",
                  color: "indigo",
                  desc: "Converts data between use cases and external formats.",
                  items: ["Controllers", "Presenters", "Repository Implementations", "Gateways"]
                },
                {
                  name: "Frameworks & Drivers",
                  color: "slate",
                  desc: "External tools like DB, UI, Devices, Frameworks.",
                  items: ["Database (EF Core/JPA)", "HTTP Client", "File System", "External APIs"]
                }
              ].map((layer, i) => (
                <div key={i} className="flex gap-6 p-8 rounded-3xl border border-border bg-background/50 hover:border-primary/30 transition-all group">
                  <div className={`w-1 font-bold text-transparent bg-gradient-to-b from-${layer.color}-500 to-transparent rounded-full`} />
                  <div className="space-y-3 flex-1">
                    <div className="flex justify-between items-center">
                      <h4 className={`font-bold text-xl text-${layer.color}-500`}>{layer.name}</h4>
                      <div className="flex gap-2">
                        {layer.items.map(tag => <Badge key={tag} variant="secondary" className="text-[10px]">{tag}</Badge>)}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{layer.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <Separator />

          {/* Chapter 3: Dependency Rule */}
          <section id="dependency-rule" className="scroll-mt-28 space-y-12">
            <div className="space-y-4">
              <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 3</Badge>
              <h2 className="text-4xl font-extrabold tracking-tight">The Dependency Rule</h2>
              <p className="text-lg text-muted-foreground">Source code dependencies can only point inwards. Nothing in an inner circle can know anything at all about something in an outer circle.</p>
            </div>

            <div className="p-8 rounded-3xl bg-blue-500/5 border border-blue-500/10 space-y-8">
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="space-y-6 flex-1">
                  <h4 className="font-bold text-2xl flex items-center gap-2">
                    <Zap className="h-6 w-6 text-blue-500" />
                    How to Invert Dependencies
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    If the Application layer needs to save data (an Infrastructure concern), it defines an <strong>Interface (Port)</strong>. The Infrastructure layer then <strong>Implements (Adapter)</strong> that interface.
                  </p>
                  <div className="flex gap-4">
                    <Badge className="bg-emerald-500">Domain Knows No One</Badge>
                    <Badge className="bg-blue-500">App Knows Domain</Badge>
                    <Badge className="bg-indigo-500">Infra Knows App</Badge>
                  </div>
                </div>
              </div>
            </div>

            <CodeSnippet
              title="Implementing Dependency Inversion"
              language="typescript"
              code={`// --- Application Layer (Inner) ---
export interface IOrderRepository {
  save(order: Order): Promise<void>;
}

export class CreateOrderUseCase {
  constructor(private repo: IOrderRepository) {}
  
  async execute(order: Order) {
    // Business logic...
    await this.repo.save(order);
  }
}

// --- Infrastructure Layer (Outer) ---
export class PostgresOrderRepository implements IOrderRepository {
  async save(order: Order) {
    // Direct database access code
  }
}`}
            />
          </section>

          <Separator />

          {/* Chapter 4: Hexagonal Architecture */}
          <section id="hexagonal" className="scroll-mt-28 space-y-12">
            <div className="space-y-4">
              <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 4</Badge>
              <h2 className="text-4xl font-extrabold tracking-tight">Hexagonal (Ports & Adapters)</h2>
              <p className="text-lg text-muted-foreground">Separating the application core from the drivers and driven actors.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 rounded-2xl bg-indigo-500/5 border border-indigo-500/20 space-y-4">
                <h4 className="font-bold flex items-center gap-2 text-indigo-700">
                  <Puzzle className="h-5 w-5" />
                  Ports & Adapters
                </h4>
                <div className="space-y-4 text-sm text-muted-foreground">
                  <p><strong>Ports:</strong> Interfaces that provide entry points to or exits from the application core.</p>
                  <p><strong>Adapters:</strong> Bridges between external technologies and the application's ports.</p>
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-indigo-500/10">
                    <div>
                      <span className="text-[10px] font-bold uppercase text-indigo-400">Driving (Input)</span>
                      <p className="text-xs">UIs, CLI, Test Scripts</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase text-indigo-400">Driven (Output)</span>
                      <p className="text-xs">DBs, MQ, Mail, SMS</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-700 flex flex-col justify-center font-mono text-xs text-blue-400 space-y-4">
                <div className="text-center">ADAPTER {'->'} [PORT | CORE | PORT] {'->'} ADAPTER</div>
                <div className="flex justify-between items-center opacity-70">
                  <div className="p-2 border border-slate-700 rounded text-[10px]">REST API</div>
                  <ArrowRight className="h-4 w-4" />
                  <div className="p-4 border-2 border-blue-500 rounded-lg text-blue-400">DOMAIN</div>
                  <ArrowRight className="h-4 w-4" />
                  <div className="p-2 border border-slate-700 rounded text-[10px]">PostgreSQL</div>
                </div>
              </div>
            </div>
          </section>

          <Separator />

          {/* Chapter 5: Onion Architecture */}
          <section id="onion" className="scroll-mt-28 space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 5</Badge>
              <h2 className="text-4xl font-extrabold tracking-tight">Onion Architecture</h2>
              <p className="text-lg text-muted-foreground">Emphasizing the domain at the center with concentric rings of abstraction.</p>
            </div>

            <div className="p-8 rounded-3xl border border-border bg-background/50 space-y-6">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { title: "Domain Model", pos: "Center", desc: "Pure business entities and value objects." },
                  { title: "Domain Services", pos: "Inner Ring", desc: "Logic that doesn't belong to a single entity." },
                  { title: "App Services", pos: "Middle Ring", desc: "Orchestration and workflow logic." },
                  { title: "Infra/UI", pos: "Outer Ring", desc: "External technical implementations." }
                ].map((step, i) => (
                  <div key={i} className="space-y-2 relative">
                    <span className="text-[10px] font-bold uppercase text-primary/60">{step.pos}</span>
                    <h5 className="font-bold text-sm">{step.title}</h5>
                    <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <Separator />

          {/* Chapter 6: Implementation */}
          <section id="implementation" className="scroll-mt-28 space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 6</Badge>
              <h2 className="text-4xl font-extrabold tracking-tight">Practical Implementation</h2>
              <p className="text-lg text-muted-foreground">Choosing the right approach based on project complexity.</p>
            </div>

            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm text-left">
                <thead className="bg-muted text-muted-foreground uppercase text-[10px] font-bold tracking-wider">
                  <tr>
                    <th className="px-6 py-3">Factor</th>
                    <th className="px-6 py-3">Clean Architecture</th>
                    <th className="px-6 py-3">Vertical Slice</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr className="hover:bg-accent/5">
                    <td className="px-6 py-4 font-medium">Domain Complexity</td>
                    <td className="px-6 py-4">High (Rich Domain)</td>
                    <td className="px-6 py-4">Low/Medium (CRUD)</td>
                  </tr>
                  <tr className="hover:bg-accent/5">
                    <td className="px-6 py-4 font-medium">Coupling</td>
                    <td className="px-6 py-4">Decoupled by Layers</td>
                    <td className="px-6 py-4">Coupled by Feature</td>
                  </tr>
                  <tr className="hover:bg-accent/5">
                    <td className="px-6 py-4 font-medium">Maintenance</td>
                    <td className="px-6 py-4">Long term, Enterprise</td>
                    <td className="px-6 py-4">Fast delivery, Small apps</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <FileTree
              title="Standard Folder Structure"
              data={folderStructureData}
            />
          </section>

          <Separator />

          {/* Chapter 7: Testing */}
          <section id="testing" className="scroll-mt-28 space-y-12">
            <div className="space-y-4 text-center max-w-2xl mx-auto">
              <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 7</Badge>
              <h2 className="text-4xl font-extrabold tracking-tight">Testing the Layers</h2>
              <p className="text-lg text-muted-foreground">Clean Architecture makes testing easier by providing clear boundaries to mock or stub.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Domain Unit Tests",
                  type: "Pure Logic",
                  desc: "Test business rules in entities. No infrastructure needed."
                },
                {
                  name: "Application Unit Tests",
                  type: "Mocked Ports",
                  desc: "Test use cases by mocking repository interfaces."
                },
                {
                  name: "Infrastructure Integration",
                  type: "Real DB/Adapter",
                  desc: "Test that adapters correctly interact with external systems."
                }
              ].map((test, i) => (
                <div key={i} className="p-6 rounded-2xl border border-border bg-background/50 hover:border-primary/30 transition-colors">
                  <FlaskConical className="h-6 w-6 text-primary mb-4" />
                  <h5 className="font-bold text-sm mb-1">{test.name}</h5>
                  <Badge variant="secondary" className="text-[9px] mb-3">{test.type}</Badge>
                  <p className="text-xs text-muted-foreground leading-relaxed">{test.desc}</p>
                </div>
              ))}
            </div>
          </section>

        </main>

        <OnThisPage chapters={chapters} />
      </div>
    </Layout>
  );
};

export default CleanArchitecturePage;