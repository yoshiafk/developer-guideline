import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, FileText, ChevronRight, X, Command } from 'lucide-react';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';

interface SearchModalProps {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onOpenChange }) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<any[]>([]);
    const navigate = useNavigate();

    // Mock search logic - in production this would query a real index
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
            setResults(mockData.filter(item =>
                item.title.toLowerCase().includes(query.toLowerCase()) ||
                item.category.toLowerCase().includes(query.toLowerCase())
            ));
        } else {
            setResults([]);
        }
    }, [query]);

    const handleSelect = (href: string) => {
        onOpenChange(false);
        navigate(href);
    };

    return (
        <Sheet open={isOpen} onOpenChange={onOpenChange}>
            <SheetContent side="top" className="h-[auto] max-h-[80vh] w-full p-0 border-b shadow-2xl glass rounded-b-[2rem]">
                <div className="container max-w-3xl mx-auto py-12 px-6">
                    <div className="relative group mb-8">
                        <div className="absolute -inset-1 bg-primary/20 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                        <div className="relative flex items-center bg-background/50 rounded-2xl p-2 px-4 shadow-sm transition-all">
                            <Search className="h-6 w-6 text-muted-foreground mr-3" />
                            <input
                                autoFocus
                                placeholder="Search documentation, patterns, or components..."
                                className="flex-1 bg-transparent border-none outline-none focus:outline-none focus:ring-0 text-xl py-2"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' && query.trim()) {
                                        handleSelect(`/search?q=${encodeURIComponent(query)}`);
                                    }
                                }}
                            />
                            <Badge variant="outline" className="hidden sm:flex items-center gap-1 font-mono text-[10px] opacity-60">
                                <Command className="h-3 w-3" /> ENTER
                            </Badge>
                        </div>
                    </div>

                    <div className="space-y-2 max-h-[40vh] overflow-y-auto pr-2 custom-scrollbar">
                        {results.length > 0 ? (
                            results.map((result) => (
                                <button
                                    key={result.id}
                                    onClick={() => handleSelect(result.href)}
                                    className="w-full flex items-center gap-4 p-4 rounded-xl hover:bg-primary/5 border border-transparent hover:border-primary/10 transition-all group text-left"
                                >
                                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                        <FileText className="h-5 w-5" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h4 className="font-semibold text-lg">{result.title}</h4>
                                        <p className="text-sm text-muted-foreground truncate">Part of {result.category}</p>
                                    </div>
                                    <Badge variant="secondary" className="opacity-0 group-hover:opacity-100 transition-opacity">Quick Link</Badge>
                                    <ChevronRight className="h-5 w-5 text-muted-foreground opacity-30 group-hover:opacity-100 transition-all" />
                                </button>
                            ))
                        ) : query.length > 1 ? (
                            <div className="text-center py-12 opacity-50">
                                <Search className="h-12 w-12 mx-auto mb-4" />
                                <p>No results found for "{query}"</p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                {['Clean Architecture', 'SOLID', 'API Standards', 'GitFlow', 'React Hub', 'Testing'].map(tag => (
                                    <button
                                        key={tag}
                                        onClick={() => setQuery(tag)}
                                        className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-primary/10 text-sm transition-colors text-left"
                                    >
                                        {tag}
                                        <ChevronRight className="h-3 w-3 opacity-50" />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default SearchModal;
