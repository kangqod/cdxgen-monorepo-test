import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: "0.0.0.0",
    open: true,
  },
  build: {
    minify: false,
    rollupOptions: {
      output: {
        manualChunks: {
          antd: ["antd"],

          comp_ui: ["@comp/ui"],
        },
      },
    },
  },
});
