import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/.nojekyll": {
        target: "https://njecolina.github.io",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/\.nojekyll/, ""),
      },
    },
    hmr: {
      protocol: "ws",
    },
    fs: {
      strict: false,
    },
    cors: true,
    force: true,
    hmrWarning: true,
    watch: {
      usePolling: true,
      interval: 100,
    },
    disableHostCheck: true,
    strictPort: false,
    fsServe: {
      root: ".",
      allow: ["."],
    },
    mimeTypes: {
      "text/jsx": "javascript",
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
});
