<script setup>
  import { reactive, ref } from 'vue';

  const visible = ref(true);
  const gitlabForm = reactive({
    token: '',
    url: '',
  });

  const emits = defineEmits(['close']);

  const handleOk = () => {
    // todo
  };

  const handleClose = () => {
    emits('close');
  };
</script>

<template>
  <a-modal
    v-model:visible="visible"
    :simple="true"
    @ok="handleOk"
    @before-close="handleClose"
  >
    <template #title> Set up GitLab </template>
    <div>
      <a-form :model="gitlabForm" layout="vertical">
        <a-form-item field="url" label="GitLab hostname">
          <a-input v-model="gitlabForm.url" />
        </a-form-item>
        <a-form-item field="token" label="API Access Token">
          <a-input v-model="gitlabForm.token"> </a-input>
          <a-button type="primary">Test</a-button>
        </a-form-item>
      </a-form>
    </div>
  </a-modal>
</template>
