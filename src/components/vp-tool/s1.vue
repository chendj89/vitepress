<template>
  <el-dialog
    v-model="visible"
    title="自定义弹窗"
    @close="close"
    @closed="closed"
  >
    <template #header>
      <div id="header"></div>
    </template>
    <component :is="props.com" @close="close"></component>
    <template #footer>
      <div id="footer"></div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { getCurrentInstance, ref } from "vue";
const ins = getCurrentInstance();
let visible = ref(true);
let props = defineProps(["com"]);
const postHandler = {
  close() {},
};
const close = () => {
  visible.value = false;
};
const closed = () => {
  ins?.appContext?.$remove();
  console.log("s1 关闭");
};
</script>

<style scoped></style>
