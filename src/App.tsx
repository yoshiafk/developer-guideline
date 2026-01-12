import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DotNetDeveloperGuidelinePage from './pages/DotNetDeveloperGuidelinePage';
import ReactDeveloperGuidelinePage from './pages/ReactDeveloperGuidelinePage';
import JavaDeveloperGuidelinePage from './pages/JavaDeveloperGuidelinePage';
import PythonDeveloperGuidelinePage from './pages/PythonDeveloperGuidelinePage';
import FlutterDeveloperGuidelinePage from './pages/FlutterDeveloperGuidelinePage';
import CleanArchitecturePage from './pages/CleanArchitecturePage';
import CodingStandardPage from './pages/CodingStandardPage';
import GitHubAxaUsagePage from './pages/GitHubAxaUsagePage';
import SearchResultsPage from './pages/SearchResultsPage';
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
      <Router basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dotnet-developer-guideline" element={<DotNetDeveloperGuidelinePage />} />
          <Route path="/react-developer-guideline" element={<ReactDeveloperGuidelinePage />} />
          <Route path="/java-developer-guideline" element={<JavaDeveloperGuidelinePage />} />
          <Route path="/python-developer-guideline" element={<PythonDeveloperGuidelinePage />} />
          <Route path="/flutter-developer-guideline" element={<FlutterDeveloperGuidelinePage />} />
          <Route path="/clean-architecture" element={<CleanArchitecturePage />} />
          <Route path="/coding-standard" element={<CodingStandardPage />} />
          <Route path="/github-axa-usage" element={<GitHubAxaUsagePage />} />
          <Route path="/search" element={<SearchResultsPage />} />
        </Routes>
      </Router>
      <Toaster />
    </TooltipProvider>
  );
}

export default App;
