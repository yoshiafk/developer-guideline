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

/**
 * CommandPalette component that provides a modern, animated search interface.
 */
const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onOpenChange }) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<any[]>([]);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        if (query.trim().length > 1) {
            const mockData = [
                { id: '1', title: 'Clean Architecture Standards', category: 'Architecture', href: '/clean-architecture' },
                { id: '2', title: 'Global Coding Standards', category: 'Standards', href: '/coding-standard' },
                { id: '3', title: '.NET Developer Guideline', category: '.NET', href: '/dotnet-developer-guideline' },
                { id: '4', title: 'GitHub Workflow & PRs', category: 'Workflow', href: '/github-axa-usage' },
                { id: '5', title: 'React Frontend Standards', category: 'Frontend', href: '/react-developer-guideline' },
                { id: '6', title: 'Python & AI Guidelines', category: 'Python', href: '/python-developer-guideline' },
                { id: '7', title: 'Java Spring Boot Standards', category: 'Java', href: '/java-developer-guideline' },
                { id: '8', title: 'Flutter Mobile Design', category: 'Mobile', href: '/flutter-developer-guideline' },
            ];
            const filtered = mockData.filter(item =>
                item.title.toLowerCase().includes(query.toLowerCase()) ||
                item.category.toLowerCase().includes(query.toLowerCase())
            );
            setResults(filtered);
            setSelectedIndex(0);
        } else {
            setResults([]);
        }
    }, [query]);

    const handleSelect = (href: string) => {
        onOpenChange(false);
        navigate(href);
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isOpen) return;

            if (e.key === 'ArrowDown') {
                e.preventDefault();
                setSelectedIndex(prev => (prev + 1) % (results.length || 1));
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                setSelectedIndex(prev => (prev - 1 + (results.length || 1)) % (results.length || 1));
            } else if (e.key === 'Enter' && results.length > 0) {
                e.preventDefault();
                handleSelect(results[selectedIndex].href);
            } else if (e.key === 'Escape') {
                onOpenChange(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, results, selectedIndex]);

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
                                placeholder="Type a command or search documentation..."
                                className="flex-1 bg-transparent border-none outline-none focus:ring-0 text-lg placeholder:text-muted-foreground"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                            />
                            <div className="flex items-center gap-1.5 ml-2">
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
                                            key={result.id}
                                            onClick={() => handleSelect(result.href)}
                                            className={cn(
                                                "w-full flex items-center gap-3 p-3 rounded-xl text-left transition-all duration-200",
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
                                                <div className="font-semibold text-sm">{result.title}</div>
                                                <div className="text-xs text-muted-foreground truncate">{result.category}</div>
                                            </div>
                                            {index === selectedIndex && (
                                                <div className="flex items-center gap-1 text-[10px] font-medium opacity-60">
                                                    <CornerDownLeft className="h-3 w-3" />
                                                    <span>ENTER</span>
                                                </div>
                                            )}
                                        </button>
                                    ))}
                                </div>
                            ) : query.length > 1 ? (
                                <div className="py-12 text-center">
                                    <p className="text-sm text-muted-foreground">No matches found for "{query}"</p>
                                </div>
                            ) : (
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
