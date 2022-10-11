<script setup lang="ts">
import { log } from "console";
import { getCurrentInstance, inject, onMounted } from "vue";
let ins = getCurrentInstance();
const emit = defineEmits(["success", "close"]);
const props=defineProps(["icon"]);
const close = () => {
  emit("close", "ele的参数");
};
const success = () => {
  emit("success", "ele的参数-成功参数");
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
    <el-button @click="close">按钮888</el-button>
  </div>
  <Teleport to="#footer">
    <el-button @click="close">取消</el-button>
    <el-button type="primary" @click="success">确定</el-button>
  </Teleport>
  <Teleport to="#header">
    <div>{{props.icon}}</div>
    <div>我是ele的标题</div>
  </Teleport>
  <div>23</div>
</template>
<style lang="scss" scoped></style>
