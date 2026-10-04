<!-- 
v-once
作用：仅渲染一次，后续数据变化不会更新（适用于静态内容优化）。 
-->
<template>
  <div v-once>{{ staticMessage }}</div>
  <!-- 即使 staticMessage 变化，这里也不会更新 -->
</template>

<script setup>
    import { ref } from 'vue';

    const staticMessage = ref("这段内容只渲染一次");
</script>

<style scoped>
    [v-cloak] {
        display: none;
    }
</style>