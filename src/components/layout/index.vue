<script setup></script>

<template>
  <div class="layout tw-flex tw-h-full">
    <nav class="nav-container tw-w-80 jh-p-6">
      <div class="nav-item">My boards</div>
      <div class="nav-item">My boards 2</div>
    </nav>
    <div class="layout-content tw-flex-1">
      <slot name="content"></slot>
    </div>
  </div>
</template>


<style lang="less" scoped>
.layout {
  .nav-container {
    background-color: rgba(0, 71, 255, 0.08);
  }
}
</style>