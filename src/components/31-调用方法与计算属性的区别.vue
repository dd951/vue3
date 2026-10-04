<!-- 
调用方法和计算属性的区别 :
1. 调用方法：每次调用都会执行函数，返回最新的值。效率低，没有缓存。
2. 计算属性：只要计算属性关联的任意属性值发生变化，计算属性的函数就会被调用一次。
但如果计算属性关联的所有属性值都没有发生变化，计算属性的值会自动从缓存中获取。
因此计算属性是支持缓存的。

-->
<template>
    姓：<input type="text" v-model="firstName"><br>
    名：<input type="text" v-model="lastName"><br>
    全名：{{fullName()}}<br>
    全名：{{fullName()}}<br>
</template>

<script lang='ts' setup name="PersonInfo">
    import { ref } from 'vue';

    let firstName = ref('zhang');
    let lastName = ref('san');

    function fullName() {
        console.log('fullName()方法执行了');
        return firstName.value.slice(0, 1).toUpperCase() + firstName.value.slice(1) + '-' + lastName.value;
    }
</script>

<style scoped>
    div {
        background-color: orchid;
        padding: 20px;
        margin: 10px;
        border-radius: 4px;
    }
</style>