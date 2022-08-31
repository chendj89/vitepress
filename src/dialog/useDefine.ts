import { defineAsyncComponent } from "vue";
export default function useDefine(filePath: string) {
  import(filePath);
}
