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
  console.log(ins.root.ctx.$el);

  return new Promise((resolve, reject) => {
    // 服务器渲染
    if (typeof document !== "undefined") {
      let container = document.createElement("div");
      let app: any = createVNode(file, {
        myVer: "-",
        remove: (result: any = true) => {
          console.log("remove");
          render(null, container);
          container.parentNode?.removeChild(container);
          resolve(result);
        },
      });
      console.log(ins);

      // app._context.components = ins.appContext.app._context.components;
      // app._context.directives = ins.appContext.app._context.directives;
      // app._context.mixins = ins.appContext.app._context.mixins;
      // app._context.provides = ins.appContext.app._context.provides;
      app.appContext = ins.appContext.app._context;
      // app.config.globalProperties = ins.appContext.config.globalProperties;
      const vm: any = render(app, container);
      ins.root.ctx.$el.appendChild(container);
    }
  });
}
