<!-- 
v-html
作用：渲染原始 HTML（注意：动态 HTML 可能有 XSS 风险，仅用于可信内容）。 
-->
<template>
  <div v-html="rawHtml"></div>
</template>

<script setup>
    import { ref } from 'vue';

    const rawHtml = ref('<span style="color: red">红色文字</span>');
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