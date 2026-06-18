import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://tikhov.org",
  output: "static",
  build: {
    assets: "site-assets"
  }
});
