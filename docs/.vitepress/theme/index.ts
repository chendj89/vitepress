import DefaultTheme from "vitepress/theme";
import vpTool from "../../../src/components/vp-tool/index.vue";
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component("vp-tool", vpTool);
  },
};
