<!-- 
使用配置项 deep: true开启深度监视。 

开启深度监视之后，对象地址不变的前提下，对象内部的数据发生变化时也会触发监视。
点击以下三个按钮，都会触发监视。
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

    // 开启深度监视之后，对象地址不变的前提下，对象内部的数据发生变化时也会触发监视
    const changePerson = () => {
        // 等于修改了 person 引用的内存地址，让其指向了新对象。
        person.value = {
            name: '江桥',
            age: 20
        };
    };

    watch(person, (newValue, oldValue) => {
        console.log('person changed:', newValue, oldValue);
    }, { deep: true });
</script>

<style scoped>
    .myClass {
        background-color: orchid;
        padding: 20px;
        margin: 10px;
        border-radius: 4px;
    }
</style>