<script>
import { reactive } from 'vue';

export default {
  // setup 是一个钩子函数，可以通过这个函数向外部暴露组件的配置
  setup() {

    // 在组合式api中直接声明的变量，就是一个普通的变量，不是响应式属性
    // 修改属性时，不会在视图中产生效果
    let msg = '111';
    let count = 0;

    function dianji() {
      stu.age++
    }

    // 通过reactive() 创建一个响应式对象
    const stu = reactive({
      name : 'suu',
      age: '18'
    })

    //可以通过返回值来指定内容来暴露给外部
    return {
      msg,
      count,
      dianji,
      stu
    }
  }
}
</script>

<template>
  <h1>演示组合式API</h1>
  <h2>{{ msg }}</h2>
  <h2>{{ count }}</h2>
  <button @click="dianji">点击</button>
  <h2>{{ stu.name }} -- {{ stu.age  }}</h2>
</template>
