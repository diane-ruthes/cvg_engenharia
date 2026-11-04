import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";

// Caminho base e URL pública do site.
// No GitHub Actions eles vêm do "configure-pages" (funciona com o endereço
// *.github.io/cvg_engenharia/ e também com domínio próprio).
const base = process.env.BASE_PATH ? `${process.env.BASE_PATH.replace(/\/$/, "")}/` : "/";
const siteUrl = (process.env.VITE_SITE_URL || "https://diane-ruthes.github.io/cvg_engenharia").replace(/\/?$/, "/");
process.env.VITE_SITE_URL = siteUrl;

// Gera sitemap.xml e robots.txt com o endereço correto e
// cria 404.html (o GitHub Pages usa esse arquivo para rotas desconhecidas).
const seoFiles = (): Plugin => ({
  name: "seo-files",
  apply: "build",
  generateBundle() {
    const today = new Date().toISOString().slice(0, 10);
    this.emitFile({
      type: "asset",
      fileName: "sitemap.xml",
      source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>${siteUrl}</loc><lastmod>${today}</lastmod><priority>1.0</priority></url>\n</urlset>\n`,
    });
    this.emitFile({
      type: "asset",
      fileName: "robots.txt",
      source: `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}sitemap.xml\n`,
    });
  },
  writeBundle(options) {
    const dir = options.dir || "dist";
    const index = path.join(dir, "index.html");
    if (fs.existsSync(index)) fs.copyFileSync(index, path.join(dir, "404.html"));
  },
});

export default defineConfig({
  base,
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), seoFiles()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
