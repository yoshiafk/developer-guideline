# Pagefind Implementation Plan (GitHub Pages + SSG)

## Selected Architecture: Static Site Generation (SSG)
For this documentation site, we are using **Option A (SSG)**. This involves pre-rendering our React routes into static HTML files during the build process, which Pagefind will then index.

### Why this works best:
1.  **Search Coverage**: Pagefind indexes the actual generated HTML, meaning it sees exactly what the user sees (including code snippets, tables, and sidebars).
2.  **Breadcrumbs & Deep Linking**: Since each section is pre-rendered with its own tags and IDs, Pagefind can provide accurate deep links to specific headers.
3.  **SEO & Performance**: SSG improves SEO for private/public crawlers and ensures the initial page load is near-instant.

## Technical Components

### 1. Pre-rendering with `vite-ssg`
We will replace the standard Vite build with `vite-ssg`. 
*   **Entry Point Changes**: Update `src/main.tsx` to export a `createApp` function compatible with SSG.
*   **Route Detection**: `vite-ssg` will crawl our `react-router-dom` configuration to generate `/index.html`, `/clean-architecture/index.html`, etc.

### 2. Pagefind Indexing
The build pipeline will be:
`vite build (SSG)` → `pagefind --site dist`

### 3. Content Tagging
We will use Pagefind's data attributes to control the index:
*   `data-pagefind-body`: Add to the main `<article>` or `<main>` tag in `Layout.tsx`.
*   `data-pagefind-ignore`: Add to navigation, footer, and feedback widgets to keep results relevant.
*   `data-pagefind-meta="category"`: Add to page badges for advanced filtering.

## UI/UX Integration

### Custom Search Hook (`usePagefind`)
Instead of using the default Pagefind UI, we will create a custom hook to maintain the current "glassmorphism" aesthetic of the `SearchModal.tsx`.

### Result Mapping
Pagefind results will be mapped to our existing `SearchResult` interface:
*   `title`: The `<h1-6>` of the section.
*   `excerpt`: The matched snippet with highlighting `<mark>` tags.
*   `url`: The relative path + hash for deep linking.

## GitHub Pages Deployment
The `gh-pages` deployment script will need to ensure it includes the `dist/_pagefind` folder, which contains the WASM binaries and the search index.
