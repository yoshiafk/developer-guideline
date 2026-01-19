import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Ctrl+K or Cmd+K for search
      if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
        event.preventDefault();
        const searchInput = document.querySelector('input[placeholder*="Search"]') as HTMLInputElement;
        if (searchInput) {
          searchInput.focus();
          searchInput.select();
        }
      }

      // Escape key to close mobile menu
      if (event.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    // Smooth scrolling for anchor links
    const handleAnchorClick = (event: Event) => {
      const target = event.target as HTMLElement;
      const link = target.closest('a') as HTMLAnchorElement;

      if (link && link.getAttribute('href')?.startsWith('#')) {
        event.preventDefault();
        const targetId = link.getAttribute('href')!.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          const headerHeight = 64; // Header height from layout
          const targetPosition = targetElement.offsetTop - headerHeight - 20;

          window.scrollTo({
            top: Math.max(0, targetPosition),
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleAnchorClick);
    };
  }, [isMobileMenuOpen]);

  return (
    <TooltipProvider>
      <ScrollToTop />
      <Outlet />
      <Toaster />
    </TooltipProvider>
  );
}

export default App;
