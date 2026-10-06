<!-- 
特点：Vue3 中的监视只能监视以下四种数据：
1. 一个函数，返回一个值。
2. 一个 ref
3. 一个 reactive 对象
4. ...或是由以上类型的值组成的数组。 
-->

<template>
    <div class="myClass">
        <h2>姓名：{{ person.name }}</h2>
        <h2>所在城市：{{ person.address.city }}</h2>
        <h2>所在街道：{{ person.address.street }}</h2>
        <button @click="changeName">修改姓名</button>
        <button @click="changeCity">修改城市</button>
        <button @click="changeStreet">修改街道</button>
        <button @click="changeAddress">修改整个地址</button>
    </div>
</template>

<script lang='ts' setup name="PersonInfo">
    import { reactive, watch } from 'vue';

    // 数据
    let person = reactive({
        name: '张三',
        address: {
            city: '北京',
            street: '朝阳街道'
        }
    });

    // 方法
    function changeName() {
        person.name = '李四';
    }
    function changeCity() {
        person.address.city = '南京';
    }
    function changeStreet() {
        person.address.street = '中山街道';
    }
    function changeAddress() {
        person.address = {
            city: '上海',
            street: '梧桐街道'
        };
    }

    // 需求：要监视 person.name以及 person.address.street，代码应该这样写。这里没有开启深度监视，因为 person.name是基本类型，person.address.street是对象的属性，都是基本类型，所以不需要开启深度监视。
    watch([() => person.name, () => person.address.street], (newVal, oldVal) => {
        console.log('数据被修改了', newVal, oldVal);
    });

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