import { App, createApp } from "vue";
export default function useDialog(file: Component) {
  return new Promise((resolve, reject) => {
    let target = document.body;
    let container = document.createElement("div");
    let app: App = createApp(file, {
      myVer: "-",
      remove: (result: any = true) => {
        app.unmount();
        container.parentNode?.removeChild(container);
        resolve(result);
      },
    });
    app.mount(container);
    document.body.appendChild(container);
  });
}
