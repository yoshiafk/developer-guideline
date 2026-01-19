# Comparison of Search Libraries

| Feature | MiniSearch (Current) | FlexSearch | Pagefind | Fuse.js |
|---------|----------------------|------------|----------|---------|
| **Type** | Memory-based | Memory-based | Static (WASM) | Memory-based |
| **Logic** | Boolean/TF-IDF | Performance optimized | Ranking/Indexing | Fuzzy matching |
| **Index Size** | Small-Medium | Medium | Large (but offloaded) | Small |
| **Highlighting** | Partial | No | Native | No |
| **Performance** | High | Very High | Extreme | Moderate |
| **Setup Cost** | Low (Already here) | Moderate | Medium | Low |

## Why stay with MiniSearch?
1.  **Already in Project**: No new dependencies needed.
2.  **Flexible Schema**: Easy to index custom fields like `category` and `section`.
3.  **Fuzzy Search**: Good at handling typos (0.3 setting in current code).
4.  **Auto-suggestions**: Built-in support for search-as-you-type.

## Why consider Pagefind?
1.  **Scalability**: If the documentation grows to thousands of pages, Pagefind will remain fast while memory-based search might bloat the bundle.
2.  **Indexing Effort**: Pagefind indexes the HTML, not the source. This means it catches EXACTLY what the user sees, including text transformed by components.
