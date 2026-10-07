<!-- 
defineExpose

子组件实例上的数据如何暴露给父组件，可以在子组件中使用 defineExpose 
-->

<template>
    <div class="Sun">
        <h3>Sun</h3>
    </div>
</template>

<script lang='ts' setup>
    import { ref } from 'vue';

    let a = ref(100);

    function haha() {
        console.log('哈哈哈，你好呀');
    }

    // 暴露给父组件
    defineExpose({
        a: a, // 暴露数据
        haha: haha // 暴露函数
    });
</script>

<style scoped>
    .Sun {
        background-color: orchid;
        padding: 20px;
        margin: 10px;
        border-radius: 4px;
    }
</style>