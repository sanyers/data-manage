import { h, Component } from 'vue'
import { NIcon } from 'naive-ui'
import {
  HomeOutline,
  BarChartOutline,
  SyncOutline,
} from '@vicons/ionicons5'

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}
export const navList = () => [
  { label: '首页', key: 'home', icon: renderIcon(HomeOutline) },
  { label: '数据分析', key: 'analysis', icon: renderIcon(BarChartOutline) },
  { label: '数据同步', key: 'datasync', icon: renderIcon(SyncOutline) },
]