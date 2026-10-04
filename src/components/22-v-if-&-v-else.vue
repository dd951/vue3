<!-- 
v-if
作用：用于根据表达式的真假来渲染不同的内容。

 v-else
作用：必须紧跟在 v-if 或 v-else-if 之后，表示“否则”情况。 
-->
<template>
  <div v-if="isLoggedIn">欢迎回来！</div>
  <div v-else>请先登录</div>
</template>

<script setup>
    import { ref } from 'vue';

    const isLoggedIn = ref(false);
</script>

<style scoped>
    div {
        padding: 20px;
        margin: 10px;
        border-radius: 4px;
        transition: all 0.3s ease;
    }
</style>