# Research: Comprehensive Advanced Search Implementation

## Current State Analysis

*   **Technology**: The project currently includes `minisearch` as a dependency.
*   **Implementation**: 
    *   `src/utils/advancedSearch.ts` contains a manually maintained `searchIndex` of ~500 lines.
    *   `SearchModal.tsx` and `SearchResultsPage.tsx` both use **mock data** and simple string indexing, completely bypassing the `minisearch` logic.
*   **Gap**: The search is not comprehensive because it doesn't index the actual content of the large guideline pages (e.g., `OpenShiftGuidelinePage.tsx` which is 1300+ lines).

## Objectives

1.  **Word-level Search**: Search for any word within the body text, code snippets, or tables.
2.  **Section-level Deep Linking**: Search results should point directly to the relevant section (e.g., `/openshift#deployments`).
3.  **Automatic Indexing**: Eliminate manual maintenance of the search index.
4.  **Rich Results**: Show snippets of the matched content with highlighting.

## Proposed Solutions

### 1. Pre-build Indexing Script (Recommended)
Since the project is a React/Vite app, we can create a Node.js script that runs during the build process (or as a git hook) to:
*   Scan `src/pages/*.tsx`.
*   Parse the JSX to extract `id` (for anchors), `h2/h3` (for titles), and inner text/code (for content).
*   Output a `search-index.json` file in `src/assets/` or `public/`.
*   **Pros**: Fast at runtime, comprehensive, zero manual work.
*   **Tools**: `framer-motion` (already used), `cheerio` or `ts-morph` for parsing.

### 2. Client-side Dynamic Indexing
Index pages on-the-fly when they are loaded, or index all pages in the background on first visit.
*   **Pros**: Real-time accuracy.
*   **Cons**: Perfomance hit on initial load, doesn't work for pages not yet visited unless we fetch all.

### 3. Pagefind Integration
[Pagefind](https://pagefind.app/) is a powerful static search library that indexes the `dist` folder after build.
*   **Pros**: Extremely fast, handles snippets and highlighting automatically, very low bundle size weight.
*   **Cons**: Requires a post-build step, slightly harder to integrate with SPA routing without additional config.

## Implementation Roadmap

### Phase 1: Search Engine Consolidation
*   Update `src/utils/advancedSearch.ts` to be the single source of truth for search.
*   Refactor `SearchModal.tsx` and `SearchResultsPage.tsx` to use `advancedSearch.ts`.

### Phase 2: Automated Indexing
*   Develop a script `scripts/generate-search-index.js`.
*   The script will:
    1. Define a list of pages to index.
    2. Extract content from `<section>` tags.
    3. Map content to its respective `id`.
    4. Save to `src/data/search-index.json`.

### Phase 3: UI Enhancement
*   Implement "Quick Look" snippets in the search modal.
*   Add term highlighting (e.g., using `highlight-words-core`).
*   Add "Single Word" search mode for global discovery.

## Technical Considerations

### Section Indexing Schema
```typescript
interface SearchIndexItem {
  id: string;        // section id + page url
  pageTitle: string; 
  sectionTitle: string;
  content: string;   // Full text of the section
  tags: string[];
  url: string;       // e.g., "/openshift#builds"
}
```

### Search Ranking (Boosting)
*   **Title matches**: 10x boost
*   **Tag matches**: 5x boost
*   **Heading matches**: 3x boost
*   **Content matches**: 1x boost
