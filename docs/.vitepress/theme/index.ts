import DefaultTheme from "vitepress/theme";
import vpTool from "../../../src/components/vp-tool/index.vue";
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.config.globalProperties.hero = "1.0.0";
    app.component("vp-tool", vpTool);
  },
};
