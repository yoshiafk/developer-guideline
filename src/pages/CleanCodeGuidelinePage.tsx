import React, { useState, useEffect } from 'react';
import PageHero from '@/components/PageHero';
import Layout from '@/components/Layout';
import CodeSnippet from '@/components/CodeSnippet';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Sparkles,
  BookOpen,
  Terminal,
  Shield,
  Zap,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  FileCode,
  Layers,
  FlaskConical,
  Target
} from 'lucide-react';

const chapters = [
  { id: "core-principles", title: "1. Core Principles", icon: Sparkles },
  { id: "naming", title: "2. Meaningful Naming", icon: FileCode },
  { id: "solid", title: "3. SOLID Principles", icon: Layers },
  { id: "smells", title: "4. Code Smells", icon: AlertTriangle },
  { id: "error-handling", title: "5. Error Handling", icon: Shield },
  { id: "testing", title: "6. Clean Testing", icon: FlaskConical },
];

const CleanCodeGuidelinePage: React.FC = () => {
  const [activeSection, setActiveSection] = useState("core-principles");

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Architecture & Standards' },
    { label: 'Clean Code' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter(entry => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          const mostVisible = visibleEntries.reduce((prev, current) => {
            if (current.intersectionRatio > prev.intersectionRatio) {
              return current;
            }
            return prev;
          });
          setActiveSection(mostVisible.target.id);
        }
      },
      { threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0], rootMargin: "-10% 0px -70% 0px" }
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
        title="Clean Code & Craftsmanship"
        subtitle="Principles and best practices for writing readable, maintainable, and professional code."
        breadcrumbs={breadcrumbs}
        readingTime={25}
      />

      <div className="py-8 flex flex-col lg:flex-row gap-12">
        <main className="flex-1 min-w-0 space-y-16 pb-16">

          {/* Chapter 1: Core Principles */}
          <section id="core-principles" className="scroll-mt-28 space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 1</Badge>
              <h2 className="text-4xl font-extrabold tracking-tight">Core Principles</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Clean code is not just about making code work; it's about making it sustainable, readable, and easy to modify by others.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  title: "KISS (Keep It Simple, Stupid)",
                  desc: "Avoid unnecessary complexity. Simple code is easier to maintain and has fewer bugs.",
                  icon: Zap,
                  color: "yellow"
                },
                {
                  title: "DRY (Don't Repeat Yourself)",
                  desc: "Every piece of knowledge should have a single, unambiguous representation in the system.",
                  icon: Target,
                  color: "blue"
                },
                {
                  title: "YAGNI (You Ain't Gonna Need It)",
                  desc: "Don't add functionality until it's actually required. Avoid premature optimization.",
                  icon: Shield,
                  color: "green"
                },
                {
                  title: "Boy Scout Rule",
                  desc: "Always leave the code cleaner than you found it. Small, continuous improvements matter.",
                  icon: Sparkles,
                  color: "purple"
                }
              ].map((item, i) => (
                <div key={i} className="glass p-6 rounded-2xl border border-border/50 space-y-3">
                  <div className={`w-10 h-10 rounded-lg bg-${item.color}-500/10 flex items-center justify-center text-${item.color}-500`}>
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h4 className="font-bold text-lg">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <Separator />

          {/* Chapter 2: Meaningful Naming */}
          <section id="naming" className="scroll-mt-28 space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 2</Badge>
              <h2 className="text-4xl font-extrabold tracking-tight">Meaningful Naming</h2>
              <p className="text-lg text-muted-foreground">Names should reveal intent. If a name requires a comment, then the name does not reveal its intent.</p>
            </div>

            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-destructive/5 border border-destructive/20 space-y-3">
                  <h4 className="font-bold text-destructive">❌ Bad Naming</h4>
                  <ul className="text-sm space-y-2 text-muted-foreground">
                    <li>• <code className="text-destructive">int d; // elapsed time in days</code></li>
                    <li>• <code className="text-destructive">void Process(Data data)</code></li>
                    <li>• <code className="text-destructive">var list = new List{'<'}User{'>'}();</code></li>
                    <li>• <code className="text-destructive">bool flag = true;</code></li>
                  </ul>
                </div>
                <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 space-y-3">
                  <h4 className="font-bold text-emerald-600">✅ Clean Naming</h4>
                  <ul className="text-sm space-y-2 text-muted-foreground">
                    <li>• <code className="text-emerald-600">int elapsedTimeInDays;</code></li>
                    <li>• <code className="text-emerald-600">void ProcessOrder(Order order)</code></li>
                    <li>• <code className="text-emerald-600">var activeUsers = new List{'<'}User{'>'}();</code></li>
                    <li>• <code className="text-emerald-600">bool isOrderValid = true;</code></li>
                  </ul>
                </div>
              </div>

              <CodeSnippet
                title="Function Smallness & Single Purpose"
                language="typescript"
                code={`// ❌ Bad: Function does too many things
function handleForm(data: any) {
  validate(data);
  saveToDb(data);
  sendEmail(data);
  updateUI();
}

// ✅ Good: One thing per function
async function submitOrder(order: Order) {
  const validatedOrder = await validateOrder(order);
  const savedOrder = await saveOrderToDatabase(validatedOrder);
  notifyUserCompletion(savedOrder.id);
}`}
              />
            </div>
          </section>

          <Separator />

          {/* Chapter 3: SOLID Principles */}
          <section id="solid" className="scroll-mt-28 space-y-12">
            <div className="space-y-4">
              <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 3</Badge>
              <h2 className="text-4xl font-extrabold tracking-tight">SOLID Principles</h2>
              <p className="text-lg text-muted-foreground">Five design principles intended to make software designs more understandable, flexible, and maintainable.</p>
            </div>

            <div className="grid gap-6">
              {[
                { letter: "S", name: "Single Responsibility", desc: "A class should have one, and only one, reason to change." },
                { letter: "O", name: "Open/Closed", desc: "Software entities should be open for extension, but closed for modification." },
                { letter: "L", name: "Liskov Substitution", desc: "Derived classes must be substitutable for their base classes." },
                { letter: "I", name: "Interface Segregation", desc: "Clients should not be forced to depend on methods they do not use." },
                { letter: "D", name: "Dependency Inversion", desc: "Depend upon abstractions, not concretions." }
              ].map((principle, i) => (
                <div key={i} className="flex gap-6 p-6 rounded-3xl border border-border/50 bg-background/50 hover:border-primary/30 transition-colors">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center font-black text-3xl">
                    {principle.letter}
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-xl">{principle.name}</h4>
                    <p className="text-muted-foreground">{principle.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <CodeSnippet
              title="Dependency Inversion Example"
              language="typescript"
              code={`// Interface (Abstraction)
interface MessageService {
  send(message: string): void;
}

// Implementations (Details)
class EmailService implements MessageService {
  send(message: string) { /* send email */ }
}

// Client depends on Abstraction, not Detail
class NotificationManager {
  constructor(private service: MessageService) {}
  
  notify(msg: string) {
    this.service.send(msg);
  }
}`}
            />
          </section>

          <Separator />

          {/* Chapter 4: Code Smells */}
          <section id="smells" className="scroll-mt-28 space-y-12">
            <div className="space-y-4">
              <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 4</Badge>
              <h2 className="text-4xl font-extrabold tracking-tight">Code Smells</h2>
              <p className="text-lg text-muted-foreground">Signs that indicate your code might need refactoring.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-amber-500/5 border border-amber-500/20 space-y-4">
                <h4 className="font-bold flex items-center gap-2"><AlertTriangle className="h-5 w-5 text-amber-600" /> Common Smells</h4>
                <ul className="text-sm space-y-3 text-muted-foreground">
                  <li><strong>• Long Method:</strong> Functions larger than 20-30 lines.</li>
                  <li><strong>• Large Class:</strong> Classes trying to do too much.</li>
                  <li><strong>• Primitive Obsession:</strong> Using primitives for domain concepts (e.g., string for Email).</li>
                  <li><strong>• Shotgun Surgery:</strong> One change requires small changes to many classes.</li>
                  <li><strong>• Deep Nesting:</strong> More than 2 levels of if/loops.</li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 space-y-4">
                <h4 className="font-bold flex items-center gap-2"><Lightbulb className="h-5 w-5 text-emerald-600" /> Quick Fixes</h4>
                <ul className="text-sm space-y-3 text-muted-foreground">
                  <li><strong>• Extract Method:</strong> Break large functions into smaller ones.</li>
                  <li><strong>• Replace Temp with Query:</strong> Use a function instead of a local variable.</li>
                  <li><strong>• Guard Clauses:</strong> Use early returns to reduce nesting.</li>
                  <li><strong>• Value Objects:</strong> Create classes for domain concepts.</li>
                </ul>
              </div>
            </div>
          </section>

          <Separator />

          {/* Chapter 5: Error Handling */}
          <section id="error-handling" className="scroll-mt-28 space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 5</Badge>
              <h2 className="text-4xl font-extrabold tracking-tight">Error Handling</h2>
              <p className="text-lg text-muted-foreground">Handle errors gracefully without cluttering the business logic.</p>
            </div>

            <div className="space-y-8">
              <div className="p-6 rounded-2xl bg-blue-500/5 border border-blue-500/20">
                <h4 className="font-bold mb-4">Error Handling Principles</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Prefer Exceptions over Error Codes",
                    "Use meaningful error messages",
                    "Don't ignore caught exceptions",
                    "Handle errors at the right level",
                    "Create custom domain exceptions",
                    "Don't return null (return Empty/Optional)"
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <CodeSnippet
                title="Guard Clauses & Early Return"
                language="typescript"
                code={`// ❌ Deeply nested
function withdraw(amount: number) {
  if (amount > 0) {
    if (balance >= amount) {
      balance -= amount;
      return true;
    } else {
      throw new Error("Insufficient funds");
    }
  }
}

// ✅ Clean with Guard Clauses
function withdraw(amount: number) {
  if (amount <= 0) throw new InvalidAmountError();
  if (balance < amount) throw new InsufficientFundsError();

  balance -= amount;
  return true;
}`}
              />
            </div>
          </section>

          <Separator />

          {/* Chapter 6: Clean Testing */}
          <section id="testing" className="scroll-mt-28 space-y-12">
            <div className="space-y-4">
              <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 6</Badge>
              <h2 className="text-4xl font-extrabold tracking-tight">Clean Testing</h2>
              <p className="text-lg text-muted-foreground">Tests keep your code flexible, maintainable, and reusable.</p>
            </div>

            <div className="p-8 rounded-3xl bg-pink-500/5 border border-pink-500/10 space-y-6">
              <div className="flex items-center gap-3 text-pink-600">
                <div className="p-2 rounded-lg bg-pink-500/10">
                  <FlaskConical className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold">F.I.R.S.T. Principles</h3>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                {[
                  { l: "F", name: "Fast", desc: "Tests should run quickly." },
                  { l: "I", name: "Independent", desc: "Tests should not depend on each other." },
                  { l: "R", name: "Repeatable", desc: "Should work in any environment." },
                  { l: "S", name: "Self-Validating", desc: "Have a boolean outcome." },
                  { l: "T", name: "Timely", desc: "Written before production code." }
                ].map((item, i) => (
                  <div key={i} className="text-center space-y-2">
                    <div className="mx-auto w-10 h-10 rounded-full bg-pink-500 text-white flex items-center justify-center font-bold">{item.l}</div>
                    <h4 className="font-bold text-sm tracking-tight">{item.name}</h4>
                    <p className="text-[10px] text-muted-foreground leading-tight">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <CodeSnippet
              title="Readable Test Names (Given-When-Then)"
              language="typescript"
              code={`describe("Account", () => {
  it("should_throw_error_when_withdrawing_more_than_balance", () => {
    // Arrange (Given)
    const account = new Account(100);
    
    // Act (When) & Assert (Then)
    expect(() => account.withdraw(150)).toThrow(InsufficientFundsError);
  });
});`}
            />
          </section>

        </main>

        {/* Sidebar Mini ToC */}
        <aside className="lg:w-64 flex-shrink-0 hidden lg:block">
          <div className="sticky top-28 space-y-4">
            <div className="p-1 rounded-2xl bg-muted/50 border border-border/50">
              <div className="px-4 py-3 flex items-center gap-2 border-b border-border/50">
                <BookOpen className="h-4 w-4 text-primary" />
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Chapters</span>
              </div>
              <div className="p-2 space-y-1">
                {chapters.map((chapter) => (
                  <a
                    key={chapter.id}
                    href={`#${chapter.id}`}
                    className={`flex items-center gap-3 px-3 py-2 rounded-xl text-sm transition-all ${activeSection === chapter.id
                        ? "bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/20"
                        : "text-muted-foreground hover:bg-primary/5 hover:text-primary"
                      }`}
                  >
                    <chapter.icon className="h-4 w-4" />
                    {chapter.title.split('. ')[1]}
                  </a>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10">
              <h4 className="font-bold text-sm mb-2">Need Help?</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">Refer to the global standards for specific language implementations.</p>
            </div>
          </div>
        </aside>
      </div>
    </Layout>
  );
};

export default CleanCodeGuidelinePage;
