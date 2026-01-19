import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Code2, Menu, Search, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from './ThemeToggle';
import CommandPalette from './animate-ui/CommandPalette';
import DocsNavDropdown from './DocsNavDropdown';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';

// Mobile navigation items
const mobileNavigation = [
  {
    title: "Getting Started", items: [
      { title: "GitHub Workflow", href: "/github-axa-usage" },
      { title: "Coding Standards", href: "/coding-standard" },
    ]
  },
  {
    title: "Architecture", items: [
      { title: "Clean Code", href: "/clean-code-guideline" },
      { title: "Clean Architecture", href: "/clean-architecture" },
    ]
  },
  {
    title: "Backend", items: [
      { title: ".NET Development", href: "/dotnet-developer-guideline" },
      { title: "Java Development", href: "/java-developer-guideline" },
      { title: "Python Development", href: "/python-developer-guideline" },
    ]
  },
  {
    title: "Frontend & Mobile", items: [
      { title: "React Development", href: "/react-developer-guideline" },
      { title: "Flutter Development", href: "/flutter-developer-guideline" },
    ]
  },
  {
    title: "Cloud & FinOps", items: [
      { title: "FinOps Guide", href: "/finops-guideline" },
      { title: "AWS Architecture", href: "/aws-architecture-guideline" },
    ]
  },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard shortcut for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${isScrolled ? 'glass' : 'bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'
        }`}
      role="banner"
    >
      <div className="container flex h-16 items-center justify-between">
        {/* Left: Logo + Nav */}
        <div className="flex items-center gap-6">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 transition-opacity hover:opacity-80"
            aria-label="AII IT Playbook Home"
          >
            <div className="p-1.5 rounded-lg bg-primary/10">
              <Code2 className="h-5 w-5 text-primary" />
            </div>
            <span className="hidden font-bold text-foreground sm:inline-block">
              AII IT Playbook
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            <DocsNavDropdown />
          </nav>
        </div>

        {/* Mobile Menu Button */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-80">
            <SheetHeader>
              <SheetTitle>
                <Link to="/" className="flex items-center gap-2">
                  <Code2 className="h-5 w-5 text-primary" />
                  <span className="font-bold">AII IT Playbook</span>
                </Link>
              </SheetTitle>
            </SheetHeader>
            <ScrollArea className="my-4 h-[calc(100vh-8rem)]">
              <div className="space-y-6 py-4">
                {mobileNavigation.map((group) => (
                  <div key={group.title}>
                    <h4 className="mb-2 px-2 text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                      {group.title}
                    </h4>
                    <div className="space-y-1">
                      {group.items.map((item) => (
                        <Link
                          key={item.href}
                          to={item.href}
                          className={`block px-2 py-2 text-sm rounded-lg transition-colors ${location.pathname === item.href
                            ? 'bg-primary/10 text-primary font-medium'
                            : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                            }`}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </SheetContent>
        </Sheet>

        {/* Right: Search + Actions */}
        <div className="flex items-center gap-2">
          {/* Search Button */}
          <Button
            variant="ghost"
            onClick={() => setIsSearchOpen(true)}
            className="relative h-9 w-9 p-0 md:w-60 md:justify-start md:px-3 md:py-2 rounded-lg hover:bg-muted/30 transition-colors"
            aria-label="Search documentation"
          >
            <Search className="h-4 w-4 md:mr-2" />
            <span className="hidden md:inline-flex text-sm text-muted-foreground">
              Search docs...
            </span>
            <kbd className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 hidden h-5 select-none items-center gap-1 rounded bg-background px-1.5 font-mono text-[10px] font-medium md:flex border shadow-sm">
              <span className="text-xs">⌘</span>K
            </kbd>
          </Button>

          {/* Divider */}
          <div className="hidden md:block h-4 w-px bg-border" />

          {/* GitHub */}
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="rounded-full h-9 w-9"
            aria-label="View GitHub repository"
          >
            <a href="https://github.axa.com/aii" target="_blank" rel="noreferrer">
              <Github className="h-4 w-4" />
            </a>
          </Button>

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>
      </div>

      <CommandPalette isOpen={isSearchOpen} onOpenChange={setIsSearchOpen} />
    </header>
  );
};

export default Header;
