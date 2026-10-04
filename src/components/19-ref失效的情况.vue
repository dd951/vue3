<!-- 
reactive重新分配一个新对象，会失去响应式。ref 不存在这个问题，但重新指向一个全新的 ref，
也会失去响应式，只修改 value 不会失去响应式。

使用原则：ref和 reactive应该如何选择？
1. 如果需要一个基本类型数据的响应式，必须使用 ref
2. 如果需要一个响应式对象，但层次不深，ref 和 reactive 都可以。
3. 如果需要一个响应式对象，且层次较深，建议使用 reactive。
-->
<template>
    <div>
        <ul>
            <li>姓名：{{person.name}}</li>
            <li>年龄：{{person.age}}</li>
        </ul>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changePerson">修改用户信息</button>
    </div>
</template>

<script lang='ts' setup>
    import { ref } from 'vue';

    let person = ref({name: 'jack', age: 20});

    const changeName = () => {
        person.value.name = 'jackson';
    }

    const changeAge = () => {
        person.value.age++;
    }

    const changePerson = () => {
        // 必须 .value
        person.value = {name: 'lucy', age: 18};
        // 这样也会失去响应式。
        //person = ref({name: 'lucy', age: 18});
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