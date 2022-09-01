<script setup lang="ts">
import { log } from "console";
import {
  getCurrentInstance,
  useAttrs,
  onUnmounted,
  inject,
  onMounted,
  onBeforeUnmount,
} from "vue";

let version = inject("version");
const attrs: any = useAttrs();
let ins = getCurrentInstance();
let count = 0;
onBeforeUnmount(() => {
  console.log("销毁");
});
onUnmounted(() => {});
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
