<template>
    <div>
        <h2>购物清单</h2>
        <ul>
            <li v-for="(item, index) in shoppingList" :key="item.id">
                {{ index + 1 }}. {{ item.name }} - 数量: {{ item.quantity }}
                <button @click="removeItem(index)">删除</button>
            </li>
        </ul>
        <button @click="changeFirstItemQuantity">将第一个商品的数量修改为5</button>
    </div>
</template>

<script lang="ts" setup name="PersonInfo">
import { reactive } from 'vue'

const shoppingList = reactive([
    { id: 1, name: '苹果', quantity: 3 },
    { id: 2, name: '牛奶', quantity: 1 },
    { id: 3, name: '面包', quantity: 2 }
])

function removeItem(index: number) {
    shoppingList.splice(index, 1); // 删除索引为 index 的元素，删除 1 个元素
}
// 箭头函数也可以。
const changeFirstItemQuantity = () => {
    shoppingList[0]!.quantity = 5; // ! 非空断言，表示确保 shoppingList[0] 不为 null 或 undefined
}
</script>

<style scoped>
div {
    padding: 20px;
    margin: 10px;
    border-radius: 4px;
    transition: all 0.3s ease;
}
</style>