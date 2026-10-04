<!-- 
1、失去响应式还是不失去响应式的核心标准是：看最外层的引用指向是否发生变化，如果变化就会失去响应式，
没有变化则不会失去响应式。 
2、reactive重新分配一个新对象，会失去响应式。ref 不存在这个问题，但重新指向一个全新的 ref，
也会失去响应式，只修改 value 不会失去响应式。
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
    import { reactive } from 'vue';

    let person = reactive({name: 'jack', age: 20});

    const changeName = () => {
        person.name = 'jackson';
    }

    const changeAge = () => {
        person.age++;
    }

    const changePerson = () => {

        // 响应式失效
        //person = {name: 'lucy', age: 18};

        // 响应式同样失效，因为压根就不是同一个对象
        //person = reactive({name: 'lucy', age: 18});

        // 可以采用最笨的办法，一个属性一个属性修改
        // person.name = 'lucy';
        // person.age = 18;

        // 也可以这样做
        Object.assign(person, {name: 'lucy', age: 18}); // 是把新对象的数据合并到老对象上，老对象还是那个老对象，没有变化，所以仍然具有响应式。
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