<script setup lang="ts">
import {
  getCurrentInstance,
  onUnmounted,
  useAttrs,
  ComponentInternalInstance,
} from "vue";
const attrs: any = useAttrs();
let ins = getCurrentInstance();
// 添加断言
const { proxy } = getCurrentInstance() as ComponentInternalInstance;
onUnmounted(() => {
  console.log("销毁");
});
const close = () => {
  attrs.remove && attrs.remove();
};
</script>
<template>
  <div>
    <div @click="close">123</div>
  </div>
</template>

<style scoped></style>
