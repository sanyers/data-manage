<template>
  <div @click="handleClick">
    <template v-if="isEdit">
      <n-select
        ref="inputRef"
        v-if="inputType === 'select'"
        v-model:value="inputValue"
        placeholder="请输入"
        :options="options"
        filterable
        clearable
        @blur="handleBlur"
      ></n-select>
      <n-input
        ref="inputRef"
        v-if="inputType === 'input'"
        v-model:value="inputValue"
        placeholder="请选择"
        @blur="handleBlur"
        @keyup.enter.native="handleBlur"
      >
      </n-input>
    </template>
    <template v-else>
      <NIcon size="20">
        <Pencil />
      </NIcon>
      <span>{{ inputValue }}</span>
    </template>
  </div>
</template>
<script setup lang="ts">
import { ref, nextTick } from 'vue'
import { Pencil } from '@vicons/ionicons5'
const props = defineProps({
  inputType: [String],
  value: [String],
  options: [Array],
  onChangeValue: [Function],
})
const inputValue = ref(props.value)
const isEdit = ref(false)
const inputRef = ref(null)
const handleClick = (e: any) => {
  e.stopPropagation()
  isEdit.value = true
  nextTick(() => {
    const div: any = inputRef.value
    if (div) {
      div.focus()
    }
  })
}
const handleBlur = () => {
  isEdit.value = false
  props.onChangeValue && props.onChangeValue(inputValue.value)
}
</script>
