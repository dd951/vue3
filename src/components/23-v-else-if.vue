<!--
 v-else-if
 作用：用于多条件判断，类似于 else if，必须紧跟在 v-if 或 v-else-if 之后。
-->
<template>
    <div v-if="score >= 90">优秀</div>
    <div v-else-if="score >= 60">及格</div>
    <div v-else>不及格</div>
</template>

<script setup>
    import { ref } from 'vue';

    const score = ref(85);
</script>

<style scoped>
    div {
        padding: 20px;
        margin: 10px;
        border-radius: 4px;
        transition: all 0.3s ease;
    }
</style>