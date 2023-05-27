<script>
import MyButton from "./components/MyButton.vue";

export default {
  //data指定实例对象的响应属性
  data() {
    return {
      msg:'132'
    }
  },

  // 指定实例对象中的方法
  // methods中的方法，每次组件重新渲染都会调用
  /* 
    这些方法最终会挂载到组件实例上
    可以通过组件实例来调用
    所有组件实例上的属性都可以在模板直接用
    methods中函数的this会被自动绑定为组件实例
  */
  methods:{
        test() {
          alert(1111)
        },

        cahngeMsg() {
          this.msg = '12321321231'
        }
  }
};
</script>

<template>
  <h1 @click="test">{{ msg }}</h1>
  <button @click="cahngeMsg">点击</button>
</template>
