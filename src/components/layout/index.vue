<script setup>
  import Menus from '@/components/menus/index.vue';
</script>

<template>
  <div class="layout tw-flex tw-h-full">
    <menus class="nav-container tw-w-80" />
    <div class="layout-content tw-flex-1">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .layout {
    .nav-container {
      //background-color: rgba(0, 71, 255, 0.08);
    }
  }
</style>
