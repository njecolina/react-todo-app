import reactRefresh from "@vitejs/plugin-react-refresh";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [reactRefresh()],
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
      injectHost: true,
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
      "text/jsx": ["js"],
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: "./src/main.jsx",
        reactdemo: "./reactdemo.html",
      },
    },
  },
});
