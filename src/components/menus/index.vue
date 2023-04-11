<script setup>
  import { computed } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { clientRoutes } from '@/router/routes';

  const router = useRouter();
  const route = useRoute();

  const selected = computed(() => {
    return [route.name];
  });

  const goto = (path) => {
    router.push(path);
  };
</script>

<template>
  <div class="menus tw-p-6">
    <a-menu :selected-keys="selected">
      <a-menu-item
        v-for="item in clientRoutes"
        :key="item.name"
        @click="goto(item.path)"
        >{{ item?.meta?.label }}</a-menu-item
      >
    </a-menu>
  </div>
</template>

<style lang="less" scoped>
  .menus {
  }
</style>
