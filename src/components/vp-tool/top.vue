<script setup lang="ts">
import { log } from "console";
import {
  getCurrentInstance,
  useAttrs,
  onUnmounted,
  inject,
  onMounted,
  onBeforeUnmount,
  ref,
} from "vue";
let version = inject("version");
const attrs: any = useAttrs();
let ins: any = getCurrentInstance();

let props = defineProps(["myVer", "remove"]);
onUnmounted(() => {
  console.log("销毁");
});
const close = () => {
  dialogVisible.value = false;
  ins?.appContext.$remove && ins?.appContext.$remove("来自top的消息");
};
const close2 = () => {
  dialogVisible.value = false;
};
defineExpose({
  close,
  close2,
});
const dialogVisible = ref(true);
const elRef = ref(null);
</script>
<template>
  <el-dialog
    ref="elRef"
    v-model="dialogVisible"
    title="提示"
    width="810px"
    @closed="close"
  >
    <slot @close="close2" :close="close2"></slot>
  </el-dialog>
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
