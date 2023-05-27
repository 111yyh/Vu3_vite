import MyButton from './components/MyButton'

export default {
    data() {
        return {
            message:'vue111111111111',
        }
    },

    components:{
        MyButton
    },

    // template 是字符串的形式，这些字符串会在项目运行时，在浏览器中被编译为js的函数，性能不好；在字符串中编写，体验差；
    // 为了解决这种问题，Vue提供了 SFC 单文件组件 格式是vue
    // vue格式文件不能被浏览器识别，要利用构建工具把vue文件转换
    template:`
    <h1>{{ message }}</h1>
    <MyButton></MyButton>
    `
}