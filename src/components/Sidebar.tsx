import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Code2,
  Layout as LayoutIcon,
  GitBranch,
  Terminal,
  Home
} from "lucide-react";

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
      ],
    },
    {
      title: "Backend Guidelines",
      items: [
        { title: ".NET Development", href: "/dotnet-developer-guideline", icon: BookOpen },
        { title: "Java Development", href: "/java-developer-guideline", icon: Code2 },
        { title: "Python Development", href: "/python-developer-guideline", icon: Code2 },
      ],
    },
    {
      title: "Frontend & Mobile",
      items: [
        { title: "React Development", href: "/react-developer-guideline", icon: Code2 },
        { title: "Flutter Development", href: "/flutter-developer-guideline", icon: Code2 },
        { title: "Clean Architecture", href: "/clean-architecture", icon: LayoutIcon },
      ],
    },
  ];

  return (
    <div className={cn("glass-sidebar h-full rounded-r-2xl", className)}>
      <div className="space-y-6 py-6">
        {navigation.map((group) => (
          <div key={group.title} className="px-4 py-2">
            <h2 className="mb-3 px-2 text-xs font-bold uppercase tracking-widest text-muted-foreground/60">
              {group.title}
            </h2>
            <div className="space-y-1">
              {group.items.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Button
                    key={item.href}
                    asChild
                    variant="ghost"
                    className={cn(
                      "w-full justify-start transition-all duration-200",
                      isActive
                        ? "glass-card text-primary font-bold shadow-sm"
                        : "text-muted-foreground hover:bg-primary/5 hover:text-primary"
                    )}
                  >
                    <Link to={item.href}>
                      <item.icon className={cn("mr-2 h-4 w-4", isActive ? "text-primary" : "text-muted-foreground/60")} />
                      {item.title}
                    </Link>
                  </Button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
