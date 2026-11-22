import { fileURLToPath, URL } from "node:url";
import node from "@astrojs/node";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import emdash, { local } from "emdash/astro";
import { sqlite } from "emdash/db";

export default defineConfig({
  output: "server",
  adapter: node({ mode: "standalone" }),
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@repo/registry/next-image-mock": fileURLToPath(
          new URL("./src/shims/next-image-mock.tsx", import.meta.url),
        ),
        "@repo/registry/next-link-mock": fileURLToPath(
          new URL("./src/shims/next-link-mock.tsx", import.meta.url),
        ),
        "@repo/registry/default/blocks/components/announcement-01.tsx": fileURLToPath(
          new URL("./src/components/alignui-pro/blocks/announcement.tsx", import.meta.url),
        ),
        "@repo/registry/default/blocks/components/navigation-01.tsx": fileURLToPath(
          new URL("./src/components/alignui-pro/blocks/navigation.tsx", import.meta.url),
        ),
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  },
  i18n: {
    defaultLocale: "en",
    locales: [
      "en",
      { path: "zh", codes: ["zh-CN", "zh"] },
    ],
    routing: {
      prefixDefaultLocale: false,
      fallbackType: "rewrite",
    },
    fallback: {
      zh: "en",
    },
  },
  integrations: [
    react(),
    emdash({
      database: sqlite({ url: "file:./data.db" }),
      storage: local({ directory: "./uploads", baseUrl: "/_emdash/api/media/file" }),
      admin: { locales: ["en", "zh-CN"] },
    }),
  ],
  devToolbar: { enabled: false },
});
