import * as React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './AnimatedTabs';
import CodeSnippet from '@/components/CodeSnippet';
import { cn } from '@/lib/utils';

interface CodeSnippetData {
    title: string;
    code: string;
    language: string;
}

interface AnimatedCodeTabsProps {
    snippets: Record<string, CodeSnippetData>;
    className?: string;
}

/**
 * AnimatedCodeTabs component that allows switching between multiple code snippets with a smooth animation.
 */
const AnimatedCodeTabs: React.FC<AnimatedCodeTabsProps> = ({ snippets, className }) => {
    const keys = Object.keys(snippets);
    const [activeTab, setActiveTab] = React.useState<string>(keys[0] || "");

    return (
        <div className={cn("w-full space-y-4", className)}>
            <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value)} className="w-full">
                <TabsList className="bg-muted/50 p-1 border border-border/50">
                    {keys.map((key) => (
                        <TabsTrigger
                            key={key}
                            value={key}
                            isActive={activeTab === key}
                            className="px-4 py-2"
                        >
                            {snippets[key]?.title || key}
                        </TabsTrigger>
                    ))}
                </TabsList>
                <div className="mt-4">
                    {keys.map((key) => {
                        const snippet = snippets[key];
                        if (!snippet) return null;
                        return (
                            <TabsContent key={key} value={key} className="focus-visible:ring-0 mt-0">
                                <CodeSnippet
                                    title={snippet.title}
                                    code={snippet.code}
                                    language={snippet.language}
                                />
                            </TabsContent>
                        );
                    })}
                </div>
            </Tabs>
        </div>
    );
};

export default AnimatedCodeTabs;
