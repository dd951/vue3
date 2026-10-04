<template>
    <!-- v-for 指令 -->
    <div>
        <ul>
            <li v-for="person in personList" :key="person.id">
                {{person.name}},{{person.age}}
            </li>
        </ul>
    </div>
</template>

<script lang='ts' name="PersonInfo" setup>
  
    let personList = [
        {id: '101', name: 'jack', age: 20},
        {id: '102', name: 'lucy', age: 30},
        {id: '103', name: 'tom', age: 25}
    ];
</script>

<style scoped>
div {
    padding: 20px;
    margin: 10px;
    border-radius: 4px;
    transition: all 0.3s ease;
    /* 过渡效果 0.3秒内完成，使用ease曲线，all 是指所有属性 */
}
</style>
