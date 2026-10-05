<!-- 
配置项 immediate: true开启之后，会开启立即监视，页面加载完毕立即监视一次。
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

    // deep: true开启深度监视，immediate: true开启立即监视
    watch(person, (newValue, oldValue) => {
        console.log('person changed:', newValue, oldValue);
    }, { deep: true, immediate: true });
</script>

<style scoped>
    .myClass {
        background-color: orchid;
        padding: 20px;
        margin: 10px;
        border-radius: 4px;
    }

    button {
        margin: 5px 0;
    }
</style>