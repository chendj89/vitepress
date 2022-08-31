import DefaultTheme from "vitepress/theme";
import vpTool from "../../../src/components/vp-tool/index.vue";
import vpMenu from "../../../src/components/vp-menu/index.vue";
import vpBtn from "../../../src/components/vp-btn/index.vue";
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.config.globalProperties.hero = "1.0.0";
    app.config.globalProperties.$translate = (key: string) => {};
    app.component("vp-tool", vpTool);
    app.component("vp-menu", vpMenu);
    app.component("vp-btn", vpBtn);
  },
};
