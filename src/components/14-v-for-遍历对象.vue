<template>
    <!-- 遍历对象 -->
    <div>
        <ul>
            <li v-for="(propertyValue, propertyName, index) in person" :key="propertyName">
                {{propertyValue}},{{index}},{{propertyName}}
            </li>
        </ul>
    </div>
</template>

<script lang='ts' name="PersonInfo" setup>
    let person = {
        name: 'jackson',
        age: 20,
        tel: '13000232124'
    };
</script>

<style scoped>
div {
    padding: 20px;
    margin: 10px;
    border-radius: 4px;
    transition: all 0.3s ease;
}
</style>