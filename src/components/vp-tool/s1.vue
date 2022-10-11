<template>
  <el-dialog
    v-model="visible"
    title="自定义弹窗"
    @close="close"
    @closed="closed"
    :width="dialogOption.width"
  >
    <template #header>
      <div id="header"></div>
    </template>
    <component :is="props.com" v-on="postHandler"></component>
    <template #footer>
      <div id="footer" class="dialog-footer">
        <el-button @click="close">Cancel</el-button>
        <el-button type="primary" @click="close">Confirm</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { getCurrentInstance, ref } from "vue";
const ins = getCurrentInstance();
let visible = ref(true);
let props = defineProps(["com","options"]);
let dialogOption=Object.assign({
  width:"600px"
},props.options)

let result:any=null;
const postHandler = {
  close: () => {
    close();
  },
  success:(_result?:any)=>{
    close();
    result=_result;
  }
};
const close = () => {
  visible.value = false;
};

const closed = () => {
  ins?.appContext?.$remove(result);
};
</script>

<style scoped></style>
