<script>
import MyButton from "./components/MyButton.vue";
import { shallowReactive } from "vue"; // 浅层响应式对象

export default {
  data() {
    // data返回的对象最终会被vue代理
    // this.$data.xxx = xxx 动态添加响应数据 （不建议）
    // 建议将暂时没有用到的属性，也添加到data返回的对象中，值为null
    return {
      msg: "111",

      hello:'',
      // vue在构建响应式对象时，会同时将对象中的属性也做成响应式属性
      // 深层响应式对象
      stu: {
        name: "gyh",
        age: 18,
        gender: "男",
        friend: {
          name: "1123132",
        },
      },
    };

    // 有些场景下，可以通过shallowReactive() 来创建一个浅层的响应式对象
    // return shallowReactive({
    //   msg:'天气不错',
    //   stu: {
    //     name: "gyh",
    //     age: 18,
    //     gender: "男",
    //     friend: {
    //       name: '1123132'
    //     }
    //   },
    // })
  },
  components: {
    MyButton,
  },
};
</script>

<template>
  <h1>{{ msg }}</h1>
  <h2>{{ stu.name }} -- {{ stu.age }} -- {{ stu.gender }}</h2>
  <h2>{{ hello }}</h2>

  <hr />
  <MyButton></MyButton>
  <MyButton></MyButton>
</template>
