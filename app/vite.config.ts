import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": {
      API_URL: process.env.API_URL,
      JWT_SECRET: process.env.JWT_SECRET,
    },
  },
  preview: {
    port: 8080,
    strictPort: true,
  },
  server: {
    port: (process.env.FRONTEND_PORT || "3000") as unknown as number,
    strictPort: true,
    host: true,
    origin: `http://0.0.0.0:${process.env.FRONTEND_PORT || "3000"}`,
  },
});
