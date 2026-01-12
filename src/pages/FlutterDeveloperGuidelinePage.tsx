import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '@/components/PageHero';
import Layout from '@/components/Layout';
import CodeSnippet from '@/components/CodeSnippet';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Zap, Layers, ShieldCheck, ChevronRight } from 'lucide-react';

const chapters = [
    { id: "introduction", title: "1. Introduction", icon: Smartphone },
    { id: "state-management", title: "2. State Management", icon: Zap },
    { id: "architecture", title: "3. Architecture", icon: Layers },
];

const FlutterDeveloperGuidelinePage: React.FC = () => {
    return (
        <Layout showSidebar={true}>
            <PageHero
                title="Flutter Mobile"
                subtitle="Standardized practices for building cross-platform mobile applications with Flutter and Dart."
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Frontend & Mobile' },
                    { label: 'Flutter' }
                ]}
            />

            <div className="container py-12 px-4 flex flex-col lg:flex-row gap-12">
                <main className="flex-1 min-w-0 space-y-16 animate-in-fade lg:max-w-4xl">
                    <section id="introduction" className="space-y-6">
                        <div className="space-y-4">
                            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 1</Badge>
                            <h2 className="text-4xl font-extrabold tracking-tight">Introduction</h2>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                Flutter allows us to maintain a single codebase for both iOS and Android while ensuring high-quality, native performance and premium UI/UX.
                            </p>
                        </div>
                    </section>

                    <section id="state-management" className="space-y-8">
                        <div className="space-y-4">
                            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 2</Badge>
                            <h2 className="text-4xl font-extrabold tracking-tight">State Management</h2>
                            <p className="text-lg text-muted-foreground">
                                We primarily use BLoC or Provider depending on the complexity of the application state.
                            </p>
                        </div>

                        <CodeSnippet
                            language="dart"
                            code={`class CounterProvider with ChangeNotifier {
  int _count = 0;
  int get count => _count;

  void increment() {
    _count++;
    notifyListeners();
  }
}`}
                        />
                    </section>

                    <section className="p-8 rounded-3xl bg-primary/5 border border-primary/10 text-center">
                        <h3 className="text-2xl font-bold mb-2 text-primary">Content in Progress</h3>
                        <p className="text-muted-foreground">Detailed guidelines for Riverpod, mobile-first design systems, and integration testing for Flutter are being finalized.</p>
                    </section>
                </main>

                {/* Right Side ToC */}
                <aside className="lg:w-64 shrink-0 h-[calc(100vh-8rem)] sticky top-24 hidden xl:block overflow-y-auto pl-4 border-l">
                    <div className="space-y-1 pb-12">
                        <h4 className="text-[10px] font-bold mb-6 px-3 text-muted-foreground/60 uppercase tracking-[0.2em]">On this page</h4>
                        {chapters.map((chapter) => (
                            <a
                                key={chapter.id}
                                href={`#${chapter.id}`}
                                className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-muted-foreground hover:text-foreground transition-all"
                            >
                                <chapter.icon className="h-3.5 w-3.5 shrink-0 text-muted-foreground/40" />
                                {chapter.title}
                            </a>
                        ))}
                    </div>
                </aside>
            </div>
        </Layout>
    );
};

export default FlutterDeveloperGuidelinePage;
