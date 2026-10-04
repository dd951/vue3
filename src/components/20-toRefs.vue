<!-- 
toRefs 函数将一个响应式对象（reactive 对象）转换为一个新对象，新对象的每个属性都是 ref 的，
虽然是新对象，但是该新对象的每个 ref 属性仍然连接到原始响应式对象。主要用途：解构时保持响应性。
-->
<template>
    <ul>
        <li>姓名：{{name}}</li>
        <li>年龄：{{age}}</li>
    </ul>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
</template>

<script lang='ts' setup name="PersonInfo">
    import { reactive, toRefs } from 'vue';

    // 创建reactive响应式对象
    let person = reactive({name: 'jack', age: 18});

    
    // 对象解构
    //let {name, age} = person; // 默认情况下，一个 reactive 对象解构之后，生成的每个变量不具备响应性
    
    let {name, age} = toRefs(person); // 使用 toRefs可以让其继续保持响应性

    const changeName = () => {
        // name += '*';
        name.value += '*';
    }

    const changeAge = () => {
        // age++;
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