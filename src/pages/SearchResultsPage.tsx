import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Layout from '../components/Layout';
import PageHero from '../components/PageHero';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, FileText, ChevronRight, CornerDownRight } from 'lucide-react';

import { usePagefind, PagefindResult } from '../hooks/usePagefind';

const SearchResultsPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState<PagefindResult[]>([]);
  const { search, loading, isReady } = usePagefind();

  useEffect(() => {
    const performSearch = async () => {
      if (query && isReady) {
        const searchResults = await search(query);
        setResults(searchResults);
      }
    };
    performSearch();
  }, [query, isReady, search]);

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Search Results' }
  ];

  return (
    <Layout>
      <PageHero
        title={`Search Results for "${query}"`}
        subtitle={
          !isReady
            ? "Initializing search engine..."
            : loading
              ? "Searching..."
              : results.length > 0
                ? `Found ${results.length} matches for your search.`
                : "We couldn't find any documents matching your search."
        }
        breadcrumbs={breadcrumbs}
      />

      <div className="py-12 px-4">
        <div className="space-y-6">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-20 opacity-50">
              <div className="animate-spin h-10 w-10 border-4 border-primary border-t-transparent rounded-full mb-4" />
              <p>Searching documentation...</p>
            </div>
          ) : results.length > 0 ? (
            results.map((result, index) => (
              <Link key={result.url + index} to={result.url} className="block group">
                <Card className="transition-all hover:border-primary/50 hover:shadow-md group-hover:-translate-y-1">
                  <CardHeader className="flex flex-row items-center gap-4 space-y-0 text-left">
                    <div className="bg-primary/10 text-primary p-2 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                      <FileText className="h-5 w-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1 gap-4">
                        <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-1">{result.meta?.title}</CardTitle>
                      </div>
                      <p
                        className="text-muted-foreground line-clamp-3 text-sm"
                        dangerouslySetInnerHTML={{ __html: result.excerpt }}
                      />
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                  </CardHeader>
                </Card>
              </Link>
            ))
          ) : query && !loading ? (
            <div className="text-center py-20 bg-muted/20 rounded-2xl border-2 border-dashed">
              <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-50" />
              <h3 className="text-xl font-bold mb-2">No results found</h3>
              <p className="text-muted-foreground mb-6">Try searching for different keywords or browse our guides.</p>
              <Button asChild variant="outline">
                <Link to="/dotnet-developer-guideline">Browse documentation</Link>
              </Button>
            </div>
          ) : !query && (
            <div className="text-center py-20">
              <p className="text-muted-foreground">Enter a search term above to find what you're looking for.</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default SearchResultsPage;
