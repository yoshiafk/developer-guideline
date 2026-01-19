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

    const search = useCallback(async (query: string) => {
        if (!pagefind || !query) return [];

        setLoading(true);
        try {
            const searchResponse = await pagefind.search(query);
            const results = await Promise.all(
                searchResponse.results.slice(0, 10).map(async (r: any) => {
                    const data = await r.data();
                    let url = data.url;

                    // Strip base URL if present
                    const base = import.meta.env.BASE_URL;
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

                    // Final clean up for trailing slashes if needed (depending on router config)
                    if (url.length > 1 && url.endsWith('/')) {
                        url = url.substring(0, url.length - 1);
                    }

                    return { ...data, url };
                })
            );
            setLoading(false);
            return results as PagefindResult[];
        } catch (err) {
            console.error('Search failed', err);
            setLoading(false);
            return [];
        }
    }, [pagefind]);

    return { search, loading, isReady: !!pagefind };
};
