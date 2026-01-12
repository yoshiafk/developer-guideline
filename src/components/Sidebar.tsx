import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
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
  FileCode
} from "lucide-react";

// Custom Python icon component
const PythonIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 2C6.5 2 6 4.5 6 6v2h6v1H5c-2 0-4 1.5-4 5s1.5 5 4 5h2v-2c0-2 1.5-4 4-4h4c2 0 3-1 3-3V6c0-2-1.5-4-6-4zm-2 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
    <path d="M12 22c5.5 0 6-2.5 6-4v-2h-6v-1h7c2 0 4-1.5 4-5s-1.5-5-4-5h-2v2c0 2-1.5 4-4 4H9c-2 0-3 1-3 3v4c0 2 1.5 4 6 4zm2-3a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
  </svg>
);

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> { }

export function Sidebar({ className }: SidebarProps) {
  const location = useLocation();

  const navigation = [
    {
      title: "General",
      items: [
        { title: "Home", href: "/", icon: Home },
        { title: "GitHub Workflow", href: "/github-axa-usage", icon: GitBranch },
        { title: "Global Coding Standards", href: "/coding-standard", icon: Terminal },
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
  ];

  return (
    <nav
      className={cn("glass-sidebar h-full rounded-r-2xl", className)}
      aria-label="Main navigation"
    >
      <div className="space-y-6 py-6">
        {navigation.map((group) => (
          <div key={group.title} className="px-4 py-2">
            <h2 className="mb-3 px-2 text-xs font-bold uppercase tracking-widest text-muted-foreground/60">
              {group.title}
            </h2>
            <ul className="space-y-1" role="list">
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
          </div>
        ))}
      </div>
    </nav>
  );
}

export default Sidebar;
