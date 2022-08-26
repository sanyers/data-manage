<template>
  <div class="layout">
    <layout-header></layout-header>
    <n-layout class="layout-content" has-sider>
      <layout-nav></layout-nav>
      <n-layout class="layout-page">
        <router-view />
      </n-layout>
    </n-layout>
  </div>
</template>

<script setup lang="ts">
import LayoutHeader from './components/layout-header.vue'
import LayoutNav from './components/layout-nav.vue'
</script>
<style lang="less" scoped>
.layout {
  width: 100%;
  height: 100%;
  &-content {
    display: flex;
    height: 100%;
    padding-top: 60px;
    box-sizing: border-box;
  }
  &-page {
    flex: 1;
    background-color: #fafbfc;
    .home-page {
      height: 100%;
      overflow: auto;
      scroll-behavior: smooth;
      padding: 10px;
      box-sizing: border-box;
    }
  }
}
</style>
