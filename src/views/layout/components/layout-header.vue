<template>
  <div class="layout-header">
    <div class="layout-header-left">
      <img src="/vite.svg" />
      <span class="layout-header-title">数据管理平台</span>
    </div>
    <div class="layout-header-right">
      <n-tooltip placement="bottom" trigger="hover">
        <template #trigger>
          <NIcon size="24">
            <SearchOutline />
          </NIcon>
        </template>
        <span>搜索</span>
      </n-tooltip>
      <NIcon class="right-user" size="28">
        <PersonCircleOutline />
      </NIcon>
      <span>admin</span>
    </div>
  </div>
</template>
<script setup lang="ts">
import { SearchOutline, PersonCircleOutline } from '@vicons/ionicons5'
</script>
<style lang="less" scoped>
.layout-header {
  height: 60px;
  line-height: 60px;
  background-color: #fff;
  box-shadow: 0 1px 4px #00152914;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  z-index: 1;
  &-title {
    font-size: 24px;
    margin-left: 8px;
  }
  &-left {
    display: flex;
  }
  &-right {
    display: flex;
    align-items: center;
    .n-icon {
      cursor: pointer;
    }
    .right-user {
      margin-left: 12px;
      margin-right: 4px;
    }
  }
}
</style>
