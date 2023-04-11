<script setup>
  import { ref } from 'vue';
  import EditModal from '@/pages/setting/integration-setting/edit-modal.vue';

  const editModalVisible = ref(false);
</script>

<template>
  <a-list-item class="integration settings-item">
    <a-list-item-meta title="Integrations">
      <template #description>
        <div class="tw-pt-3">
          <a-card hoverable>
            <div class="tw-flex tw-items-center tw-justify-between">
              <div class="tw-flex tw-items-center">
                <img
                  class="tw-w-5 tw-h-5 tw-mr-3"
                  src="https://about.gitlab.com/images/press/press-kit-icon.svg"
                  alt="gitlab-logo"
                />
                <span>Connect with GitLab</span>
              </div>
              <a-button
                size="mini"
                type="primary"
                @click="editModalVisible = true"
              >
                Connect
              </a-button>
            </div>
          </a-card>
        </div>
      </template>
    </a-list-item-meta>
    <edit-modal v-if="editModalVisible" @close="editModalVisible = false" />
  </a-list-item>
</template>

<style lang="less" scoped>
  .integration {
    &.settings-item {
      :deep(.arco-list-item-meta-content) {
        width: 100%;

        .arco-card-body {
          padding: 12px;
        }
      }
    }
  }
</style>
