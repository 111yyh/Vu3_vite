<script setup>
import { ref } from 'vue';
  // 0 球员 1 球队
  const current = ref(0)

</script>

<template>
  <!-- 选项卡的外部容器 -->
  <div class="tab-wrapper">
    <!-- 选项卡的头部 -->
    <header class="tab-head">
      <div @click="current = 0" class="tab-button" :class="{active:current === 0}">热门球员</div>
      <div @click="current = 1" class="tab-button" :class="{active:current === 1}">热门球队</div>
    </header>
    <!-- 选项卡的主体 -->
    <div class="main"></div>
  </div>
</template>

<style scoped>
  .tab-wrapper {
    width: 800px;
    box-sizing: border-box;
    padding: 20px;
    background-color: rgb(45, 83, 211);
  }
  .tab-head {
    display: flex;
    border-radius: 10px;
    overflow: hidden;
  }
  .tab-button {
    background-color: #fff;
    font-size: 30px;
    padding: 10px 0;
    text-align: center;
    cursor: pointer;
    flex:auto;
    transition: 0.2s;
  }
  .tab-button:not(.active):hover {
    color:rgb(187, 3, 52);
  }
  .active{
    background-color: rgb(187, 3, 52);
    color: #fff;
  }
</style>