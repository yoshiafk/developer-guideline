import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Layout from '../components/Layout';
import PageHero from '../components/PageHero';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, FileText, ChevronRight, CornerDownRight } from 'lucide-react';

const SearchResultsPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState<any[]>([]);

  // Simple mock search for now
  useEffect(() => {
    if (query) {
      // In a real app, this would use MiniSearch or a similar engine
      const mockResults = [
        {
          id: '1',
          title: 'Clean Architecture Standards',
          excerpt: 'Learn the fundamental patterns and naming conventions for building maintainable .NET applications...',
          category: 'Architecture',
          href: '/clean-architecture'
        },
        {
          id: '2',
          title: 'Global Coding Standards',
          excerpt: 'Universal principles like SOLID, DRY, and Clean Code practices across all AII projects...',
          category: 'Standards',
          href: '/coding-standard'
        },
        {
          id: '3',
          title: '.NET Developer Guideline',
          excerpt: 'Deep dive into .NET 8/9, MediatR, EF Core, and enterprise backend patterns...',
          category: '.NET',
          href: '/dotnet-developer-guideline'
        },
        {
          id: '4',
          title: 'GitHub Workflow & PRs',
          excerpt: 'Branching strategy (GitFlow), commit messages, and automated quality gates...',
          category: 'Workflow',
          href: '/github-axa-usage'
        },
        {
          id: '5',
          title: 'React Frontend Standards',
          excerpt: 'Modern React patterns, state management, and component architecture guidelines...',
          category: 'Frontend',
          href: '/react-developer-guideline'
        },
        {
          id: '6',
          title: 'Python & AI Guidelines',
          excerpt: 'FastAPI, Pydantic, and AI integration best practices for data science projects...',
          category: 'Python',
          href: '/python-developer-guideline'
        },
        {
          id: '7',
          title: 'Java Spring Boot Standards',
          excerpt: 'Enterprise Java patterns and Spring Boot best practices at AII...',
          category: 'Java',
          href: '/java-developer-guideline'
        },
        {
          id: '8',
          title: 'Flutter Mobile Design',
          excerpt: 'Cross-platform mobile development with Flutter, Dart, and efficient state management...',
          category: 'Mobile',
          href: '/flutter-developer-guideline'
        }
      ].filter(r =>
        r.title.toLowerCase().includes(query.toLowerCase()) ||
        r.excerpt.toLowerCase().includes(query.toLowerCase()) ||
        r.category.toLowerCase().includes(query.toLowerCase())
      );
      setResults(mockResults);
    }
  }, [query]);

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Search Results' }
  ];

  return (
    <Layout>
      <PageHero
        title={`Search Results for "${query}"`}
        subtitle={results.length > 0 ? `Found ${results.length} matches for your search.` : "We couldn't find any documents matching your search."}
        breadcrumbs={breadcrumbs}
      />

      <div className="container py-12 px-4 max-w-4xl">
        <div className="space-y-6">
          {results.length > 0 ? (
            results.map((result) => (
              <Link key={result.id} to={result.href} className="block group">
                <Card className="transition-all hover:border-primary/50 hover:shadow-md group-hover:-translate-y-1">
                  <CardHeader className="flex flex-row items-center gap-4 space-y-0">
                    <div className="bg-primary/10 text-primary p-2 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <FileText className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">{result.title}</CardTitle>
                        <Badge variant="secondary">{result.category}</Badge>
                      </div>
                      <p className="text-muted-foreground line-clamp-2">
                        {result.excerpt}
                      </p>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </CardHeader>
                </Card>
              </Link>
            ))
          ) : (
            <div className="text-center py-20 bg-muted/20 rounded-2xl border-2 border-dashed">
              <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-50" />
              <h3 className="text-xl font-bold mb-2">No results found</h3>
              <p className="text-muted-foreground mb-6">Try searching for different keywords or browse our guides.</p>
              <Button asChild variant="outline">
                <Link to="/dotnet-developer-guideline">Browse documentation</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default SearchResultsPage;
