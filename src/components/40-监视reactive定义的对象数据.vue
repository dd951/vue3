<!-- 
监视reactive定义的对象数据

reactive 只能定义对象类型的数据，不能定义基本类型的数据。
重点：监视 reactive 定义的对象数据时，默认开启深度监视，通过 deep: false可以将深度监视关闭。
关闭深度监视后，对象的顶层属性仍然能监视到，非顶层属性无法监视到。如果你只需要监视对象的顶层属性，
建议关闭深度监视，这样能够提高效率。
-->

<template>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <h2>城市：{{ person.address.city }}</h2>
    <button @click="changeName">修改姓名</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changePerson">修改整个人</button>
    <button @click="changeCity">修改城市</button>
</template>

<script lang='ts' setup name="PersonInfo">
    import { reactive, watch } from 'vue';

    // 数据
    let person = reactive({
        name: 'jack',
        age: 18,
        address: {
            city: '北京'
        }
    });

    // 方法
    function changeName() {
        person.name += '*';
    }
    function changeAge() {
        person.age++;
    }
    function changePerson() {
        Object.assign(person, { name: 'lucy', age: 22 });
    }
    function changeCity() {
        person.address.city = '南京';
    }

    // 监视
    watch(person, (newVal, oldVal) => {
        console.log('person被修改了', newVal, oldVal);
    }, { deep: false }); // 关闭深度监视
</script>

<style scoped></style>