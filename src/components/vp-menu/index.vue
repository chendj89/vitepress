<script setup lang="ts">
import { getCurrentInstance, inject, defineAsyncComponent } from "vue";
import useDialog from "@/dialog/useDialog";
import DialogTsx from "@/components/vp-tool/d";
let ins = getCurrentInstance();
let click = async () => {
  const AsyncComp = defineAsyncComponent(
    () => import("@/components/vp-tool/top.vue")
  );
  const AsyncComp2 = defineAsyncComponent(
    () => import("@/components/vp-tool/ele.vue")
  );
  let res: any = await useDialog.call(ins, AsyncComp, AsyncComp2);
};
</script>
<template>
  <div>
    <div @click="click">我是vp-menu</div>
    <div style="padding: 5px"></div>
  </div>
</template>
<style lang="scss" scoped></style>
