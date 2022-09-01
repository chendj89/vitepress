<script setup lang="ts">
let props = defineProps({
  bar: {
    default: () => 1,
  },
});
</script>
<template>
  <div>
    <div>我是按钮-vp-btn</div>
    <div>props:bar={{ props.bar }}</div>
  </div>
</template>
<style lang="scss" scoped></style>
