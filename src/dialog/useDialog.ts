import { App, createApp, getCurrentInstance, markRaw } from "vue";
export default function useDialog(file: Component) {
  let ins: any = getCurrentInstance();
  return new Promise((resolve, reject) => {
    if (typeof document !== "undefined") {
      let container = document.createElement("div");
      let app: any = createApp(file, {
        myVer: "-",
        remove: (result: any = true) => {
          app.unmount();
          container.parentNode?.removeChild(container);
          resolve(result);
        },
      });
      app._context.components = ins.appContext.app._context.components;
      app._context.directives = ins.appContext.app._context.directives;
      app._context.mixins = ins.appContext.app._context.mixins;
      app._context.provides = ins.appContext.app._context.provides;
      app.config.globalProperties = ins.appContext.config.globalProperties;
      app.mount(container);
      document.body.appendChild(container);
    }
  });
}

// treeToRender.appContext = app._context
