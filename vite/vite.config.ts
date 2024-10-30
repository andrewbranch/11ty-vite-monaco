import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: path.resolve(__dirname, "dist"),
    rollupOptions: {
      input: path.resolve(__dirname, "src/index.ts"),
    },
    manifest: true,
  }
});