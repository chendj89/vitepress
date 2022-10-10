<script setup lang="ts">
import { log } from "console";
import { getCurrentInstance, inject, onMounted } from "vue";
let ins = getCurrentInstance();
const emit = defineEmits(["change", "close"]);
const success = () => {
  console.log(ins?.parent);
  emit("close", "ele的参数");
};
console.log(ins);

let version = inject("version");
</script>
<template>
  <div>ele--{{ version }}</div>
  <!-- <template #footer>
    <div>1</div>
  </template> -->
  <div>
    <div>222</div>
    <el-button @click="success">按钮888</el-button>
  </div>
  <Teleport to="#footer">
    <div>穿梭</div>
    <el-button @click="success">关闭</el-button>
  </Teleport>
  <Teleport to="#header">
    <div>我是ele的标题</div>
  </Teleport>
  <div>23</div>
</template>
<style lang="scss" scoped></style>
