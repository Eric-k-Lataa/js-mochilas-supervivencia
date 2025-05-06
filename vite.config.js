import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: "index.html",
        story: "./story.html", // Agrega cada HTML extra
        game: "./game.html",
      },
    },
  },
});
