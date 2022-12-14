import {
  App,
  createApp,
  getCurrentInstance,
  markRaw,
  defineAsyncComponent,
  render,
  createVNode,
  h,
} from "vue";
import DialogTsx2 from "@/components/vp-tool/s1.vue";
export default function useDialog(file2: any, options?: any) {
  // @ts-ignore
  let ins: any = getCurrentInstance() || this;
  return new Promise((resolve, reject) => {
    // 服务器渲染
    if (typeof document !== "undefined") {
      let container = document.createElement("div");
      // let content = createVNode(file2, {});

      let app: any = createVNode(DialogTsx2, { com: file2, options });
      app.appContext = ins.appContext.app._context;
      // content.appContext = app.appContext.app._context;
      app.appContext.$remove = (result: any = true) => {
        render(null, container);
        container.parentNode?.removeChild(container);
        resolve(result);
      };
      app.appContext.$close = (result: any = true) => {
        render(null, container);
        container.parentNode?.removeChild(container);
        resolve(result);
      };
      render(app, container);
      document.body.appendChild(container);
    }
  });
}
