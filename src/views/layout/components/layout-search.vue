<template>
  <n-drawer
    v-model:show="active"
    :show-mask="false"
    height="calc(100% - 64px)"
    placement="bottom"
    class="layout-search"
    style="
      background-color: rgba(255, 255, 255, 0.8);
      backdrop-filter: blur(4px);
    "
  >
    <n-drawer-content title="" closable>
      <div class="search-big">
        <n-input-group>
          <n-input
            ref="searchValueRef"
            class="search-input"
            v-model:value="searchValue"
            placeholder="请输入"
            @keyup.enter.native="onSearch"
          />
          <n-button type="primary" class="search-btn" @click="onSearch">
            搜索
          </n-button>
        </n-input-group>
      </div>
    </n-drawer-content>
  </n-drawer>
</template>
<script lang="ts" setup>
import { ref, nextTick } from 'vue'
const active = ref(false)
const searchValue = ref<string | null>(null)
const searchValueRef = ref(null)
const show = () => {
  active.value = true
  searchValue.value = ''
  nextTick(() => {
    const div: any = searchValueRef.value
    if (div) {
      div.focus()
    }
  })
}
const hide = () => {
  active.value = false
}
defineExpose({ show, hide })
const onSearch = () => {
  console.log(searchValue.value)
}
</script>
<style lang="less" scoped>
.layout-search {
  .search-big {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .n-input-group {
      width: auto;
      transform: scale(1.6);
    }
    ::v-deep(.search-input) {
      width: 450px;
      &:not(.n-input--disabled).n-input--focus .n-input__state-border {
        box-shadow: 0px 8px 24px 0px rgb(24 160 86 / 16%);
      }
    }
    .search-btn {
      box-shadow: 0px 8px 24px 0px rgb(24 160 86 / 16%);
    }
  }
}
</style>
