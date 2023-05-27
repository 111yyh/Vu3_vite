import { createApp } from 'vue'
import App from './App.vue'

//createApp(App) 将根组件关联到应用上
//app 为一个应用实例
const app = createApp(App)
console.log('应用实例',app);

//将应用挂载到页面
//返回一个根组件实例 vm ，是一个proxy对象（代理对象）
const vm = app.mount('#app')
//此时 es6 模块化，这个文件相当于一个闭包，vm不是全局作用域下的，要想在全局访问vm，在window下设置vm
window.vm = vm
window.app = app
console.log('组件实例',vm);
