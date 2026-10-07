<!-- 
v-if指令和v-show指令

这两个指令都可以控制组件的显示和隐藏，true 显示 false 隐藏，区别是：
1. v-if隐藏时会彻底删除组件。
2. v-show隐藏时只是把 display的样式修改为 none，不会删除组件。
-->

<template>
    <div class="Sun">
        <h2>Sun</h2>

        <h3 v-if="flag1">v-if指令</h3>
        <h3 v-show="flag2">v-show指令</h3>
    </div>
</template>

<script lang='ts' setup name='Sun'>
    import { ref } from 'vue';

    let flag1 = ref(true);

    let flag2 = ref(true);
</script>

<style scoped>
    .Sun {
        background-color: orchid;
        padding: 20px;
        margin: 10px;
        border-radius: 4px;
    }
</style>