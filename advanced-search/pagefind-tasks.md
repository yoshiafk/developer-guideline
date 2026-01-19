# Pagefind Implementation Tasks

## Phase 1: Environment Setup
- [ ] Install Pagefind dependency: `npm install --save-dev pagefind`
- [ ] Install SSG support (optional but recommended): `npm install --save-dev vite-ssg`
- [ ] Configure `vite.config.ts` for static export.

## Phase 2: Indexing Integration
- [ ] Add `postbuild` script to `package.json`.
- [ ] Configure Pagefind to ignore UI-only elements (nav, footer) using `data-pagefind-ignore`.
- [ ] Add `data-pagefind-body` to the main content area in `Layout.tsx`.

## Phase 3: UI Implementation
- [ ] Create `src/hooks/usePagefind.ts` to manage WASM initialization and searching.
- [ ] Update `SearchModal.tsx` to display real-time results from Pagefind.
- [ ] Implement "Wait for search index" loading states.
- [ ] Map Pagefind results (url, title, excerpt) to existing UI cards.

## Phase 4: Verification & Deployment
- [ ] Run a local build: `npm run build`.
- [ ] Verify the `dist/_pagefind` directory is created.
- [ ] Test search functionality in `dist` using a local server (e.g., `npx serve dist`).
- [ ] Push to GitHub and verify search works on GitHub Pages.

## Maintenance
- [ ] Update `research.md` to reflect that Pagefind is the chosen engine.
- [ ] Remove legacy `minisearch` dependency and `src/utils/advancedSearch.ts` if no longer needed.
