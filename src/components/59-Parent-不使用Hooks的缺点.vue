<!-- 
  不使用Hooks的缺点
-->
<template>
    <div class="Parent">
        <h2>Parent</h2>
        <Sun />
    </div>
</template>

<script lang="ts" setup name="Parent">
    import Sun from '../components/Sun.vue';
</script>

<style scoped>
    .Parent {
        background-color: #17e883;
        box-shadow: 0 0 15px;
        border-radius: 15px;
        padding: 15px;
    }
</style>