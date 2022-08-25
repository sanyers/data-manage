<template>
  <n-layout-sider
    class="layout-nav"
    bordered
    collapse-mode="width"
    :collapsed-width="64"
    :width="200"
    :collapsed="collapsed"
    show-trigger
    @collapse="collapsed = true"
    @expand="collapsed = false"
  >
    <n-menu
      v-model:value="activeKey"
      :collapsed="collapsed"
      :collapsed-width="64"
      :collapsed-icon-size="22"
      :options="menuOptions"
      @update:value="handleUpdateValue"
    />
  </n-layout-sider>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { navList } from './nav-data'
import { useRouter, useRoute } from 'vue-router'
const menuOptions = ref(navList())
const collapsed = ref(false)
const activeKey = ref('')
const router = useRouter()
const route = useRoute()
const handleUpdateValue = () => {
  router.push({
    name: activeKey.value,
  })
}
onMounted(() => {
  activeKey.value = route.name?.toString() || ''
})
</script>
<style lang="less" scoped>
.layout-nav {
  background-color: #fff;
  box-shadow: 2px 0 8px #1d23290d;
}
</style>
