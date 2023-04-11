<script setup>
  import Integration from '@/pages/setting/integration-setting/index.vue';
</script>

<template>
  <div class="setting tw-flex tw-justify-center main-content">
    <a-list class="tw-w-full tw-max-w-2xl" :bordered="false">
      <template #header> Settings </template>
      <integration />
    </a-list>
  </div>
</template>
