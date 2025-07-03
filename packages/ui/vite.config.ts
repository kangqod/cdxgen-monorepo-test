import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { resolve } from "path";
import pkg from "./package.json";

const externalPackages = new Set([...Object.keys(pkg.dependencies || {})]);
const regexesOfPackages = [...externalPackages].map(
  (packageName) => new RegExp(`^${packageName}(/.*)?`)
);

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  server: {
    port: 3001,
    host: "0.0.0.0",
    open: true,
  },
  build: {
    emptyOutDir: true,
    lib: {
      entry: resolve(__dirname, "src", "index.ts"),
      name: pkg.name,
      fileName: "index",
      formats: ["es"],
    },
    rollupOptions: {
      external: regexesOfPackages,
    },
  },
});
