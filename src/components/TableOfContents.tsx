import React, { useEffect, useState } from 'react';

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
      className={className}
      style={{
        position: 'sticky',
        top: '96px',
        height: 'calc(100vh - 96px - 32px)',
        overflowY: 'auto',
        padding: '16px',
        borderLeft: '1px solid #E5E7EB',
        backgroundColor: '#FFFFFF',
        borderRadius: '12px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}
    >
      <div style={{ marginBottom: '16px' }}>
        <h4 style={{
          fontSize: '12px',
          fontWeight: 600,
          color: '#9CA3AF',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          marginBottom: '12px',
          margin: 0
        }}>
          On This Page
        </h4>
      </div>
      <nav aria-label="Table of contents">
        <ul style={{
          listStyle: 'none',
          padding: 0,
          margin: 0
        }}>
          {tocItems.map((item) => (
            <li 
              key={item.id}
              style={{
                marginBottom: '4px',
                paddingLeft: item.level === 3 ? '16px' : '0'
              }}
            >
              <a
                href={`#${item.id}`}
                style={{
                  display: 'block',
                  color: activeId === item.id ? '#00008F' : '#4B5563',
                  fontSize: item.level === 3 ? '13px' : '14px',
                  fontWeight: activeId === item.id ? 600 : 400,
                  padding: '8px 12px',
                  borderLeft: activeId === item.id ? '2px solid #00008F' : '2px solid transparent',
                  backgroundColor: activeId === item.id ? '#EFF6FF' : 'transparent',
                  textDecoration: 'none',
                  borderRadius: '6px',
                  transition: 'all 150ms ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  if (activeId !== item.id) {
                    e.currentTarget.style.color = '#00008F';
                    e.currentTarget.style.backgroundColor = '#F9FAFB';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeId !== item.id) {
                    e.currentTarget.style.color = '#4B5563';
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
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