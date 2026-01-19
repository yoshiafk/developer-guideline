import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import DocsSidebar from './DocsSidebar';
import Header from './Header';
import SkipToContent from './SkipToContent';
import ReadingProgress from './ReadingProgress';
import CommandPalette from './animate-ui/CommandPalette';

interface LayoutProps {
  children: React.ReactNode;
  showSidebar?: boolean;
  showReadingProgress?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, showSidebar = true, showReadingProgress = false }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const shouldShowSidebar = showSidebar && !isHomePage;
  const shouldShowProgress = showReadingProgress || (!isHomePage && shouldShowSidebar);

  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      {shouldShowProgress && <ReadingProgress />}
      <SkipToContent />
      <div data-pagefind-ignore>
        <Header />
      </div>

      {/* Command Palette / Search */}
      <CommandPalette
        isOpen={isSearchOpen}
        onOpenChange={setIsSearchOpen}
      />

      <div className="flex-1 items-start md:grid md:grid-cols-[240px_minmax(0,1fr)] lg:grid-cols-[260px_minmax(0,1fr)] xl:grid-cols-[280px_minmax(0,1fr)]">
        {shouldShowSidebar && (
          <aside
            className="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-[240px] shrink-0 md:sticky md:block lg:w-[260px] xl:w-[280px]"
            role="navigation"
            aria-label="Documentation navigation"
          >
            <div data-pagefind-ignore className="h-full">
              <DocsSidebar onSearchClick={() => setIsSearchOpen(true)} />
            </div>
          </aside>
        )}
        <main
          id="main-content"
          role="main"
          className={`relative py-6 lg:gap-10 lg:py-8 ${!shouldShowSidebar ? 'md:col-span-2' : ''}`}
          data-pagefind-body
        >
          <div className={`w-full min-w-0 ${!shouldShowSidebar ? 'px-4 md:px-8 lg:px-12' : 'px-3 md:px-4 lg:px-6'}`}>
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;