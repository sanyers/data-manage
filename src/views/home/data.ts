import { h } from "vue"
import InputType from './components/input-type.vue'
import SpanType from './components/span-type.vue'
import PopoverLink from './components/popover-link.vue'
import ActionBtn from './components/action-btn.vue'

export const filterList = () => [
  {
    type: 'select',
    bindKey: 'departName',
    value: null,
    labelText: '归属部门',
    placeholder: '请选择归属部门',
    options: [
      { label: '部门1', value: '部门1' },
      { label: '部门2', value: '部门2' }
    ]
  },
  {
    type: 'select',
    bindKey: 'groupName',
    value: null,
    labelText: '归属团队',
    placeholder: '请选择归属团队',
    options: [
      { label: '团队1', value: '团队1' },
      { label: '团队2', value: '团队2' }
    ]
  },
  {
    type: 'input',
    bindKey: 'keyword1',
    value: null,
    labelText: '关键字1',
    placeholder: '请选择关键字1',
  },
  {
    type: 'input',
    bindKey: 'keyword2',
    value: null,
    labelText: '关键字2',
    placeholder: '请选择关键字2',
  }
]

export const columns = () => [
  { title: '服务名称', key: 'serviceName', },
  { title: '服务标识', key: 'serviceTag', },
  {
    title: '服务编号', key: 'serviceNo', width: 150,
    ellipsis: {
      tooltip: true
    }
  },
  {
    title: '开发负责人',
    key: 'techFzr',
    render(row: any) {
      const inputType = 'select'
      const value = row.techFzr
      const options: Array<any> = [
        { label: '小明', value: '小明' },
        { label: '小李', value: '小李' }
      ]
      const onChangeValue = (val: any) => {
        console.log(val)
      }
      return h(InputType, { class: 'flex-div', inputType, value, options, onChangeValue })
    }
  },
  {
    title: '运维负责人',
    key: 'operationFzr',
    render(row: any) {
      const inputType = 'input'
      const value = row.operationFzr
      const onChangeValue = (val: any) => {
        console.log(val)
      }
      return h(InputType, { class: 'flex-div', inputType, value, onChangeValue })
    }
  },
  {
    title: '归属系统名称',
    key: 'systemName',
    render(row: any) {
      const links = [
        { name: '数据分析', path: '/analysis' },
        { name: '数据同步', path: '/datasync' }
      ]
      const value = row.systemName
      const p = h(PopoverLink, { links })
      const s = h(SpanType, { value })
      return h('div', { class: 'flex-div' }, [p, s])
    }
  },
  {
    title: '归属系统编号',
    key: 'systemNo',
    render(row: any) {
      const value = row.systemNo
      return h(SpanType, { value })
    }
  },
  {
    title: '操作',
    key: 'actions',
    render(row: any) {
      return h(ActionBtn, { data: row })
    }
  }
]
export const tableList = () => [
  {
    serviceName: '管理后台',
    serviceTag: 'newone-ts',
    serviceNo: 'BS188-newone-ts',
    techFzr: '张三',
    operationFzr: '李四',
    systemName: '官网系统',
    systemNo: 'BS188',
  },
  {
    serviceName: '管理后台',
    serviceTag: 'newone-ts',
    serviceNo: 'BS188-newone-expert',
    techFzr: '张三',
    operationFzr: '李四',
    systemName: '官网系统',
    systemNo: 'BS188',
  },
  {
    serviceName: '管理后台',
    serviceTag: 'newone-ts',
    serviceNo: 'BS188-newone-main',
    techFzr: '张三',
    operationFzr: '李四',
    systemName: '官网系统',
    systemNo: 'BS188',
  },
  {
    serviceName: '管理后台',
    serviceTag: 'newone-ts',
    serviceNo: 'BS188-newone-aaa',
    techFzr: '张三',
    operationFzr: '李四',
    systemName: '官网系统',
    systemNo: 'BS188',
  },
  {
    serviceName: '管理后台',
    serviceTag: 'newone-ts',
    serviceNo: 'BS188-newone-bbb',
    techFzr: '张三',
    operationFzr: '李四',
    systemName: '资讯系统',
    systemNo: 'BS188',
  },
  {
    serviceName: '管理后台',
    serviceTag: 'newone-ts',
    serviceNo: 'BS188-newone-ccc',
    techFzr: '张三',
    operationFzr: '李四',
    systemName: '资讯系统',
    systemNo: 'BS188',
  }
]