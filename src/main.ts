import { createApp } from 'vue'
import './style.less'
import App from './App.vue'
import router from './router'
import naive from './plugins/naive-ui'

const app = createApp(App)

app.use(router)
app.use(naive)

app.mount('#app')
