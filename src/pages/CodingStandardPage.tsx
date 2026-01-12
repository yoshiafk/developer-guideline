import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import PageHero from '../components/PageHero';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  CheckCircle2,
  Code2,
  BookOpen,
  ShieldCheck,
  Layout as LayoutIcon,
  Database,
  Server,
  FileCode,
  CircleAlert as AlertCircle,
  Lightbulb,
  ArrowRight,
  Info,
  Zap,
  ChevronRight,
  Scale,
  FlaskConical,
  Activity,
  MessageSquare,
  FileText,
  Layers,
  Globe,
  Bug,
  CircleHelp as HelpCircle,
  Fingerprint,
  Lock,
  Search
} from 'lucide-react';
import { motion } from 'framer-motion';
import CodeSnippet from '../components/CodeSnippet';

const chapters = [
  { id: "core-principles", title: "1. Core Principles", icon: Lightbulb },
  { id: "solid", title: "2. SOLID Principles", icon: Scale },
  { id: "clean-code", title: "3. Clean Code Practices", icon: Zap },
  { id: "security", title: "4. Security Standards", icon: ShieldCheck },
  { id: "architecture", title: "5. Architectural Patterns", icon: Layers },
  { id: "documentation", title: "6. Documentation & Style", icon: MessageSquare },
  { id: "testing-strategy", title: "7. Testing Strategy", icon: FlaskConical },
];

const CodingStandardPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState("core-principles");

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Global Standards' },
    { label: 'Coding Standards' }
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

    chapters.forEach((chapter) => {
      const el = document.getElementById(chapter.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Layout>
      <PageHero
        title="Global Coding Standards"
        subtitle="Universal principles and best practices that define excellence across every technology stack at AII."
        breadcrumbs={breadcrumbs}
      />

      <div className="container py-12 px-4 flex flex-col lg:flex-row gap-12">
        {/* Content */}
        <main className="flex-1 min-w-0 space-y-32 pb-24 lg:max-w-4xl">

          {/* 1. Core Principles */}
          <section id="core-principles" className="scroll-mt-28 space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 1</Badge>
              <h2 className="text-4xl font-extrabold tracking-tight">Core Development Principles</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Our engineering culture is built on these foundational pillars. They guide every decision from architectural design to individual lines of code.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Zap className="h-5 w-5 text-yellow-500" /> KISS Principle
                  </CardTitle>
                  <CardDescription>Keep It Simple, Stupid</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Most systems work best if they are kept simple rather than made complicated; therefore, simplicity should be a key goal in design, and unnecessary complexity should be avoided.</p>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Activity className="h-5 w-5 text-emerald-500" /> DRY Principle
                  </CardTitle>
                  <CardDescription>Don't Repeat Yourself</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Every piece of knowledge must have a single, unambiguous, authoritative representation within a system. Avoid duplication of logic across the codebase.</p>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <ShieldCheck className="h-5 w-5 text-blue-500" /> Security by Design
                  </CardTitle>
                  <CardDescription>Built-in, not bolted-on</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Software is designed from the ground up to be secure. Security is a first-class citizen in our development lifecycle, not an afterthought.</p>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Search className="h-5 w-5 text-purple-500" /> Observability
                  </CardTitle>
                  <CardDescription>Know your system's health</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Systems must be built to be observable. Proper logging, monitoring, and tracing are essential for maintaining enterprise-grade services.</p>
                </CardContent>
              </Card>
            </div>

            {/* Code Review Checklist */}
            <div className="mt-12 p-8 rounded-3xl bg-purple-500/5 border border-purple-500/10 space-y-6">
              <div className="flex items-center gap-3 text-purple-500">
                <div className="p-2 rounded-lg bg-purple-500/10">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold">Code Review Checklist</h3>
              </div>
              <p className="text-muted-foreground">Whether you are a reviewer or a contributor, use this checklist to ensure every PR meets AII standards:</p>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: "KISS Check", desc: "Is the solution the simplest possible way to solve the problem?" },
                  { title: "DRY Check", desc: "Is there any duplicated logic or hardcoded configuration?" },
                  { title: "Security", desc: "Are inputs validated? Are secrets handled correctly?" },
                  { title: "Observability", desc: "Are meaningful logs and telemetry included for debugging?" },
                  { title: "Standards", desc: "Does the code follow the specific language/framework guidelines?" },
                  { title: "Tests", desc: "Are there unit/integration tests covering the new logic?" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl border border-border/50 bg-background/50 group hover:border-purple-500/30 transition-colors">
                    <div className="flex-shrink-0 w-6 h-6 rounded-md bg-purple-500/10 text-purple-500 flex items-center justify-center font-bold text-xs">
                      <ChevronRight className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-sm">{item.title}</h4>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <Separator />

          {/* 2. SOLID Principles */}
          <section id="solid" className="scroll-mt-28 space-y-12">
            <div className="space-y-4">
              <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 2</Badge>
              <h2 className="text-4xl font-extrabold tracking-tight">SOLID Principles</h2>
              <p className="text-lg text-muted-foreground">The FIVE basic principles of object-oriented programming and design for building maintainable systems.</p>
            </div>

            <div className="space-y-6">
              {[
                { name: "Single Responsibility", desc: "A class should have one, and only one, reason to change." },
                { name: "Open/Closed", desc: "Software entities should be open for extension, but closed for modification." },
                { name: "Liskov Substitution", desc: "Objects in a program should be replaceable with instances of their subtypes without altering the correctness of that program." },
                { name: "Interface Segregation", desc: "Many client-specific interfaces are better than one general-purpose interface." },
                { name: "Dependency Inversion", desc: "One should depend upon abstractions, not concretions." }
              ].map((principle, i) => (
                <div key={i} className="flex gap-6 p-6 rounded-2xl bg-muted/30 border border-border/50 hover:bg-muted/50 transition-colors">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary font-bold text-xl">
                    {principle.name.charAt(0)}
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-lg">{principle.name}</h4>
                    <p className="text-muted-foreground">{principle.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <Separator />

          {/* 3. Clean Code Practices */}
          <section id="clean-code" className="scroll-mt-28 space-y-12">
            <div className="space-y-4">
              <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 3</Badge>
              <h2 className="text-4xl font-extrabold tracking-tight">Clean Code Practices</h2>
            </div>

            <div className="space-y-10">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold flex items-center gap-2">Naming & Clarity</h3>
                <p className="text-muted-foreground">Variables, functions, and classes should have names that reveal intent. If you need a comment to explain what it does, the name is likely poor.</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-5 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
                    <p className="text-xs font-bold uppercase text-emerald-600 mb-2">✅ Intent-Revealing</p>
                    <code className="text-sm font-mono block p-2 bg-background rounded">int daysSinceCreation;</code>
                  </div>
                  <div className="p-5 rounded-xl bg-destructive/5 border border-destructive/20">
                    <p className="text-xs font-bold uppercase text-destructive mb-2">❌ Opaque</p>
                    <code className="text-sm font-mono block p-2 bg-background rounded">int d; // elapsed time in days</code>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold flex items-center gap-2">Function Standards</h3>
                <ul className="space-y-3 list-disc pl-6 text-muted-foreground">
                  <li><strong>Small:</strong> Functions should rarely exceed 20 lines.</li>
                  <li><strong>Do One Thing:</strong> A function should have a single responsibility.</li>
                  <li><strong>Monadic/Dyadic:</strong> Prefer few arguments (0-2). Use objects for more.</li>
                  <li><strong>No Side Effects:</strong> Functions shouldn't secretly modify state.</li>
                </ul>
              </div>
            </div>
          </section>

          <Separator />

          {/* 4. Security Standards */}
          <section id="security" className="scroll-mt-28 space-y-12">
            <div className="space-y-4">
              <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 4</Badge>
              <h2 className="text-4xl font-extrabold tracking-tight">Security Standards</h2>
            </div>

            <div className="grid gap-8">
              <div className="p-8 rounded-3xl bg-slate-900 border border-slate-700 space-y-6">
                <h4 className="text-xl font-bold text-white flex items-center gap-3">
                  <Lock className="h-6 w-6 text-red-500" /> OWASP Top 10 Awareness
                </h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Injection Protection",
                    "Broken Access Control",
                    "Cryptographic Failures",
                    "Insecure Design",
                    "Security Misconfiguration",
                    "Vulnerable Components"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-slate-300 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500" /> {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold flex items-center gap-2 text-primary"><Fingerprint className="h-5 w-5" /> Sensitive Data Handling</h4>
                <p className="text-sm text-muted-foreground">**NEVER** log PII (Personally Identifiable Information) or credentials. Use masked logging and environment-based configuration for secrets.</p>
              </div>
            </div>
          </section>

          <Separator />

          {/* 5. Architectural Patterns */}
          <section id="architecture" className="scroll-mt-28 space-y-12">
            <div className="space-y-4">
              <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 5</Badge>
              <h2 className="text-4xl font-extrabold tracking-tight">Architectural Patterns</h2>
              <p className="text-lg text-muted-foreground">Common blueprints used across AII documentation for different system complexities.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="glass shadow-lg border-primary/10">
                <CardHeader>
                  <CardTitle>Clean Architecture</CardTitle>
                  <CardDescription>Domain-Centric</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm">Ideal for complex business domains and long-term maintainability. Separation of concerns between UI, Business Logic, and Infrastructure.</p>
                  <Button asChild variant="secondary" className="w-full">
                    <Link to="/clean-architecture">Explore Standards <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="glass shadow-lg border-primary/10">
                <CardHeader>
                  <CardTitle>Microservices</CardTitle>
                  <CardDescription>Scale-Centric</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm">Small, independent, and loosely coupled services communicate over a network, usually via REST or Message Bus.</p>
                  <Badge className="bg-primary/20 text-primary hover:bg-primary/30">Standard for AII Services</Badge>
                </CardContent>
              </Card>
            </div>
          </section>

          <section id="language-nav" className="p-12 rounded-[2.5rem] bg-primary/5 border border-primary/10 space-y-8">
            <h2 className="text-3xl font-bold text-center">Language-Specific Guidelines</h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto">While the above principles are universal, each language has its own idioms and conventions. Select your stack for detailed implementation guides.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: ".NET", path: "/dotnet-developer-guideline", color: "blue" },
                { name: "React", path: "/react-developer-guideline", color: "cyan" },
                { name: "Java", path: "/java-developer-guideline", color: "red" },
                { name: "Python", path: "/python-developer-guideline", color: "yellow" }
              ].map((lang) => (
                <Button key={lang.name} asChild variant="outline" className="h-16 font-bold hover:bg-primary hover:text-white transition-all">
                  <Link to={lang.path}>{lang.name}</Link>
                </Button>
              ))}
            </div>
          </section>
        </main>

        {/* Right Side Sticky ToC */}
        <aside className="lg:w-64 shrink-0 h-[calc(100vh-8rem)] sticky top-24 hidden xl:block overflow-y-auto pl-4 border-l">
          <div className="space-y-1 pb-12">
            <h4 className="text-[10px] font-bold mb-6 px-3 text-muted-foreground/60 uppercase tracking-[0.2em]">On this page</h4>
            {chapters.map((chapter) => (
              <a
                key={chapter.id}
                href={`#${chapter.id}`}
                className={`flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-all ${activeSection === chapter.id
                  ? "text-primary font-bold"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                <chapter.icon className={`h-3.5 w-3.5 shrink-0 ${activeSection === chapter.id ? "text-primary" : "text-muted-foreground/40"}`} />
                {chapter.title}
              </a>
            ))}
          </div>
        </aside>
      </div>
    </Layout>
  );
};

export default CodingStandardPage;