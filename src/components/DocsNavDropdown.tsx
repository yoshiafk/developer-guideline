import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { ChevronDown, FileCode, Coffee, Code2, Atom, Smartphone, GitBranch, Terminal, Layers, Server, Wrench, ScanSearch } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavItem {
    title: string;
    href: string;
    icon: React.ElementType;
    description?: string;
}

interface NavGroup {
    title: string;
    items: NavItem[];
}

const navigation: NavGroup[] = [
    {
        title: "Getting Started",
        items: [
            { title: "GitHub Workflow", href: "/github-axa-usage", icon: GitBranch, description: "PR standards & branching" },
            { title: "Coding Standards", href: "/coding-standard", icon: Terminal, description: "Global conventions" },
            { title: "Clean Architecture", href: "/clean-architecture", icon: Layers, description: "DDD patterns" },
        ],
    },
    {
        title: "Backend",
        items: [
            { title: ".NET Development", href: "/dotnet-developer-guideline", icon: FileCode, description: "C# & ASP.NET Core" },
            { title: "Java Development", href: "/java-developer-guideline", icon: Coffee, description: "Spring Boot" },
            { title: "Python Development", href: "/python-developer-guideline", icon: Code2, description: "FastAPI & AI" },
        ],
    },
    {
        title: "Frontend & Mobile",
        items: [
            { title: "React Development", href: "/react-developer-guideline", icon: Atom, description: "Modern React" },
            { title: "Flutter Development", href: "/flutter-developer-guideline", icon: Smartphone, description: "Cross-platform" },
        ],
    },
    {
        title: "DevOps & CI/CD",
        items: [
            { title: "OpenShift Platform", href: "/openshift-guideline", icon: Server, description: "Container platform" },
            { title: "Jenkins CI/CD", href: "/jenkins-guideline", icon: Wrench, description: "Build & deploy" },
            { title: "SonarQube", href: "/sonarqube-guideline", icon: ScanSearch, description: "Code quality" },
        ],
    },
];

const DocsNavDropdown: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className="relative"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <button
                className={cn(
                    "flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                    "hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                    isOpen ? "text-foreground" : "text-muted-foreground"
                )}
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-haspopup="true"
            >
                Docs
                <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", isOpen && "rotate-180")} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className="absolute left-0 top-full pt-2 z-50"
                    >
                        <div className="w-[700px] glass rounded-2xl shadow-2xl border p-4 grid grid-cols-4 gap-4">
                            {navigation.map((group) => (
                                <div key={group.title} className="space-y-2">
                                    <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide px-2">
                                        {group.title}
                                    </h4>
                                    <ul className="space-y-1">
                                        {group.items.map((item) => (
                                            <li key={item.href}>
                                                <Link
                                                    to={item.href}
                                                    onClick={() => setIsOpen(false)}
                                                    className={cn(
                                                        "flex items-start gap-3 p-2 rounded-lg transition-colors",
                                                        "hover:bg-primary/5 focus-visible:bg-primary/5 focus-visible:outline-none group"
                                                    )}
                                                >
                                                    <div className="mt-0.5 p-1.5 rounded-md bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                                        <item.icon className="h-3.5 w-3.5" />
                                                    </div>
                                                    <div className="space-y-0.5">
                                                        <div className="text-sm font-medium text-foreground">{item.title}</div>
                                                        {item.description && (
                                                            <div className="text-xs text-muted-foreground">{item.description}</div>
                                                        )}
                                                    </div>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default DocsNavDropdown;
