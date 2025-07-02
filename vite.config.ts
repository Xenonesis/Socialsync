import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: [
            '@radix-ui/react-accordion',
            '@radix-ui/react-avatar',
            '@radix-ui/react-dialog',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-label',
            '@radix-ui/react-select',
            '@radix-ui/react-tabs',
            '@radix-ui/react-toast'
          ],
          motion: ['framer-motion'],
          utils: ['clsx', 'tailwind-merge', 'class-variance-authority'],
          query: ['@tanstack/react-query'],
          icons: ['lucide-react']
        }
      }
    },
    chunkSizeWarningLimit: 1000,
    minify: mode === 'production' ? 'esbuild' : false,
    sourcemap: mode !== 'production'
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion']
  }
}));
