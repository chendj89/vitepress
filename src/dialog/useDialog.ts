import {
  App,
  createApp,
  getCurrentInstance,
  markRaw,
  defineAsyncComponent,
  render,
  createVNode,
} from "vue";

export default function useDialog(file: Component) {
  // @ts-ignore
  let ins: any = getCurrentInstance() || this;
  return new Promise((resolve, reject) => {
    // 服务器渲染
    if (typeof document !== "undefined") {
      let container = document.createElement("div");
      let app: any = createVNode(file, {
        myVer: "-",
        remove: (result: any = true) => {
          render(null, container);
          container.parentNode?.removeChild(container);
          resolve(result);
        },
      });
      app.appContext = ins.appContext.app._context;
      render(app, container);
      ins.root.ctx.$el.appendChild(container);
    }
  });
}
