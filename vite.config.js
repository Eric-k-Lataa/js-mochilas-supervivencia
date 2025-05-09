import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: "index.html",
        story: "./story.html",
        game: "./game.html",
        results: "./results.html",
        credits: "./credits.html",
      },
    },
  },
});
