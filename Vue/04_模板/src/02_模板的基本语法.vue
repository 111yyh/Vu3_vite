<script setup>
    const msg = "hello";
    const html = `<h2>1111</h2>`
</script>

<template>
    <!-- 
        - 在模板中，可以直接访问到组件中声明的变量
        - 除了组件中的变量外，vue也为我们提供了一些全局对象可以访问：
            比如：Date，Math，RegExp等  详情：https://github.com/vuejs/core/blob/main/packages/shared/src/globalsWhitelist.ts#L3
            除此之外，也可以通过app对象来向vue中添加全局变量
            app.config.globalProperties.hello = '全局' // 添加全局变量
            app.config.globalProperties.alert = alert.bind(this) // 添加全局变量
        - 使用插值语法时，只能使用表达式
            表达式，就是有返回值的语句
        - 插值就是修改元素的textContent，如果内容含有标签，也会显示出来

    指令：
        - 指令时模板中为标签设置的一些特殊属性 ，用来设置标签如何显示内容
        - 指令使用 v- 开头
        v-text 将值作为元素的textContent插入，作用同{{ }}
        
        v-html 将值作为元素的innerHtml插入， 有xss攻击的风险
     -->
     
    <!-- <h1>{{ hello }}</h1>
    <h2>{{ alert(11) }}</h2> -->
    <h1>{{ msg }}</h1>
    <h2>{{ Math.random() }}</h2>
    <h2>{{ new Date() }}</h2>

    <div>{{ html }}</div>
    
    <div v-text="html"></div>

    <div v-html="html"></div>
</template>
