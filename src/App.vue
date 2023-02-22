<script setup>
import Layout from '@/components/layout/index.vue';

</script>

<template>
  <div class="main">
    <layout>
      <template #content>
        <router-view></router-view>
      </template>
    </layout>
  </div>
</template>

<style scoped>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
  }

  .main {
    height: 100%;
  }
</style>
