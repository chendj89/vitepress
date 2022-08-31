<script setup lang="ts">
import { getCurrentInstance, defineAsyncComponent } from "vue";
import useDialog from "../../dialog/useDialog";
import useDefine from "../../dialog/useDefine";

import pop from "./pop.vue";

let ins = getCurrentInstance();
// console.log(ins?.appContext.config.globalProperties);
// console.log(ins?.appContext);
let p1 = useDefine("./pop.vue");
useDialog(pop).then((res) => {
  console.log(res);
});
</script>
<template>
  <div>
    <div>22</div>
    <slot></slot>
  </div>
</template>
<style lang="scss" scoped></style>
