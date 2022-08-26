import { h } from 'vue'

const span = (value: any, props: any = null) => {
  return h('span', props, value)
}
export default {
  page: 1,
  pageCount: 0,
  pageSize: 10,
  itemCount: 0,
  pageSizes: [
    { label: '10 / 页', value: 10 },
    { label: '20 / 页', value: 20 },
    { label: '50 / 页', value: 50 },
  ],
  showSizePicker: true,
  prefix(info: any) {
    const leftTxt = span('共')
    const centerTxt = span(info.itemCount, { style: 'color:#000' })
    const rightTxt = span('条')
    return span([leftTxt, centerTxt, rightTxt])
  },
  next() {
    return '下一页'
  },
  prev() {
    return '上一页'
  }
}