import {
  defineCustomElement as VueDefineCustomElement,
  h,
  createApp,
  getCurrentInstance,
} from "vue";

export const defineCustomElement = (component: any, { plugins = [] } = {}) =>
  VueDefineCustomElement({
    ...component,
    setup(props, { emit }) {
      const app = createApp(component);

      // install plugins
      plugins.forEach(app.use);

      const inst = getCurrentInstance();
      Object.assign(inst.appContext, app._context);
      Object.assign(inst.appContext, app._context.provides);
      return () =>
        h(component, {
          ...props,
          onDemo: (...args) => emit("demo", ...args),
          onClick: (...args) => emit("click", ...args),
        });
    },
  });
