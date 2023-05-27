// 
<script setup>
import { reactive, ref } from 'vue';

/* 
  reactive()
    返回一个响应式对象
    返回的是深层响应式对象
    也可以使用shallowReactive()创建一个浅层的响应式对象

    缺点：只能返回对象的响应式代理，不能处理原始值

  ref()
    接收一个任意值，并返回它的响应式代理
*/
  const stu = reactive({
    name:'456'
  })

  //ref在生成响应式代理时，将值包装成一个对象   0 --> {value: 0}
  // 访问ref对象时，必须通过 对象.value 来访问
  // 在模板中，ref对象会被自动解包
  const count = ref(0) //生成了0的响应式代理，
  
  // vue提供了语法糖，使得ref对象在script中也可以自动解包
  // $ 是实验性的，需要在vite插件中做一些配置 reactivityTransform: true
  function fn() {
    count.value++
  }

</script>

<template>
  <h1>组合式api</h1>
  <h2 @click="fn">{{ count }}</h2>
</template>