<!-- 
子组件可以强制要求父组件必须传递过来数据。当然，子组件也可以要求父组件传递数据时：可传可不传 
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

    // 添加一个?号，表示可传可不传
    defineProps<{list?: Person[];}>(); // 限定 props 类型为 Person[] 类型
</script>

<style scoped>
    .Sun {
        background-color: orchid;
        padding: 20px;
        margin: 10px;
        border-radius: 4px;
    }
</style>