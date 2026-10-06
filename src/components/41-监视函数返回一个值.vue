<!-- 
特点：Vue3 中的监视只能监视以下四种数据：
1. 一个函数，返回一个值。
2. 一个 ref
3. 一个 reactive 对象
4. ...或是由以上类型的值组成的数组。

1. 监视响应式对象中的某个属性时
  1.1 如果属性是基本类型的，需要将该属性包装为 getter 函数。
  2.2 如果属性是对象类型的，可以直接写对象，也可以将其包装为 getter 函数。
    2.2.1 直接写对象时：默认就会开启深度监视。但对象整体被替代时，不会触发监视。
    2.2.2 包装为 getter 函数时，需要添加 deep:true来开启深度监视。这样对象被整体替代，或者对象内部属性被修改，都会触发监视。
      2.2.2.1 为什么要手动开启 deep:true才行？因为 getter 函数返回的是对象引用，只有对象引用发生变化才能监视到，只修改对象的属性，不会导致对象的引用发生变化，所以监视不到，因此要开启 deep:true
2. 最终如何选择？
  2.1. 如果要深度监视整个对象，建议使用 getter 函数，同时开启深度监视。
  2.2. 如果要监视对象中的某个属性，不需要全部监视，当然只能使用 getter 函数。 
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

<script lang='ts' setup>
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

    // 监视响应式对象的基本类型属性时，需要提供一个getter函数。
    // watch(() => person.name, (newVal, oldVal) => {
    //     console.log('person.name被修改了', newVal, oldVal);
    // });

    // 监视响应式对象的对象类型属性时，直接编写对象是可以的，但对象内部属性变化时可以监视到，对象被整体替换时不会被监视到。
    // watch(person.address, (newVal, oldVal)=>{
    //     console.log('person.address被修改了', newVal, oldVal);
    // });

    // 监视响应式对象的对象类型属性时，提供一个getter函数的话，对象被整体替换时会被监视到，对象内部的属性变化时不会被监视到。
    // watch(() => person.address, (newVal, oldVal)=>{
    //     console.log('person.address被修改了', newVal, oldVal);
    // });

    // 监视响应式对象的对象类型属性时的最终建议：提供一个getter函数，开启深度监视。
    // 这样对象内部属性变化时，以及对象被整体替换时，都会被监视到。
    watch(() => person.address, (newVal, oldVal) => {
        console.log('person.address被修改了', newVal, oldVal);
    }, { deep: true });

    // 如果你仅仅需要监视对象的某个属性，则建议使用getter函数，指定对应的某个属性开启监视。这样性能也高。
    // watch(() => person.address.city, (newVal) => { })
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