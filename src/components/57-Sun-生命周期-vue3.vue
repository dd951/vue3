<template>
    <div class="Sun">
        <h2>Sun</h2>

        <h3>计数器：{{ count }}</h3>
        <button @click="increment">计数器加1</button>
    </div>
</template>

<script lang='ts' setup name='Sun'>
    import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref } from 'vue';

    // 数据
    let count = ref(0);

    function increment() {
        count.value++;
    }

    // 创建
    console.log('创建');

    // 挂载前
    onBeforeMount(() => {
        console.log('挂载前');
        // debugger; JS/TS 代码调试技巧：debugger;
    });
    // 挂载后
    onMounted(() => {
        console.log('挂载后');
    });
    // 更新前
    onBeforeUpdate(() => {
        console.log('更新前');
    });
    // 更新后
    onUpdated(() => {
        console.log('更新后');
    });
    // 卸载前
    onBeforeUnmount(() => {
        console.log('卸载前');
    });
    // 卸载后
    onUnmounted(() => {
        console.log('卸载后');
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