<script setup lang="ts">
import { getCurrentInstance, inject, defineAsyncComponent } from "vue";
import useDialog from "@/dialog/useDialog";
let ins = getCurrentInstance();
let click = () => {
  const AsyncComp = defineAsyncComponent(
    () => import("@/components/vp-tool/top.vue")
  );

  useDialog.call(ins, AsyncComp);
};
</script>
<template>
  <div>
    <div @click="click">我是vp-menu</div>
    <div style="padding: 5px"></div>
  </div>
</template>
<style lang="scss" scoped></style>
