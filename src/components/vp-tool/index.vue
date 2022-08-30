<script setup lang="ts">
import { getCurrentInstance } from "vue";
import useDialog from "../../dialog/useDialog";
import pop from "./pop.vue";
let ins = getCurrentInstance();
// console.log(ins?.appContext.config.globalProperties);
// console.log(ins?.appContext);
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
