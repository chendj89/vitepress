<script setup lang="ts">
import {
  getCurrentInstance,
  useAttrs,
  onUnmounted,
  inject,
} from "@vue/runtime-core";
let version = inject("version");
const attrs: any = useAttrs();
onUnmounted(() => {
  console.log("销毁");
});
const close = () => {
  attrs.remove && attrs.remove();
};
</script>
<template>
  <div class="top">
    <div>
      top--
      <div>
        <vp-btn @click="close"></vp-btn>
        <div>{{ version }}</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.top {
  position: fixed;
  top: 0;
  left: 0;
  display: inline-block;
  padding: 5px 10px;
  color: #ff5c00;
  z-index: 9999;
}
</style>
