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
const show=ref(false);
onMounted(()=>{
  setTimeout(() => {
    show.value=true;
  }, 5000);
});
</script>
<template>
  <el-dialog
    ref="elRef"
    v-model="dialogVisible"
    title="提示2"
    width="810px"
    @closed="close"
  >
  <div>0000</div>
    <div v-if="show">
      <slot @close="close2" :close="close2"></slot>
      <div id="footer"></div>
    </div>
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
