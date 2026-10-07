<!-- 
Props

props 的核心作用：父组件 → 子组件单向传递数据
- 父组件通过组件标签的属性（props）向子组件传递数据（静态或动态）。
- 子组件通过 defineProps 接收数据，但不能直接修改（单向数据流）。 

父组件中的代码：使用 v-bind:或者 :来动态传递数据。
子组件中的代码不需要修改。
-->

<template>
    <div class="Sun">
        <h2>Sun</h2>
        <h3>姓名：{{ name }}</h3>
        <h3>年龄：{{ age }}</h3>
    </div>
</template>

<script lang='ts' setup name='Sun'>
    // 通过 defineProps 来接收父组件传递过来的数据。
    // 程序执行到这里就完成了接收，并且此时在模板中已经可以用了。
    // 另外需要注意的是：defineProps()的参数要求必须是一个数组。只有一个参数也需要数组。
    //defineProps(['name', 'age']);

    // 如果你想在接下来的代码中使用父组件中的数据，可以获取defineProps()返回值
    // defineProps()方法的返回值是一个对象。
    // 这里的 'name' 'age' 是子组件接收的 prop 名称, 它必须与父组件绑定的属性名一致
    const fromParentDataObj = defineProps(['name', 'age']);

    console.log(fromParentDataObj.name, fromParentDataObj.age);
</script>

<style scoped>
    .Sun {
        background-color: orchid;
        padding: 20px;
        margin: 10px;
        border-radius: 4px;
    }
</style>