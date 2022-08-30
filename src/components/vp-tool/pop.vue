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
</script>
<template>
  <div>
    <div @click="attrs.remove({ name: '0' })">123</div>
    <vp-tool></vp-tool>
  </div>
</template>

<style scoped></style>
