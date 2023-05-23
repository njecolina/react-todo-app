import reactRefresh from "@vitejs/plugin-react-refresh";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [reactRefresh()],
  build: {
    base: "/",
    rollupOptions: {
      input: {
        main: "./src/main.jsx",
        reactdemo: "./reactdemo.html",
        index: "./index.html",
      },
    },
    esbuild: {
      jsxInject: `import React from 'react';`,
    },
  },
  server: {
    // Uklonite postavku headers iz konfiguracije servera
  },
});
