import React from 'react';
import { ChevronRight, Home, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  subtitle: string;
  breadcrumbs: Breadcrumb[];
  readingTime?: number; // in minutes
}

const PageHero: React.FC<PageHeroProps> = ({ title, subtitle, breadcrumbs, readingTime }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-12 lg:pt-12 lg:pb-16">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(35%_35%_at_50%_0%,rgba(0,51,160,0.06)_0%,transparent_100%)]" />

      <div className="container px-4">
        <nav className="flex mb-4 items-center gap-2 text-sm font-medium text-muted-foreground animate-in-fade" aria-label="Breadcrumb">
          {breadcrumbs.map((crumb, index) => (
            <React.Fragment key={crumb.label}>
              {index > 0 && <ChevronRight className="h-4 w-4 opacity-50" />}
              {crumb.href ? (
                <Link to={crumb.href} className="hover:text-primary transition-colors flex items-center">
                  {crumb.label === 'Home' ? <Home className="h-4 w-4" /> : crumb.label}
                </Link>
              ) : (
                <span className="text-foreground font-bold">{crumb.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        <div className="max-w-[800px] space-y-3 animate-in-fade">
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl text-gradient">
              {title}
            </h1>
            {readingTime && (
              <Badge variant="secondary" className="flex items-center gap-1 text-xs">
                <Clock className="h-3 w-3" />
                {readingTime} min read
              </Badge>
            )}
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {subtitle}
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
};

export default PageHero;