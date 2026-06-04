import { defineConfig } from "vitest/config";

export default defineConfig({
  cacheDir: "./.cache/vite-scripts",
  test: {
    environment: "node",
    include: ["scripts/**/*.{test,spec}.ts"],
  },
});
