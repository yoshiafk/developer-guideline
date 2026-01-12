import React from 'react';

/**
 * Skip to Content Link
 * Accessibility feature that allows keyboard users to bypass navigation
 * and jump directly to main content.
 */
const SkipToContent: React.FC = () => {
    return (
        <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 transition-all"
        >
            Skip to content
        </a>
    );
};

export default SkipToContent;
