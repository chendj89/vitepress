import { App, createApp, getCurrentInstance } from "vue";
export default function useDialog(file: Component) {
  let ins: any = getCurrentInstance();
  console.log(ins);

  return new Promise((resolve, reject) => {
    if (typeof document !== "undefined") {
      let target = document.body;
      let container = document.createElement("div");
      let app: any = createApp(file, {
        myVer: "-",
        remove: (result: any = true) => {
          app.unmount();
          container.parentNode?.removeChild(container);
          resolve(result);
        },
      });
      app.appContext = ins.appContext;
      console.log(app);
      app.mount(container);
      document.body.appendChild(container);
    }
  });
}

// treeToRender.appContext = app._context
