'use client';

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import {
    Home,
    GitBranch,
    Terminal,
    Sparkles,
    Layers,
    FileCode,
    Coffee,
    Code2,
    Atom,
    Smartphone,
    Server,
    Wrench,
    ScanSearch,
    DollarSign,
    Cloud,
    Search,
    Command
} from 'lucide-react';

// Navigation data structure
const navigation = [
    {
        title: 'General',
        items: [
            { title: 'Home', href: '/', icon: Home },
            { title: 'GitHub Workflow', href: '/github-axa-usage', icon: GitBranch },
            { title: 'Global Standards', href: '/coding-standard', icon: Terminal },
        ],
    },
    {
        title: 'Architecture',
        items: [
            { title: 'Clean Code', href: '/clean-code-guideline', icon: Sparkles },
            { title: 'Clean Architecture', href: '/clean-architecture', icon: Layers },
        ],
    },
    {
        title: 'Backend',
        items: [
            { title: '.NET Development', href: '/dotnet-developer-guideline', icon: FileCode },
            { title: 'Java Development', href: '/java-developer-guideline', icon: Coffee },
            { title: 'Python Development', href: '/python-developer-guideline', icon: Code2 },
        ],
    },
    {
        title: 'Frontend & Mobile',
        items: [
            { title: 'React Development', href: '/react-developer-guideline', icon: Atom },
            { title: 'Flutter Development', href: '/flutter-developer-guideline', icon: Smartphone },
        ],
    },
    {
        title: 'DevOps & Platform',
        items: [
            { title: 'OpenShift Platform', href: '/openshift-guideline', icon: Server },
            { title: 'Jenkins CI/CD', href: '/jenkins-guideline', icon: Wrench },
            { title: 'SonarQube', href: '/sonarqube-guideline', icon: ScanSearch },
            { title: 'Terraform IaC', href: '/terraform-guideline', icon: Terminal },
        ],
    },
    {
        title: 'Cloud & Cost',
        items: [
            { title: 'Cloud Computing 101', href: '/cloud-computing-guideline', icon: Layers },
            { title: 'AWS Architecture', href: '/aws-architecture-guideline', icon: Cloud },
            { title: 'FinOps Guide', href: '/finops-guideline', icon: DollarSign },
        ],
    },
];

interface DocsSidebarProps {
    className?: string;
    onSearchClick?: () => void;
}

// Section header component
const SectionHeader: React.FC<{ title: string }> = ({ title }) => (
    <h3 className="px-3 pt-6 pb-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/50">
        {title}
    </h3>
);

// Navigation item component
const NavItem: React.FC<{
    href: string;
    icon: React.ElementType;
    isActive: boolean;
    children: React.ReactNode;
}> = ({ href, icon: Icon, isActive, children }) => (
    <Link
        to={href}
        className={cn(
            'group relative flex items-center gap-3 px-3 py-2 text-sm transition-all duration-150',
            'hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset',
            isActive
                ? 'bg-primary/5 text-primary font-medium'
                : 'text-muted-foreground hover:text-foreground'
        )}
        aria-current={isActive ? 'page' : undefined}
    >
        {/* Left border indicator */}
        <motion.span
            className={cn(
                'absolute left-0 top-0 bottom-0 w-0.5 rounded-r-full',
                isActive ? 'bg-primary' : 'bg-transparent group-hover:bg-muted-foreground/20'
            )}
            initial={false}
            animate={{
                opacity: isActive ? 1 : 0,
                scaleY: isActive ? 1 : 0.5,
            }}
            transition={{ duration: 0.15 }}
        />

        <Icon className={cn(
            'h-4 w-4 shrink-0 transition-colors',
            isActive ? 'text-primary' : 'text-muted-foreground/60 group-hover:text-muted-foreground'
        )} />

        <span className="truncate">{children}</span>
    </Link>
);

// Search button component
const SearchButton: React.FC<{ onClick?: (() => void) | undefined }> = ({ onClick }) => (
    <button
        onClick={onClick}
        className={cn(
            'flex w-full items-center gap-3 px-3 py-2.5 text-sm',
            'text-muted-foreground hover:text-foreground',
            'bg-muted/30 hover:bg-muted/50 rounded-lg',
            'border border-border/50',
            'transition-all duration-150',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary'
        )}
    >
        <Search className="h-4 w-4 shrink-0" />
        <span className="flex-1 text-left">Search docs...</span>
        <kbd className="hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground/70 bg-background rounded border border-border/50">
            <Command className="h-2.5 w-2.5" />
            <span>K</span>
        </kbd>
    </button>
);

export function DocsSidebar({ className, onSearchClick }: DocsSidebarProps) {
    const location = useLocation();

    return (
        <nav
            className={cn(
                'flex flex-col h-full bg-background/95 backdrop-blur-sm',
                'border-r border-border/50',
                className
            )}
            aria-label="Documentation navigation"
        >
            {/* Search Header */}
            <div className="p-4 border-b border-border/50">
                <SearchButton onClick={onSearchClick} />
            </div>

            {/* Navigation Content */}
            <div className="flex-1 overflow-y-auto py-2">
                {navigation.map((section, sectionIndex) => (
                    <div key={section.title}>
                        <SectionHeader title={section.title} />
                        <ul role="list" className="space-y-0.5">
                            {section.items.map((item) => {
                                const isActive = location.pathname === item.href;
                                return (
                                    <li key={item.href}>
                                        <NavItem
                                            href={item.href}
                                            icon={item.icon}
                                            isActive={isActive}
                                        >
                                            {item.title}
                                        </NavItem>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-border/50">
                <p className="text-[10px] text-muted-foreground/50 text-center">
                    AII IT Playbook v1.0
                </p>
            </div>
        </nav>
    );
}

export default DocsSidebar;
