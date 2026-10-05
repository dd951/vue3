<!-- 
监视 ref 定义的对象类型数据时，直接写数据名，监视的是对象的【地址值】，如果想监视对象内部的数据，
需要手动开启深度监视。

当未开启深度监视时，监视的是对象的【地址值】。

通过以下代码的测试，只有点击【修改整个人】才会触发监视。未开启深度监视时，监视的是对象的【地址值】。 
-->

<template>
    <div class="myClass">
        <div>姓名：{{ person.name }}</div>
        <div>年龄：{{ person.age }}</div>
        <div><button @click="changeName">修改姓名</button></div>
        <div><button @click="changeAge">修改年龄</button></div>
        <div><button @click="changePerson">修改整个人</button></div>
    </div>
</template>

<script lang='ts' setup>
    import { ref, watch } from 'vue';

    let person = ref({
        name: '张三',
        age: 18
    });

    const changeName = () => {
        person.value.name = '李四';
    };

    const changeAge = () => {
        person.value.age++;
    };

    const changePerson = () => {
        // 等于修改了 person 引用的内存地址，让其指向了新对象。
        person.value = {
            name: '江桥',
            age: 20
        };
    };

    // 当未开启深度监视时，监视的是对象的【地址值】
    watch(person, (newValue, oldValue) => {
        console.log('person changed:', newValue, oldValue);
    });
</script>

<style scoped>
    .myClass {
        background-color: orchid;
        padding: 20px;
        margin: 10px;
        border-radius: 4px;
    }
</style>