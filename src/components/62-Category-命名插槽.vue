<template>
    <div class="category">
        <h2>{{ title }}</h2>
        <!-- 具名插槽 -->
        <slot name="s"></slot>
    </div>
</template>

<script lang='ts' setup name="Category">
    defineProps(['title']);
</script>

<style scoped>
.category{
    background-color: skyblue;
    border-radius: 10px;
    box-shadow: 0 0 10px;
    padding: 10px;
    width: 300px;
    height: 400px;
}
h2 {
    background-color: orange;
    text-align: center;
}
</style>