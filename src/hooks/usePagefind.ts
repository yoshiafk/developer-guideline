import { useState, useEffect, useCallback } from 'react';

export interface PagefindResult {
    url: string;
    excerpt: string;
    filters: Record<string, any>;
    meta: {
        title: string;
        image?: string;
    };
    anchors: any[];
    weighted_locations: any[];
    locations: number[];
    raw_content: string;
    raw_url: string;
    sub_results: any[];
}

// Simple LRU-style cache for search results
const searchCache = new Map<string, PagefindResult[]>();
const MAX_CACHE_SIZE = 20;

export const usePagefind = () => {
    const [pagefind, setPagefind] = useState<any>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const initPagefind = async () => {
            try {
                // @ts-ignore
                if (window.__pagefind__) {
                    // @ts-ignore
                    setPagefind(window.__pagefind__);
                    return;
                }

                const base = import.meta.env.BASE_URL.endsWith('/')
                    ? import.meta.env.BASE_URL
                    : `${import.meta.env.BASE_URL}/`;

                const scriptPath = `${base}pagefind/pagefind.js`;

                try {
                    const instance = await import(/* @vite-ignore */ scriptPath);
                    await instance.init();
                    // @ts-ignore
                    window.__pagefind__ = instance;
                    setPagefind(instance);
                } catch (e) {
                    console.warn('Pagefind not found. Search will not work in dev mode until you run a build.', e);
                }
            } catch (err) {
                console.error('Failed to initialize Pagefind', err);
            }
        };

        initPagefind();
    }, []);

    const cleanUrl = useCallback((rawUrl: string) => {
        let url = rawUrl;
        const base = import.meta.env.BASE_URL;

        // Strip base URL if present
        if (url.startsWith(base)) {
            url = url.substring(base.length);
        }

        // Ensure leading slash
        if (!url.startsWith('/')) {
            url = '/' + url;
        }

        // Remove .html extension or /index.html
        url = url.replace(/\/index\.html$/, '/');
        url = url.replace(/\.html$/, '');

        // Final clean up for trailing slashes if needed
        if (url.length > 1 && url.endsWith('/')) {
            url = url.substring(0, url.length - 1);
        }
        return url;
    }, []);

    const search = useCallback(async (query: string) => {
        if (!pagefind || !query) return [];

        const trimmedQuery = query.trim().toLowerCase();

        // Check cache first
        if (searchCache.has(trimmedQuery)) {
            return searchCache.get(trimmedQuery)!;
        }

        setLoading(true);
        try {
            const searchResponse = await pagefind.search(trimmedQuery);
            const results = await Promise.all(
                searchResponse.results.slice(0, 10).map(async (r: any) => {
                    const data = await r.data();
                    const url = cleanUrl(data.url);
                    return { ...data, url };
                })
            );

            // Update cache
            if (searchCache.size >= MAX_CACHE_SIZE) {
                const firstKey = searchCache.keys().next().value;
                if (firstKey !== undefined) searchCache.delete(firstKey);
            }
            searchCache.set(trimmedQuery, results as PagefindResult[]);

            setLoading(false);
            return results as PagefindResult[];
        } catch (err) {
            console.error('Search failed', err);
            setLoading(false);
            return [];
        }
    }, [pagefind, cleanUrl]);

    return { search, loading, isReady: !!pagefind };
};
