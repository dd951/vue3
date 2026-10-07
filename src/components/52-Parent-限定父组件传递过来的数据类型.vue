<!-- 
这是之前编写 51-props-传递数组 的代码。代码存在的问题是：
- 子组件没有限定父组件必须传递过来一个 list
- 也就是说：现在父组件可以向子组件传递任意类型的数据
子组件如何限定父组件传递过来的数据类型呢？
在子组件中定义 defineProps<{list: Person[];}>();
-->

<template>
    <div class="Parent">
        <h2>Parent</h2>
        <Sun :list="personList" />
        <!-- <Sun :list="personList2" /> 报错 类型不兼容 -->
    </div>
</template>

<script lang="ts" setup name="Parent">
    import Sun from '../components/Sun.vue';
    import { reactive } from 'vue';

    // 数据
    let personList = reactive([
        { id: '101', name: 'jack', age: 18 },
        { id: '101', name: 'lucy', age: 19 },
        { id: '101', name: 'tom', age: 20 }
    ]);

    // 测试数据-类型不兼容
    let personList2 = reactive([
        { id: 101, name: 123, age: '18' },
        { id: 102, name: 456, age: '19' },
        { id: 103, name: 789, age: '20' }
    ]);
</script>

<style scoped>
    .Parent {
        background-color: #17e883;
        box-shadow: 0 0 15px;
        border-radius: 15px;
        padding: 15px;
    }
</style>