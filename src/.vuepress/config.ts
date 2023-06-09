import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  // @ts-ignore
  locales: {
    "/": {
      lang: "zh-CN",
      title: "沉迷学习",
      description: "vuepress-theme-hope 的文档演示",
    }
  },

  theme,

  shouldPrefetch: false,
});
