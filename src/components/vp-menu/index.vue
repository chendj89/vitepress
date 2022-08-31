<script setup lang="ts">
import { getCurrentInstance, inject } from "vue";
import useDialog from "@/dialog/useDialog";
let ins = getCurrentInstance();
let click = () => {
  useDialog.call(ins, "../components/vp-tool/top.vue");
};
</script>
<template>
  <div>
    <div @click="click">我是vp-menu</div>
    <div style="padding: 5px"></div>
  </div>
</template>
<style lang="scss" scoped></style>
