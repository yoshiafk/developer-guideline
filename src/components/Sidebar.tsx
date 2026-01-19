import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
  BookOpen,
  Code2,
  Layers,
  GitBranch,
  Terminal,
  Home,
  Coffee,
  Atom,
  Smartphone,
  FileCode,
  Server,
  Wrench,
  ScanSearch,
  Sparkles,
  DollarSign,
  Cloud,
  ChevronRight
} from "lucide-react";

// Custom Python icon component
const PythonIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 2C6.5 2 6 4.5 6 6v2h6v1H5c-2 0-4 1.5-4 5s1.5 5 4 5h2v-2c0-2 1.5-4 4-4h4c2 0 3-1 3-3V6c0-2-1.5-4-6-4zm-2 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
    <path d="M12 22c5.5 0 6-2.5 6-4v-2h-6v-1h7c2 0 4-1.5 4-5s-1.5-5-4-5h-2v2c0 2-1.5 4-4 4H9c-2 0-3 1-3 3v4c0 2 1.5 4 6 4zm2-3a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
  </svg>
);

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> { }

const STORAGE_KEY = 'sidebar-expanded-groups';

export function Sidebar({ className }: SidebarProps) {
  const location = useLocation();

  const navigation = [
    {
      title: "General",
      items: [
        { title: "Home", href: "/", icon: Home },
        { title: "GitHub Workflow", href: "/github-axa-usage", icon: GitBranch },
        { title: "Global Coding Standards", href: "/coding-standard", icon: Terminal },
      ],
    },
    {
      title: "Architecture & Standards",
      items: [
        { title: "Clean Code", href: "/clean-code-guideline", icon: Sparkles },
        { title: "Clean Architecture", href: "/clean-architecture", icon: Layers },
      ],
    },
    {
      title: "Backend Guidelines",
      items: [
        { title: ".NET Development", href: "/dotnet-developer-guideline", icon: FileCode },
        { title: "Java Development", href: "/java-developer-guideline", icon: Coffee },
        { title: "Python Development", href: "/python-developer-guideline", icon: Code2 },
      ],
    },
    {
      title: "Frontend & Mobile",
      items: [
        { title: "React Development", href: "/react-developer-guideline", icon: Atom },
        { title: "Flutter Development", href: "/flutter-developer-guideline", icon: Smartphone },
      ],
    },
    {
      title: "DevOps & CI/CD",
      items: [
        { title: "OpenShift Platform", href: "/openshift-guideline", icon: Server },
        { title: "Jenkins CI/CD", href: "/jenkins-guideline", icon: Wrench },
        { title: "SonarQube", href: "/sonarqube-guideline", icon: ScanSearch },
      ],
    },
    {
      title: "Cloud & Cost Management",
      items: [
        { title: "FinOps Guide", href: "/finops-guideline", icon: DollarSign },
        { title: "AWS Architecture", href: "/aws-architecture-guideline", icon: Cloud },
      ],
    },
  ];

  // Find which group contains the active page
  const findActiveGroup = () => {
    for (const group of navigation) {
      if (group.items.some(item => item.href === location.pathname)) {
        return group.title;
      }
    }
    return navigation[0]?.title || 'General';
  };

  // Initialize expanded groups from localStorage or default to active group
  const [expandedGroups, setExpandedGroups] = useState<string[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch {
          return [findActiveGroup()];
        }
      }
    }
    return [findActiveGroup()];
  });

  // Persist to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(expandedGroups));
  }, [expandedGroups]);

  // Auto-expand group containing active page
  useEffect(() => {
    const activeGroup = findActiveGroup();
    if (!expandedGroups.includes(activeGroup)) {
      setExpandedGroups(prev => [...prev, activeGroup]);
    }
  }, [location.pathname]);

  const toggleGroup = (groupTitle: string) => {
    setExpandedGroups(prev =>
      prev.includes(groupTitle)
        ? prev.filter(g => g !== groupTitle)
        : [...prev, groupTitle]
    );
  };

  return (
    <nav
      className={cn("glass-sidebar h-full rounded-r-2xl", className)}
      aria-label="Main navigation"
    >
      <div className="space-y-2 py-6">
        {navigation.map((group) => {
          const isExpanded = expandedGroups.includes(group.title);
          const hasActiveItem = group.items.some(item => location.pathname === item.href);

          return (
            <Collapsible
              key={group.title}
              open={isExpanded}
              onOpenChange={() => toggleGroup(group.title)}
              className="px-4"
            >
              <CollapsibleTrigger
                className={cn(
                  "flex w-full items-center justify-between gap-2 px-2 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-colors text-left",
                  "hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                  hasActiveItem ? "text-primary" : "text-muted-foreground/60"
                )}
                aria-expanded={isExpanded}
              >
                <span className="flex-1 text-left">{group.title}</span>
                <ChevronRight
                  className={cn(
                    "h-4 w-4 shrink-0 transition-transform duration-200",
                    isExpanded && "rotate-90"
                  )}
                />
              </CollapsibleTrigger>
              <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-collapse data-[state=open]:animate-expand">
                <ul className="space-y-1 mt-2" role="list">
                  {group.items.map((item) => {
                    const isActive = location.pathname === item.href;
                    return (
                      <li key={item.href}>
                        <Button
                          asChild
                          variant="ghost"
                          className={cn(
                            "w-full justify-start transition-all duration-200 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                            isActive
                              ? "glass-card text-primary font-bold shadow-sm"
                              : "text-muted-foreground hover:bg-primary/5 hover:text-primary"
                          )}
                        >
                          <Link
                            to={item.href}
                            aria-current={isActive ? "page" : undefined}
                          >
                            <item.icon className={cn("mr-2 h-4 w-4", isActive ? "text-primary" : "text-muted-foreground/60")} />
                            {item.title}
                          </Link>
                        </Button>
                      </li>
                    );
                  })}
                </ul>
              </CollapsibleContent>
            </Collapsible>
          );
        })}
      </div>
    </nav>
  );
}

export default Sidebar;
