import React, { useEffect, useState } from 'react';
import { cn } from "@/lib/utils";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  contentRef: React.RefObject<HTMLElement | HTMLDivElement | null>;
  className?: string;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ contentRef, className = '' }) => {
  const [tocItems, setTocItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    if (!contentRef.current) return;

    // Support both h2 and h3 headings
    const headings = contentRef.current.querySelectorAll('h2[id], h3[id]');
    const items: TocItem[] = Array.from(headings).map((heading) => ({
      id: heading.id,
      text: heading.textContent || '',
      level: parseInt(heading.tagName.charAt(1)) // Extract 2 from H2, 3 from H3
    }));

    setTocItems(items);
  }, [contentRef]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-80px 0px -70% 0px', // Better detection range
        threshold: 0.5
      }
    );

    tocItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [tocItems]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = 64; // Updated header height
      const elementPosition = element.offsetTop - headerHeight - 20;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  if (tocItems.length === 0) return null;

  return (
    <aside
      className={cn(
        "sticky top-24 h-[calc(100vh-96px-32px)] overflow-y-auto p-4",
        "border-l border-border bg-background rounded-xl shadow-sm",
        className
      )}
    >
      <div className="mb-4">
        <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
          On This Page
        </h4>
      </div>
      <nav aria-label="Table of contents">
        <ul className="space-y-1">
          {tocItems.map((item) => (
            <li
              key={item.id}
              className={item.level === 3 ? 'pl-4' : ''}
            >
              <a
                href={`#${item.id}`}
                className={cn(
                  "block px-3 py-2 rounded-md text-sm transition-all duration-150",
                  "border-l-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                  item.level === 3 ? 'text-[13px]' : 'text-sm',
                  activeId === item.id
                    ? "border-primary bg-primary/10 text-primary font-semibold"
                    : "border-transparent text-muted-foreground hover:text-primary hover:bg-muted/50"
                )}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default TableOfContents;