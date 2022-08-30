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
      app.appContext = ins.root.appContext;
      for (let [key, value] of Object.entries(ins.root.appContext.components)) {
        console.log(key);

        // app.component(key, value);
      }
      app.mount(container);
      document.body.appendChild(container);
    }
  });
}

// treeToRender.appContext = app._context

// https://sfc.vuejs.org/#eyJBcHAudnVlIjoiPHRlbXBsYXRlPlxuICA8bXlDb20+PC9teUNvbT48IS0t6IO95q2j5bi45pi+56S6LS0+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuaW1wb3J0IG15X3BsdWdpbiBmcm9tICcuL215X3BsdWdpbi5qcydcbmltcG9ydCBvcHRpb25fY29tIGZyb20gJy4vb3B0aW9uX2NvbS52dWUnXG5pbXBvcnQgbXlfY29tIGZyb20gJy4vbXlfY29tLnZ1ZSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBzZXR1cCgpIHtcbiAgICBjb25zdCBhcHAgPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuICAgIGFwcC5hcHBDb250ZXh0LmFwcC5jb21wb25lbnQoJ215Q29tJywgbXlfY29tKVxuICAgIGFwcC5hcHBDb250ZXh0LmFwcC51c2UobXlfcGx1Z2luKVxuICAgIGNvbnN0IHsgJHRlc3QgfSA9IGFwcC5hcHBDb250ZXh0LmNvbmZpZy5nbG9iYWxQcm9wZXJ0aWVzXG4gICAgJHRlc3Qob3B0aW9uX2NvbSlcbiAgfVxufVxuPC9zY3JpcHQ+XG4iLCJteV9wbHVnaW4uanMiOiJpbXBvcnQgbXlfcGx1Z2luIGZyb20gJy4vbXlfcGx1Z2luLnZ1ZSdcbmltcG9ydCB7IGNyZWF0ZUFwcCxoLCBtYXJrUmF3LHJlbmRlciB9IGZyb20gJ3Z1ZSdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKEFwcCkge1xuICBjb25zdCB2bSA9IGgoe1xuICAgIGRhdGEoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjb21wOiBudWxsXG4gICAgICB9XG4gICAgfSxcbiAgICByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gaCgnZGl2Jywge1xuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICB6SW5kZXg6IDFcbiAgICAgICAgfVxuICAgICAgfSwgaChteV9wbHVnaW4sIHtcbiAgICAgICAgY29tcDogdGhpcy5jb21wXG4gICAgICB9KSlcbiAgICB9XG4gIH0pXG5cbiAgY29uc3QgY29tRG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb21Eb20pXG4gIFxuICB2bS5hcHBDb250ZXh0ID0gQXBwLl9jb250ZXh0XG4gIHJlbmRlcih2bSxjb21Eb20pXG4gIFxuICBBcHAuY29uZmlnLmdsb2JhbFByb3BlcnRpZXMuJHRlc3QgPSBmdW5jdGlvbiAoY29tcG9uZW50KSB7XG4gICAgLy92bS5jb21wID0gbWFya1Jhdyhjb21wb25lbnQpXG4gICAgdm0uY29tcG9uZW50LnByb3h5LmNvbXAgPW1hcmtSYXcoY29tcG9uZW50KVxuICB9XG59XG4iLCJteV9wbHVnaW4udnVlIjoiPHRlbXBsYXRlPlxuICA8Y29tcG9uZW50IDppcz1cImNvbXBcIj48L2NvbXBvbmVudD5cbiAgPHA+dGhpcyBpcyBteV9wbHVnaW48L3A+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczoge1xuICAgIGNvbXA6IE9iamVjdFxuICB9XG59XG48L3NjcmlwdD5cbiIsIm9wdGlvbl9jb20udnVlIjoiPHRlbXBsYXRlPlxuICA8bXlDb20+PC9teUNvbT48IS0t5LiN6IO95q2j5bi45pi+56S6LS0+XG4gIDxwPnRoaXMgaXMgb3B0aW9uX2NvbTwvcD5cbjwvdGVtcGxhdGU+XG4iLCJteV9jb20udnVlIjoiPHRlbXBsYXRlPlxuICA8cD50aGlzIGlzIG15X2NvbTwvcD5cbjwvdGVtcGxhdGU+In0=
