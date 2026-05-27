import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Only use the /MyPortfolio/ sub-path when explicitly building for GitHub Pages.
  // All other deploys (Lovable, custom domain) are served from the root.
  base:
    mode === "production" && process.env.DEPLOY_TARGET === "gh-pages"
      ? "/MyPortfolio/"
      : "/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));