<!-- 
toRef 函数为响应式对象（reactive 对象）的某个特定属性创建一个 ref 引用，
这个 ref 会与原属性保持同步的响应式连接。主要用途：在需要将响应式对象的单
个属性作为 ref 传递时保持响应性。 
-->
<template>
    <ul>
        <li>年龄：{{ age }}</li>
    </ul>
    <button @click="changeAge">修改年龄</button>
</template>

<script lang='ts' setup name="PersonInfo">
    import { reactive, toRef } from 'vue';

    // 创建reactive响应式对象
    let person = reactive({ name: 'jack', age: 18 });

    // 为reactive响应式对象的age属性创建一个 ref 引用
    let age = toRef(person, 'age');

    const changeAge = () => {
        age.value++;
    }
</script>

<style scoped>
    div {
        padding: 20px;
        margin: 10px;
        border-radius: 4px;
        transition: all 0.3s ease;
    }
</style>