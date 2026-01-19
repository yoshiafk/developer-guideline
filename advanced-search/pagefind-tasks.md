# Pagefind Implementation Tasks (SSG Focus)

## Phase 1: SSG & Pagefind Setup
- [ ] Install dependencies:
  ```bash
  npm install --save-dev pagefind vite-ssg fs-extra
  ```
- [ ] Refactor `src/main.tsx` to use `ViteSSG` instead of `ReactDOM.createRoot`.
- [ ] Update `package.json` build scripts:
  ```json
  "build": "vite-ssg build && pagefind --site dist"
  ```

## Phase 2: Content Optimization
- [ ] Update `src/components/Layout.tsx`:
  - Add `data-pagefind-body` to the main content container.
  - Add `data-pagefind-ignore` to `Header`, `Footer`, and `Breadcrumbs`.
- [ ] Ensure all guideline pages use semantic HTML (h1, h2, h3) for better Pagefind indexing.

## Phase 3: Search Engine Integration
- [ ] Implement `src/hooks/usePagefind.ts`:
  - Handle WASM initialization from `/_pagefind/pagefind.js`.
  - Implement search query logic.
  - Handle result loading and data fetching.
- [ ] Refactor `src/components/SearchModal.tsx`:
  - Replace mock results with `usePagefind` results.
  - Render excerpts with highlighted matches.
  - Support keyboard navigation for search results.

## Phase 4: Validation
- [ ] Test the build locally: `npm run build`.
- [ ] Verify `dist/` contains multiple `index.html` files for different routes.
- [ ] Verify `dist/_pagefind/` exists.
- [ ] Preview locally using `npx serve dist` and verify search works.

## Phase 5: Cleanup
- [ ] Remove `minisearch` from `package.json`.
- [ ] Delete legacy `src/utils/advancedSearch.ts`.
- [ ] Update documentation to reflect the new search architecture.
