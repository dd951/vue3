<!-- 
props 传递数组 
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
    // 这里的 'list' 是子组件接收的 prop 名称
    // 它必须与父组件绑定的属性名一致
    defineProps(['list']);
</script>

<style scoped>
    .Sun {
        background-color: orchid;
        padding: 20px;
        margin: 10px;
        border-radius: 4px;
    }
</style>