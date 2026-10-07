<!-- 
组件标签上使用 ref

组件标签上也可以使用 ref属性。 
通过以下的代码我们就可以在父组件中获取到子组件的实例了。SunInstance就是子组件对象。

获取子组件实例干什么呢？
- 只要是子组件使用 defineExpose对外暴露的数据或者函数，在父组件中都可以通过子组件实例对象来访问这些数据和函数。
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