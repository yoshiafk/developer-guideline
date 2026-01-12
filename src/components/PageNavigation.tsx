import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PageLink {
    title: string;
    href: string;
}

interface PageNavigationProps {
    previous?: PageLink;
    next?: PageLink;
    className?: string;
}

/**
 * Page Navigation
 * Displays previous/next page links at the bottom of guideline pages
 */
const PageNavigation: React.FC<PageNavigationProps> = ({ previous, next, className }) => {
    if (!previous && !next) return null;

    return (
        <nav
            className={cn("flex items-center justify-between gap-4 py-8 border-t", className)}
            aria-label="Page navigation"
        >
            {previous ? (
                <Link
                    to={previous.href}
                    className="group flex-1 flex flex-col items-start gap-1 p-4 rounded-xl border hover:border-primary/20 hover:bg-primary/5 transition-all"
                >
                    <span className="flex items-center text-xs font-medium text-muted-foreground group-hover:text-primary transition-colors">
                        <ChevronLeft className="h-4 w-4 mr-1" />
                        Previous
                    </span>
                    <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {previous.title}
                    </span>
                </Link>
            ) : (
                <div className="flex-1" />
            )}

            {next ? (
                <Link
                    to={next.href}
                    className="group flex-1 flex flex-col items-end gap-1 p-4 rounded-xl border hover:border-primary/20 hover:bg-primary/5 transition-all text-right"
                >
                    <span className="flex items-center text-xs font-medium text-muted-foreground group-hover:text-primary transition-colors">
                        Next
                        <ChevronRight className="h-4 w-4 ml-1" />
                    </span>
                    <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {next.title}
                    </span>
                </Link>
            ) : (
                <div className="flex-1" />
            )}
        </nav>
    );
};

export default PageNavigation;
