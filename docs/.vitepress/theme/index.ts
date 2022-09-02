import DefaultTheme from "vitepress/theme";
// @ts-ignore
import vpTool from "@/components/vp-tool/index.vue";
// @ts-ignore
import vpMenu from "@/components/vp-menu/index.vue";
// @ts-ignore
import vpBtn from "@/components/vp-btn/index.vue";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.config.globalProperties.hero = "1.0.0";
    app.config.globalProperties.$translate = (key: string) => {};
    vpBtn.props.bar.default = () => 3;
    app.component("vp-tool", vpTool);
    app.component("vp-menu", vpMenu);
    app.component("vp-btn", vpBtn);
    app.provide("version", "9.0.0");
    app.use(ElementPlus);
  },
};
