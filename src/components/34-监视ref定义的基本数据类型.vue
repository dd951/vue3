<!-- 
作用：监视数据的变化。

监视和计算属性的区别？
- 监视目的是：监视某个数据的变化，当数据变化时，执行回调函数，在回调函数中处理业务。
- 计算属性的目的是：最终返回一个值。（返回一个计算之后的值），计算属性的实现依赖于缓存机制。

特点：Vue3 中的监视只能监视以下四种数据：
1. 一个函数，返回一个值。
2. 一个 ref
3. 一个 reactive 对象
4. ...或是由以上类型的值组成的数组。

监视ref定义的基本数据类型
默认情况下：
1. 监视ref(0)时，监视的是 0 这个数字的变化，只要数字变化就能监视到。
2. 监视 ref({name:"jack", age: 20})，监视的是 {name:"jack", age: 20}对象有没有变成新对象。
如果要监视对象中的 name和 age属性的需要开启深度监视。
-->

<template>
    <div>
        <h2>count = {{ count }}</h2>
        <button @click="addOne">计数器加1</button>
    </div>
</template>

<script lang='ts' setup>
    import { ref, watch } from 'vue';

    let count = ref(0);

    const addOne = () => {
        count.value++;
    };

    // 监视：只要count一发生变化，立即执行回调函数
    // 需要引起的注意：第一个参数是被监视的对象，你不能写 count.value 哈。因为官方说了只能监视四种数据：count.value不在这四种数据范围之内。
    watch(count, (newValue, oldValue) => {
        console.log(`count changed from ${oldValue} to ${newValue}`);
    });
</script>

<style scoped>
    div {
        background-color: orchid;
        padding: 20px;
        margin: 10px;
        border-radius: 4px;
    }
</style>