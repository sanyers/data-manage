<template>
  <NPopover trigger="click" placement="top-start" style="width: 120px">
    <template #trigger>
      <NIcon size="20" @click.stop>
        <Link />
      </NIcon>
    </template>
    <div v-for="item in links" class="link-item" @click="handleClick(item)">
      <span>{{ item.name }}</span>
      <NIcon size="16">
        <Link />
      </NIcon>
    </div>
  </NPopover>
</template>
<script setup lang="ts">
import { Link } from '@vicons/ionicons5'
defineProps({
  links: [Array<any>],
})
const handleClick = (val: any) => {
  console.log(val.path)
}
</script>
<style lang="less" scoped>
.link-item {
  color: #007aff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 32px;
  cursor: pointer;
}
</style>
