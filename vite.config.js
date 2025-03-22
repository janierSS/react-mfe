import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import reactRefresh from '@vitejs/plugin-react-refresh';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), reactRefresh(), cssInjectedByJsPlugin()],
    server: {
        port: 3000,
        open: true,
    },
    build: {
        outDir: 'dist',
        rollupOptions: {
            input: 'src/exports.ts',
            output: {
                entryFileNames: 'index.js',
            }
        },
        assetsInlineLimit: 100 * 1024,
    },
});
