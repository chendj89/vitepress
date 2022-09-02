<script setup lang="ts">
import { getCurrentInstance, inject, onMounted } from "vue";
let ins = getCurrentInstance();
const emit = defineEmits(["change", "close"]);
const success = () => {
  console.log(ins);

  emit("close", "ele的参数");
};
let version = inject("version");
</script>
<template #default="slotProps">
  <div>ele--{{ version }}</div>
  <div>
    <el-button @click="success">按钮</el-button>
  </div>
</template>
<style lang="scss" scoped></style>
