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
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import { fa } from "element-plus/es/locale";
let version = inject("version");
const attrs: any = useAttrs();
let ins: any = getCurrentInstance();
if (!ins?.appContext.app._context.components.ElButton) {
  ins?.appContext.app.use(ElementPlus);
}

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
const dialogVisible = ref(true);
const elRef = ref(null);
</script>
<template>
  <el-dialog
    ref="elRef"
    v-model="dialogVisible"
    title="Tips"
    width="30%"
    @closed="close"
  >
    <span>This is a message</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="close2">Cancel</el-button>
        <el-button type="primary" @click="close2">Confirm</el-button>
      </span>
    </template>
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
