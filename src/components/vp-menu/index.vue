<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import useDialog from "../../dialog/useDialog";
import vpTop from "../vp-tool/top.vue";
useDialog(vpTop);
</script>
<template>
  <div>
    <div>我是vp-menu</div>
    <div style="padding: 5px"></div>
  </div>
</template>
<style lang="scss" scoped></style>
