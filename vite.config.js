import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { copyFileSync } from "fs";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    mimeTypes: {
      "text/javascript": ["jsx"], // Dodana konfiguracija za .jsx datoteke
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
      afterWriteBundle: [
        async (outputOptions, bundle, isWrite) => {
          if (isWrite && outputOptions.dir === "dist") {
            await copyFileSync(".nojekyll", "dist/.nojekyll");
          }
        },
      ],
    },
  },
});
