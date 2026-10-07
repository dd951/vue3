<!-- 
当父组件可传可不传的时候：父组件选择了不传，在子组件中可以使用 withDefaults来指定默认值
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
        id: number | string,
        name: string,
        age: number
    }

    // 如果父组件没有传则使用默认值
    withDefaults(defineProps<{ list?: Person[] }>(), {
        list: () => [
            { id: '111', name: '张三', age: 20 },
            { id: '222', name: '李四', age: 21 },
            { id: '333', name: '王五', age: 22 }
        ]
    });
</script>

<style scoped>
    .Sun {
        background-color: orchid;
        padding: 20px;
        margin: 10px;
        border-radius: 4px;
    }
</style>