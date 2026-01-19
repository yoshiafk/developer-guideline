import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  base: '/aii/developer-guideline/',
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'esbuild',
    chunkSizeWarningLimit: 500,
    assetsInlineLimit: 4096,
    rollupOptions: {
      output: {
        manualChunks: {
          'react': ['react', 'react-dom'],
          'react-router': ['react-router-dom'],
          'ui': ['framer-motion', 'lucide-react'],
          'radix': ['@radix-ui/react-dialog', '@radix-ui/react-scroll-area', '@radix-ui/react-separator', '@radix-ui/react-slot', '@radix-ui/react-tabs', '@radix-ui/react-toast', '@radix-ui/react-tooltip'],
          'vendor': ['highlight.js', 'minisearch', 'sonner', 'class-variance-authority', 'clsx', 'tailwind-merge']
        },
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/main-[hash].js',
        assetFileNames: (assetInfo) => {
          const extType = assetInfo.name?.split('.').pop() || '';
          if (/^(woff2?|eot|ttf|otf)$/.test(extType)) {
            return 'fonts/[name]-[hash].[ext]';
          }
          if (/^(png|jpe?g|svg|gif|webp|ico)$/.test(extType)) {
            return 'images/[name]-[hash].[ext]';
          }
          if (extType === 'css') {
            return 'css/[name]-[hash].[ext]';
          }
          return '[name]-[hash].[ext]';
        }
      }
    }
  },
  server: {
    port: 3000,
    open: true,
  },
});
