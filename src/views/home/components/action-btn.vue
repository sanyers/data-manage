<template>
  <NButton type="info" size="small" text @click.stop="editClick">
    编辑
    <template #icon>
      <NIcon size="18">
        <Create />
      </NIcon>
    </template>
  </NButton>
  <NButton
    type="info"
    style="margin-left: 8px"
    size="small"
    text
    @click.stop="queryClick"
  >
    查看
    <template #icon>
      <NIcon size="18">
        <Eye />
      </NIcon>
    </template>
  </NButton>
</template>
<script setup lang="ts">
import { Create, Eye } from '@vicons/ionicons5'
const props = defineProps({
  data: [Object],
})
const editClick = () => {
  console.log('编辑')
  console.log(props.data)
}
const queryClick = () => {
  console.log('查看')
  console.log(props.data)
}
</script>
