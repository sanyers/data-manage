<template>
  <div class="search-list">
    <div class="search-left">
      <slot name="left"></slot>
      <n-input
        class="search-input"
        v-model:value="searchValue"
        :placeholder="placeholder"
        @keyup.enter.native="onSearch"
      >
        <template #suffix>
          <n-icon size="20" class="search-icon" @click="onSearch">
            <SearchOutline />
          </n-icon>
        </template>
      </n-input>
      <n-button text class="search-btn" @click="filterChange">
        <n-icon size="20"><FunnelOutline /></n-icon>
      </n-button>
      <slot name="center"></slot>
    </div>
    <slot name="right"></slot>
  </div>
  <div v-if="isFilter" ref="filterCountentRef" class="filter-content">
    <n-grid x-gap="24" y-gap="16" :cols="4" class="filter-list">
      <n-gi v-for="item in data" :key="item.bindKey" class="filter-list-item">
        <span v-if="item.labelText" class="title">{{ item.labelText }}</span>
        <n-select
          v-if="item.type === 'select'"
          class="search-inputs"
          v-model:value="item.value"
          :placeholder="item.placeholder"
          :options="item.options"
          filterable
          clearable
          @update:value="change(item)"
        ></n-select>
        <n-input
          v-if="item.type === 'input'"
          class="search-inputs"
          v-model:value="item.value"
          :placeholder="item.placeholder"
          @keyup.enter.native="onSearch"
        >
        </n-input>
      </n-gi>
    </n-grid>
    <div class="filter-bottom">
      <n-button text class="search-icon" @click="filterChange">
        <n-icon size="24"><ChevronUpCircle /></n-icon>
      </n-button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, nextTick } from 'vue'
import {
  SearchOutline,
  FunnelOutline,
  ChevronUpCircle,
} from '@vicons/ionicons5'
const props = defineProps({
  // 搜索项
  data: {
    type: Array<any>,
    default: () => [],
  },
  // 提示
  placeholder: {
    type: String,
    default: '请输入搜索关键字',
  },
  // 是否立即搜索
  imme: {
    type: Boolean,
    default: true,
  },
})
const searchValue = ref('')
const emits = defineEmits(['on-search', 'on-filter'])
const onSearch = () => {
  const values: any = {
    searchValue: searchValue.value,
  }
  props.data.forEach((element) => {
    element.value && (values[element.bindKey] = element.value)
  })
  emits('on-search', values)
}
const isFilter = ref(false)
const filterCountentRef: any = ref(null)
const filterChange = () => {
  isFilter.value = !isFilter.value
  nextTick(() => {
    let height = 0
    if (filterCountentRef.value) {
      height = filterCountentRef.value.clientHeight + 14
    }
    emits('on-filter', height)
  })
}
const change = (item: any) => {
  item.change && item.change(item.value)
  props.imme && nextTick(() => onSearch())
}
</script>
<style lang="less" scoped>
.search-list {
  display: flex;
  justify-content: space-between;
  margin-bottom: 14px;
  .search-left {
    display: flex;
    align-items: center;
    align-content: center;
    .search-btn {
      margin: 0 12px;
    }
  }
}
.filter-content {
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.08);
  margin-bottom: 14px;
  padding: 16px 14px;
  background-color: #fff;
  .search-inputs {
    width: calc(100% - 90px);
    display: inline-block;
  }
  .filter-list {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 14px;
    &-item {
      display: flex;
      align-items: center;
      .title {
        margin-right: 6px;
        width: 84px;
      }
    }
  }
  .filter-bottom {
    text-align: center;
  }
}
</style>
