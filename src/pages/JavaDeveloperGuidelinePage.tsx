import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '@/components/PageHero';
import Layout from '@/components/Layout';
import CodeSnippet from '@/components/CodeSnippet';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Coffee, Server, ShieldCheck, Zap, ChevronRight } from 'lucide-react';

const chapters = [
    { id: "introduction", title: "1. Introduction", icon: Coffee },
    { id: "spring-boot", title: "2. Spring Boot Standards", icon: Zap },
    { id: "database", title: "3. Persistence & DB", icon: Server },
    { id: "security", title: "4. Security Patterns", icon: ShieldCheck },
];

const JavaDeveloperGuidelinePage: React.FC = () => {
    return (
        <Layout showSidebar={true}>
            <PageHero
                title="Java Development"
                subtitle="Standardized practices for building robust and scalable backend services using Java and Spring Boot."
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Backend Guidelines' },
                    { label: 'Java' }
                ]}
            />

            <div className="container py-12 px-4 flex flex-col lg:flex-row gap-12">
                <main className="flex-1 min-w-0 space-y-16 animate-in-fade lg:max-w-4xl">
                    <section id="introduction" className="space-y-6">
                        <div className="space-y-4">
                            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 1</Badge>
                            <h2 className="text-4xl font-extrabold tracking-tight">Introduction</h2>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                Java is used for high-performance, enterprise-grade backend services at AII. We primarily utilize Spring Boot to accelerate development while maintaining high standards.
                            </p>
                        </div>
                    </section>

                    <section id="spring-boot" className="space-y-8">
                        <div className="space-y-4">
                            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">Chapter 2</Badge>
                            <h2 className="text-4xl font-extrabold tracking-tight">Spring Boot Standards</h2>
                            <p className="text-lg text-muted-foreground">
                                Follow standard Spring boot starter patterns and ensure proper dependency management.
                            </p>
                        </div>

                        <CodeSnippet
                            language="java"
                            code={`@RestController
@RequestMapping("/api/v1/users")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @GetMapping("/{id}")
    public ResponseEntity<UserResponse> getUser(@PathVariable UUID id) {
        return ResponseEntity.ok(userService.findById(id));
    }
}`}
                        />
                    </section>

                    <section className="p-8 rounded-3xl bg-primary/5 border border-primary/10 text-center">
                        <h3 className="text-2xl font-bold mb-2 text-primary">Content in Progress</h3>
                        <p className="text-muted-foreground">Detailed guidelines for Hibernate, security configurations, and JUnit testing standards are being finalized.</p>
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
        </Layout >
    );
};

export default JavaDeveloperGuidelinePage;
