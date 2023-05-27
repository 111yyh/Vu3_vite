<script setup>
    import { ref } from 'vue';

    const imgPath = ref("/images/messi.png")
    const changeImg = () => {
        imgPath.value = "/images/neymar.png"
    }

    const attrs = {
        id:'111',
        ss:'2222'
    }

    const attrName = "title"
    const attrValue = "这是一个title属性"

    const isDisabled = 0
</script>

<template>
    <!-- 
        但我们需要为标签动态的设置属性时，需要使用 v-bind 指令，简写为 :

        当我们为一个布尔值设置属性时，true 有该属性，false 没有该属性； 特殊情况： "" 空字符串 会被当成true
     --> 


     <!-- <img :src="imgPath" alt="Meixi">
     <button @click="changeImg">切换图片</button> -->

     <!-- 统一设置多个属性 -->
     <div :[attrName]="attrValue"></div>
     <div :="attrs"></div>

     <input type="text" :disabled="isDisabled">
</template>
