<!-- 
v-cloak
作用：防止 Vue 未编译完成时显示 {{ }} 模板（需配合 CSS 使用） 
-->
<template>
  <div v-cloak>{{ message }}</div>
</template>

<script lang="ts" setup>
    import { ref } from 'vue';

    let message = ref("hello message!");
</script>

<style scoped>
    [v-cloak] {
        display: none;
    }
</style>