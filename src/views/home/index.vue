<template>
  <div class="home-page">
    <h2 class="title">数据列表</h2>
    <SearchList
      :data="searchData"
      @on-search="onSearch"
      @on-filter="onFilter"
    ></SearchList>
    <div class="table-page" :style="{ height: `calc(100% - ${height}px)` }">
      <n-data-table
        :loading="loading"
        remote
        flex-height
        :row-key="rowKey"
        :columns="columnsData"
        :data="tableData"
        :bordered="false"
        :pagination="paginationData"
        :row-props="rowProps"
        @update:page="handlePage"
        @update-page-size="handlePageSize"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import SearchList from '@/components/search-list/index.vue'
import { filterList, columns, tableList } from './data'
import pagination from './pagination'
const searchData = ref(filterList())
const height = ref(94)
const onSearch = (val: any) => {
  console.log(val)
  getTableData()
}
const onFilter = (val: number) => {
  height.value = 94 + val
}
const loading = ref(false)
const rowKey = (row: any) => row.serviceNo
const columnsData = ref(columns())
const tableData = ref<Array<any>>([])
const rowProps = (row: any) => {
  return {
    // 单击行
    onClick: () => {
      console.log(row)
    },
    // 鼠标进入行
    onMouseenter: () => {},
    // 鼠标离开行
    onMouseleave: () => {},
  }
}
const getTableData = () => {
  loading.value = true
  setTimeout(() => {
    tableData.value = tableList()
    loading.value = false
    paginationData.value.pageCount = 16
    paginationData.value.itemCount = 151
  }, 2000)
}
const handlePage = (page: number) => {
  paginationData.value.page = page
  getTableData()
}
const handlePageSize = (pageSize: number) => {
  paginationData.value.page = 1
  paginationData.value.pageSize = pageSize
  getTableData()
}
const paginationData = ref(pagination)
onMounted(() => getTableData())
</script>
<style lang="less" scoped>
.home-page {
  .title {
    padding: 0;
    margin: 0;
    margin-bottom: 12px;
  }
  .table-page {
    background-color: #fff;
    box-sizing: border-box;
    position: relative;
    .n-data-table {
      height: 100%;
      padding: 12px;
      box-sizing: border-box;
    }
  }
}
</style>
