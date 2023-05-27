// 
<script setup>
import { reactive } from 'vue';

  const msg = '111'
  const count = 0
  const stu = reactive({
    name:'4556'
  })

  function fn() {
    alert('11111')
  }

</script>

<template>
  <h1>组合式api</h1>
  <h2>{{ msg }}</h2>
  <h2>{{ count }}</h2>
  <button @click="fn"></button>
</template>