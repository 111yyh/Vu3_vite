<script>
// const obj = {
//   msg: "11obj",
// };
// window.obj = obj
export default {
  //在data中，this就是当前的组件实例
  //如果使用箭头函数，则无法通过this访问组件实例
  //vue中减少使用箭头函数
  data() {
    console.log("data", this);

    // 直接在组件实例添加的属性，不会被vue代理，不是响应式数据
    // this.name = '132'

    // vm.$data 是实际的代理对象
    // vm.$data.msg 等价于 vm.msg

    // data会返回一个对象作为返回值，vue会对该对象进行代理，从而将其转换为响应式数据
    // 响应式数据都可以通过组件实例访问
    return {
      msg: "Vue3",
    };
  },

  created() {
    // 会在组件创建完毕后调用
    // 可以通过vm.$data动态的向组件中添加响应式数据,但不建议这么做
    this.$data.name = "132";
  },
};
</script>

<template>
  <h1>{{ msg }}</h1>
  <h2>{{ name }}</h2>
</template>
