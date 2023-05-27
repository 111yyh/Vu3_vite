<script>
import MyButton from "./components/MyButton.vue";

export default {
  //data指定实例对象的响应属性
  data() {
    return {
      stu:{
        name:'415546',
        age:18,
        gender:'nan'
      },
      firstName:'san',
      lastName:'zhang'
    }
  },
  methods:{
    changeAge() {
      this.stu.age = 17
    }
  },

  /* 
    computed 用来指定计算属性
    {
      属性名：getter
    }
    计算属性，只在其依赖的数据发生变化时才会重新执行
    会对数据进行缓存
  */
  computed:{
    age(){
      return this.stu.age >= 18 ? '成年人':'未成年'
    },

    // 可以为计算属性设置setter，使计算属性可写，但不建议
    name: {
      get() {
        return this.lastName + this.firstName
      },
      set(val) {
        console.log(val);
        this.lastName = val[0]
        this.firstName = val.slice(1)
      }
    }

  }
};
</script>

<template>
  <h1 @click="changeAge">{{ stu.name }} -- {{ stu.age }} -- {{ stu.gender }}</h1>
  <h2>评语：{{ age }}</h2>
  <h3>{{ name }}</h3>
</template>
