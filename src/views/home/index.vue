<template>
  <div class="home-page">
    <h2 class="title">首页</h2>
    <SearchList></SearchList>
  </div>
</template>
<script setup lang="ts">
import SearchList from '@/components/search-list/index.vue'
</script>
<style lang="less" scoped>
.home-page {
  .title {
    padding: 0;
    margin: 0;
  }
}
</style>
