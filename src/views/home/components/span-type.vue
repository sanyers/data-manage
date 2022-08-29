<template>
  <span class="filter-span">
    {{ value }}
    <NIcon class="span-icon" size="18" @click.stop="handleClick">
      <FunnelOutline />
    </NIcon>
  </span>
</template>
<script setup lang="ts">
import { FunnelOutline } from '@vicons/ionicons5'
const props = defineProps({
  value: [String],
})
const handleClick = () => {
  console.log(props.value)
}
</script>
<style lang="less" scoped>
.filter-span {
  .span-icon {
    position: absolute;
    top: -12px;
    right: -24px;
    background-color: rgb(0, 116, 255);
    color: rgb(255, 255, 255);
    border-radius: 3px;
    box-shadow: 0 3px 6px -4px rgb(0, 0, 0 / 12%), 0 6px 16px 0 rgb(0 0 0 / 8%),
      0 9px 28px 8px rgb(0 0 0 / 5%);
    padding: 2px;
    cursor: pointer;
  }
}
</style>
