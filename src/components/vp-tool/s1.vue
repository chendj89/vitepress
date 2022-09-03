<template>
  <el-dialog v-model="visible">
    <component :is="props.com"></component>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref } from "vue";
let visible = ref(true);
let props = defineProps(["com"]);
</script>

<style scoped></style>
