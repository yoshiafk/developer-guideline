import React, { useState, useEffect } from 'react';
import { LucideIcon, PieChart } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Chapter {
    id: string;
    title: string;
    icon: LucideIcon;
}

interface OnThisPageProps {
    chapters: Chapter[];
    className?: string;
}

/**
 * OnThisPage Component
 * A premium sidebar navigation for guideline pages that tracks active sections
 * as the user scrolls.
 */
const OnThisPage: React.FC<OnThisPageProps> = ({ chapters, className }) => {
    const [activeSection, setActiveSection] = useState(chapters[0]?.id || "");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visibleEntries = entries.filter(entry => entry.isIntersecting);
                if (visibleEntries.length > 0) {
                    const mostVisible = visibleEntries.reduce((prev, current) => {
                        if (current.intersectionRatio > prev.intersectionRatio) {
                            return current;
                        }
                        if (current.intersectionRatio === prev.intersectionRatio) {
                            // If intersection ratios are equal, prefer the one closer to the top
                            return (current.boundingClientRect.top < prev.boundingClientRect.top) ? current : prev;
                        }
                        return prev;
                    });
                    setActiveSection(mostVisible.target.id);
                }
            },
            {
                threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
                rootMargin: "-10% 0px -70% 0px"
            }
        );

        chapters.forEach((chapter) => {
            const el = document.getElementById(chapter.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [chapters]);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            const offset = 100; // Account for sticky header
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            // Update URL hash without scrolling
            window.history.pushState(null, '', `#${id}`);
        }
    };

    return (
        <aside className={cn("lg:w-64 flex-shrink-0 hidden lg:block", className)}>
            <div className="sticky top-28 z-10 space-y-4">
                <div className="p-1 rounded-[2rem] bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] backdrop-blur-sm overflow-hidden">
                    <div className="px-5 py-4 flex items-center gap-2.5">
                        <PieChart className="h-5 w-5 text-blue-600 dark:text-blue-500" />
                        <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-slate-400 dark:text-slate-500">On this page</span>
                    </div>
                    <div className="p-2 space-y-1.5 pb-3">
                        {chapters.map((chapter) => {
                            const isActive = activeSection === chapter.id;
                            // Extract title without number prefix if it exists (e.g. "1. Overview" -> "Overview")
                            const displayTitle = chapter.title.includes('.')
                                ? chapter.title.split('. ').slice(1).join('. ')
                                : chapter.title;

                            return (
                                <a
                                    key={chapter.id}
                                    href={`#${chapter.id}`}
                                    onClick={(e) => scrollToSection(e, chapter.id)}
                                    className={cn(
                                        "flex items-center gap-3.5 px-4 py-3 rounded-2xl text-[14px] font-medium transition-all duration-300 ease-out group",
                                        isActive
                                            ? "bg-blue-600 text-white shadow-[0_10px_20px_rgba(37,99,235,0.25)] dark:shadow-[0_10px_20px_rgba(37,99,235,0.15)] scale-[1.02]"
                                            : "text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-slate-200"
                                    )}
                                >
                                    <chapter.icon className={cn(
                                        "h-5 w-5 shrink-0 transition-colors duration-300",
                                        isActive ? "text-white" : "text-slate-400 dark:text-slate-500 group-hover:text-slate-600 dark:group-hover:text-slate-400"
                                    )} />
                                    <span className="truncate">{displayTitle}</span>
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default OnThisPage;
