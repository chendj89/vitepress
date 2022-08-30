<script setup lang="ts">
import useDialog from "../../dialog/useDialog";
import pop from "./pop.vue";
useDialog(pop).then((res) => {
  console.log(res);
});
</script>
<template>
  <div>
    <div>22</div>
    <slot></slot>
  </div>
</template>
<style lang="scss" scoped></style>
