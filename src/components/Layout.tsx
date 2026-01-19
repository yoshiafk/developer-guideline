import React from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import SkipToContent from './SkipToContent';
import ReadingProgress from './ReadingProgress';
import { ScrollArea } from "@/components/ui/scroll-area";

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

  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      {shouldShowProgress && <ReadingProgress />}
      <SkipToContent />
      <div data-pagefind-ignore>
        <Header />
      </div>
      <div className="flex-1 items-start md:grid md:grid-cols-[240px_minmax(0,1fr)] lg:grid-cols-[260px_minmax(0,1fr)] xl:grid-cols-[280px_minmax(0,1fr)]">
        {shouldShowSidebar && (
          <aside
            className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block"
            role="navigation"
            aria-label="Documentation navigation"
          >
            <div data-pagefind-ignore>
              <ScrollArea className="h-full py-6 pr-3 lg:py-8 lg:pr-4">
                <Sidebar />
              </ScrollArea>
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