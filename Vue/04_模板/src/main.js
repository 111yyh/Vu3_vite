import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

// app.config.globalProperties.hello = '全局' // 添加全局变量
// app.config.globalProperties.alert = alert.bind(this) // 添加全局变量

app.mount('#app')
