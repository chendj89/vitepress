<script setup lang="ts">
import { onUnmounted, useAttrs } from "vue";
const attrs: any = useAttrs();
onUnmounted(() => {
  console.log("销毁");
});
</script>
<template>
  <div @click="attrs.remove({ name: '0' })">123</div>
</template>

<style scoped></style>
