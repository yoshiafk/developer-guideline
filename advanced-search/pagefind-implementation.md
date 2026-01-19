# Pagefind Implementation Plan (GitHub Pages)

## Why Pagefind?
For a documentation site hosted on **GitHub Pages**, Pagefind is the superior choice because:
1.  **Zero Server Side**: It generates a highly optimized WASM-based search index during the build process.
2.  **Efficiency**: It only loads small chunks of the search index as needed, keeping the initial load fast even as documentation grows.
3.  **Native Features**: It provides built-in support for:
    *   Content snippets (excerpts)
    *   Result highlighting
    *   Filtering by category/tags
    *   Multilingual support

## Architecture for React SPA
Since this is a Vite/React SPA, Pagefind cannot simply index the `dist` folder because there is only one `index.html`. We have two options:

### Option A: Static Site Generation (SSG) - *Recommended*
Convert the React app to pre-render pages during build (using `vite-ssg`). Pagefind will then index the resulting HTML files.
*   **Pros**: Best SEO, fastest search indexing, fully automated.
*   **Cons**: Requires slight refactoring of `main.tsx`.

### Option B: Custom Object Indexing
Use Pagefind's Node.js API to index content extracted from `.tsx` files directly, bypassing the HTML indexing.
*   **Pros**: No change to app structure.
*   **Cons**: More complex indexing script.

## Step-by-Step implementation (Option A)

### 1. Pre-rendering Setup
Install `vite-ssg` and `fs-extra` to ensure all routes (`/openshift`, `/clean-architecture`, etc.) generate their own `index.html` files in the `dist/` folder.

### 2. Post-build Indexing
Update `package.json` to run `pagefind` after the build:
```bash
"build": "vite build && pagefind --site dist"
```

### 3. Client Integration
Use the `@pagefind/default-ui` or create a custom UI that queries the WASM engine:
```typescript
// Example search call
const pagefind = await window.pagefind.search("openshift");
const firstResult = await pagefind.results[0].data();
console.log(firstResult.excerpt);
```

### 4. GitHub Actions (Optional but Recommended)
Update the deployment workflow to include the search indexing step so the search results are always fresh.

## Integration with existing components
*   **SearchModal.tsx**: Replace the mock logic with a call to the Pagefind WASM module.
*   **SearchResultsPage.tsx**: Update to render Pagefind results with their native excerpts and highlighting.
