<!-- 
props 传递数组 
-->

<template>
    <div class="Parent">
        <h2>Parent</h2>
        <Sun :list="personList"/>
    </div>
</template>

<script lang="ts" setup name="Parent">
    import Sun from '../components/Sun.vue';
    import { reactive } from 'vue';
    
    // 数据
    let personList = reactive([
        {id: '101', name: 'jack', age: 18},
        {id: '101', name: 'lucy', age: 19},
        {id: '101', name: 'tom', age: 20}
    ]);
</script>

<style scoped>
    .Parent {
        background-color: #17e883; 
        box-shadow: 0 0 15px;
        border-radius: 15px;
        padding: 15px;
    }
</style>