import { defineConfig } from "vitepress";
import path from "path";
let alias = {
  "@": path.resolve(__dirname, "../../src"),
  "@src": path.resolve(__dirname, "../../src"),
  "@docs": path.resolve(__dirname, ".."),
  "@root": path.resolve(__dirname, "../.."),
  "~vitepress": "vitepress/dist/client/theme-default",
};
export default defineConfig({
  base: process.env.NODE_ENV !== "production" ? undefined : "/vitepress/",
  title: "飞翔的鱼",
  vite: {
    resolve: {
      alias: alias,
    },
  },
});
