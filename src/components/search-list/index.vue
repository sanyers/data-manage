<template>
  <div class="search-list">
    <div>
      <slot name="left"></slot>
      <n-input
        class="search-input"
        v-model:value="searchValue"
        :placeholder="placeholder"
        @keyup.enter.native="onSearch"
      >
        <template #suffix>
          <n-icon size="16" class="search-icon" @click="onSearch">
            <SearchOutline />
          </n-icon>
        </template>
      </n-input>
      <n-botton @click="filterChange">高级</n-botton>
      <solt name="center"></solt>
    </div>
    <slot name="right"></slot>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { SearchOutline } from '@vicons/ionicons5'
const props = defineProps({
  placeholder: {
    type: String,
    default: '请输入搜索关键字',
  },
})
const searchValue = ref('')
const onSearch = () => {}
const filterChange = () => {}
</script>
