<script setup>
  import { reactive } from 'vue';

  const settingsForm = reactive({
    accessToken: '',
  });
</script>

<template>
  <div class="setting tw-flex tw-justify-center tw-m-10 tw-colors-text-6">
    <a-form
      :model="settingsForm"
      :style="{ width: '600px' }"
      @submit="handleSubmit"
    >
      <a-form-item field="accessToken" label="Access Token">
        <a-input
          v-model="settingsForm.accessToken"
          placeholder="please enter your access token"
        />
      </a-form-item>
    </a-form>
  </div>
</template>
