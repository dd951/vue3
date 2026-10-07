<!-- 
这是之前编写 51-props-传递数组 的代码。代码存在的问题是：
- 子组件没有限定父组件必须传递过来一个 list
- 也就是说：现在父组件可以向子组件传递任意类型的数据
子组件如何限定父组件传递过来的数据类型呢？
在子组件中定义 defineProps<{list: Person[];}>();
-->


<template>
    <div class="Sun">
        <h2>Sun</h2>
        <ul>
            <li v-for="p in list" :key="p.id">
                {{ p.id }},{{ p.name }},{{ p.age }}
            </li>
        </ul>
    </div>
</template>

<script lang='ts' setup name='Sun'>

    // 类型定义
    interface Person {
        id: string;
        name: string;
        age: number;
    }

    // 这里的 'list' 是子组件接收的 prop 名称
    // 它必须与父组件绑定的属性名一致
    // defineProps(['list']);
    defineProps<{list: Person[];}>(); // 限定 props 类型为 Person[] 类型
</script>

<style scoped>
    .Sun {
        background-color: orchid;
        padding: 20px;
        margin: 10px;
        border-radius: 4px;
    }
</style>