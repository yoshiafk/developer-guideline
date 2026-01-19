import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Command, FileText, ChevronRight, CornerDownLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

interface CommandPaletteProps {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
}

import { usePagefind, PagefindResult } from '../../hooks/usePagefind';

/**
 * CommandPalette component that provides a modern, animated search interface.
 */
const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onOpenChange }) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<PagefindResult[]>([]);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const { search, loading, isReady } = usePagefind();
    const navigate = useNavigate();

    useEffect(() => {
        const performSearch = async () => {
            if (query.trim().length > 1) {
                const searchResults = await search(query);
                setResults(searchResults);
                setSelectedIndex(0);
            } else {
                setResults([]);
                setSelectedIndex(0);
            }
        };

        const timeoutId = setTimeout(performSearch, 150);
        return () => clearTimeout(timeoutId);
    }, [query, search]);

    const handleSelect = (href: string) => {
        onOpenChange(false);
        navigate(href);
        setQuery('');
        setResults([]);
        setSelectedIndex(0);
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isOpen) return;

            const totalResults = results.length;
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                setSelectedIndex(prev => (prev + 1) % (totalResults || 1));
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                setSelectedIndex(prev => (prev - 1 + (totalResults || 1)) % (totalResults || 1));
            } else if (e.key === 'Enter') {
                e.preventDefault();
                if (totalResults > 0 && selectedIndex >= 0 && selectedIndex < totalResults) {
                    const selectedResult = results[selectedIndex];
                    if (selectedResult) {
                        handleSelect(selectedResult.url);
                    }
                } else if (query.trim()) {
                    handleSelect(`/search?q=${encodeURIComponent(query)}`);
                }
            } else if (e.key === 'Escape') {
                onOpenChange(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, results, selectedIndex, query]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[10vh] px-4 pointer-events-none">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-background/80 backdrop-blur-sm pointer-events-auto"
                        onClick={() => onOpenChange(false)}
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-2xl bg-card border border-border shadow-2xl rounded-2xl overflow-hidden pointer-events-auto"
                    >
                        <div className="flex items-center px-4 py-4 border-b border-border/50">
                            <Search className="h-5 w-5 text-muted-foreground mr-3" />
                            <input
                                autoFocus
                                placeholder={isReady ? "Type a command or search documentation..." : "Initializing search engine..."}
                                className="flex-1 bg-transparent border-none outline-none focus:ring-0 text-lg placeholder:text-muted-foreground"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                disabled={!isReady}
                            />
                            <div className="flex items-center gap-1.5 ml-2">
                                {loading && <div className="animate-spin h-4 w-4 border-2 border-primary border-t-transparent rounded-full mr-2" />}
                                <kbd className="hidden sm:inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
                                    ESC
                                </kbd>
                            </div>
                        </div>

                        <div className="max-h-[60vh] overflow-y-auto p-2">
                            {results.length > 0 ? (
                                <div className="space-y-1">
                                    {results.map((result, index) => (
                                        <button
                                            key={result.url + index}
                                            onClick={() => handleSelect(result.url)}
                                            onMouseEnter={() => setSelectedIndex(index)}
                                            className={cn(
                                                "w-full flex items-center gap-3 p-3 rounded-xl text-left transition-all duration-200 border border-transparent",
                                                index === selectedIndex ? "bg-primary/10 text-primary border-primary/20" : "hover:bg-muted/50 border-transparent"
                                            )}
                                        >
                                            <div className={cn(
                                                "h-9 w-9 rounded-lg flex items-center justify-center transition-colors",
                                                index === selectedIndex ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                                            )}>
                                                <FileText className="h-4 w-4" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="font-semibold text-sm">{result.meta?.title}</div>
                                                <div className="text-xs text-muted-foreground line-clamp-1" dangerouslySetInnerHTML={{ __html: result.excerpt }} />
                                            </div>
                                            {index === selectedIndex && (
                                                <div className="flex items-center gap-1 text-[10px] font-medium opacity-60">
                                                    <CornerDownLeft className="h-3 w-3" />
                                                    <span>ENTER</span>
                                                </div>
                                            )}
                                        </button>
                                    ))}
                                    <button
                                        onClick={() => handleSelect(`/search?q=${encodeURIComponent(query)}`)}
                                        className="w-full flex items-center justify-center gap-2 p-3 mt-2 rounded-lg text-sm font-medium text-primary hover:bg-primary/5 transition-colors border border-dashed border-primary/20"
                                    >
                                        <Search className="h-4 w-4" />
                                        See all results for "{query}"
                                    </button>
                                </div>
                            ) : query.length > 1 && !loading ? (
                                <div className="py-12 text-center">
                                    <Search className="h-10 w-10 text-muted-foreground mx-auto mb-4 opacity-20" />
                                    <p className="text-sm text-muted-foreground mb-4">No matches found for "{query}"</p>
                                    <button
                                        onClick={() => handleSelect(`/search?q=${encodeURIComponent(query)}`)}
                                        className="text-primary hover:underline text-sm font-medium"
                                    >
                                        Try the full search page instead →
                                    </button>
                                </div>
                            ) : !loading && (
                                <div className="p-4 space-y-4">
                                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest pl-2">Suggestions</p>
                                    <div className="grid grid-cols-2 gap-2">
                                        {['Clean Architecture', 'SOLID', 'API Standards', 'GitFlow'].map(tag => (
                                            <button
                                                key={tag}
                                                onClick={() => setQuery(tag)}
                                                className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-primary/10 text-xs transition-colors text-left"
                                            >
                                                {tag}
                                                <ChevronRight className="h-3 w-3 opacity-50" />
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="bg-muted/30 px-4 py-3 border-t border-border/50 flex items-center justify-between">
                            <div className="flex items-center gap-4 text-[10px] text-muted-foreground">
                                <span className="flex items-center gap-1">
                                    <kbd className="rounded border bg-background px-1 px-1">↓</kbd>
                                    <kbd className="rounded border bg-background px-1">↑</kbd>
                                    to navigate
                                </span>
                                <span className="flex items-center gap-1">
                                    <kbd className="rounded border bg-background px-1">↵</kbd>
                                    to select
                                </span>
                            </div>
                            <Badge variant="outline" className="text-[10px] font-mono opacity-60">
                                <Command className="h-2 w-2 mr-1" /> K
                            </Badge>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default CommandPalette;
