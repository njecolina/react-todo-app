import { defineConfig } from "vite";
import { createVuePlugin } from "vite-plugin-vue2";
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
      "text/javascript": ["js", "mjs"],
      "text/css": "css",
      "text/html": ["html", "htm"],
      "application/javascript": ["jsx"],
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
