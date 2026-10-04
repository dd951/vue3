<!-- 
v-text
作用：设置元素的 textContent（相当于 {{ }}，但会覆盖整个内容）。
-->
<template>
  <div v-text="message"></div>
  <!-- 等同于 <div>{{ message }}</div> -->
</template>

<script setup>
    import { ref } from 'vue';

    const message = ref("Hello Vue 3!");
</script>

<style scoped>
    div {
        background-color: orchid;
        padding: 20px;
        margin: 10px;
        border-radius: 4px;
        transition: all 0.3s ease;
    }
</style>