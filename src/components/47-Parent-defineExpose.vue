<!-- 
父组件中使用 ref获取子组件实例
子组件实例上的数据如何暴露给父组件，可以在子组件中使用 defineExpose 
-->

<template>
    <div class="Parent">
        <h3>Parent</h3>
        <Sun ref="sunInstance"></Sun>
        <button @click="showSunInstance">输出Sun组件实例</button>
    </div>
</template>

<script lang="ts" setup name="MyApp">
    import { ref } from 'vue';
    import Sun from '../components/Sun.vue';

    // 这个变量代表的是Sun组件实例哦！！！！！！！！
    let sunInstance = ref();

    function showSunInstance() {
        // 获取的是组件对应的代理对象Proxy。
        console.log(sunInstance.value);
        console.log('Sun组件实例上的数据', sunInstance.value.a);
        console.log('Sun组件实例上的函数', sunInstance.value.haha);
    }
</script>

<style scoped>
    .Parent {
        background-color: #17e883; 
        box-shadow: 0 0 15px;
        border-radius: 15px;
        padding: 15px;
    }
</style>