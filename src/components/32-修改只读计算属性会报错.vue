<template>
    姓：<input type="text" v-model="firstName"><br>
    名：<input type="text" v-model="lastName"><br>
    全名：{{fullName}}<br>
    <button @click="changeFullName">将全名修改为jack-son</button>
</template>

<script lang='ts' setup name="PersonInfo">
    import {computed, ref} from 'vue';

    let firstName = ref('zhang');
    let lastName = ref('san');

    // 计算属性
    let fullName = computed(() => {
        return firstName.value.slice(0, 1).toUpperCase() + firstName.value.slice(1) + '-' + lastName.value;
    });

    // 尝试修改只读的计算属性
    const changeFullName = () => {
        // 报错
        // fullName.value = 'jack-son'; // Person.vue:21 [Vue warn] Write operation failed: computed value is readonly
    };
</script>

<style scoped>
    div {
        background-color: orchid;
        padding: 20px;
        margin: 10px;
        border-radius: 4px;
    }
</style>