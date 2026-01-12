import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '@/components/PageHero';
import Layout from '@/components/Layout';
import CodeSnippet from '@/components/CodeSnippet';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Atom, Layout as LayoutIcon, Zap, ShieldCheck, ChevronRight } from 'lucide-react';

const chapters = [
    { id: "introduction", title: "1. Introduction", icon: Atom },
    { id: "components", title: "2. Component Arch", icon: LayoutIcon },
    { id: "state", title: "3. State Management", icon: Zap },
    { id: "performance", title: "4. Performance", icon: ShieldCheck },
];

const ReactDeveloperGuidelinePage: React.FC = () => {
    return (
        <Layout showSidebar={true}>
            <PageHero
                title="React Development"
                subtitle="Standardized practices for building modern, scalable, and maintainable frontend applications at AII."
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Frontend & Mobile' },
                    { label: 'React' }
                ]}
            />

            <div className="container py-12 px-4 flex flex-col lg:flex-row gap-12">
                <main className="flex-1 min-w-0 space-y-16 animate-in-fade lg:max-w-4xl">
                    {/* Section 1: Introduction */}
                    <section id="introduction" className="space-y-6">
                        <div className="space-y-4">
                            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 1</Badge>
                            <h2 className="text-4xl font-extrabold tracking-tight">Introduction</h2>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                React is our primary choice for building dynamic user interfaces. These guidelines ensure consistency, performance, and accessibility across all AII web projects.
                            </p>
                        </div>
                    </section>

                    {/* Section 2: Component Standards */}
                    <section id="components" className="space-y-8">
                        <div className="space-y-4">
                            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 2</Badge>
                            <h2 className="text-4xl font-extrabold tracking-tight">Component Architecture</h2>
                            <p className="text-lg text-muted-foreground">
                                We follow a functional component approach with strictly typed props and a focus on atomic design principles.
                            </p>
                        </div>

                        <div className="grid gap-6">
                            <Card className="glass shadow-sm">
                                <CardContent className="pt-6">
                                    <h3 className="text-xl font-bold mb-4">Functional Components vs Classes</h3>
                                    <p className="mb-4">Always prefer Functional Components with Hooks over Class Components. This leads to cleaner, more testable code.</p>
                                    <CodeSnippet
                                        language="typescript"
                                        code={`interface UserProfileProps {
  name: string;
  role: 'admin' | 'user';
}

const UserProfile: React.FC<UserProfileProps> = ({ name, role }) => {
  return (
    <div className="p-4 border rounded-lg">
      <h2 className="font-bold">{name}</h2>
      <Badge>{role}</Badge>
    </div>
  );
};`}
                                    />
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    {/* Add more sections as needed */}
                    <section className="p-8 rounded-3xl bg-primary/5 border border-primary/10 text-center">
                        <h3 className="text-2xl font-bold mb-2 text-primary">Content in Progress</h3>
                        <p className="text-muted-foreground">Detailed guidelines for state management, testing, and performance optimization are being finalized by the architectural board.</p>
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

export default ReactDeveloperGuidelinePage;
