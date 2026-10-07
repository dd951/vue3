<!-- 
Props

props 的核心作用：父组件 → 子组件单向传递数据
- 父组件通过组件标签的属性（props）向子组件传递数据（静态或动态）。
- 子组件通过 defineProps 接收数据，但不能直接修改（单向数据流）。 
-->

<template>
    <div class="Parent">
        <h2>Parent</h2>
        <!-- 通过 props 将静态数据传递给子组件 -->
        <Sun name='jack' age="18"/>
    </div>
</template>

<script lang="ts" setup name="Parent">
    import Sun from '../components/Sun.vue';
</script>

<style scoped>
    .Parent {
        background-color: #17e883; 
        box-shadow: 0 0 15px;
        border-radius: 15px;
        padding: 15px;
    }
</style>