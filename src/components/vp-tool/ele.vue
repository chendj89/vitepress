<script setup lang="ts">
import { getCurrentInstance, inject, onMounted } from "vue";
let ins = getCurrentInstance();
const emit = defineEmits(["change", "close"]);
const success = () => {
  console.log(ins?.parent);

  emit("close", "ele的参数");
};
let version = inject("version");
</script>
<template>
  <div>ele--{{ version }}</div>
  <!-- <template #footer>
    <div>1</div>
  </template> -->
  <div>
    <div>222</div>
    <el-button @click="success">按钮</el-button>
  </div>
  <div>23</div>
</template>
<style lang="scss" scoped></style>
