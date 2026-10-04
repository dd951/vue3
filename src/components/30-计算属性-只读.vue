<!-- 
  let computedProperty = computed(()=>{
    // 执行计算逻辑，只要计算属性关联的任意属性值发生变化，计算属性的函数就会被调用一次。
    // 但如果计算属性关联的所有属性值都没有发生变化，计算属性的值会自动从缓存中获取。因此计算属性是支持缓存的。
    return 值; // 这个值就是计算属性的值。
  });
  注意：计算属性返回的也是一个 Ref 响应式对象。
-->
<template>
    姓：<input type="text" v-model="firstName"><br>
    名：<input type="text" v-model="lastName"><br>
    全名：{{fullName}}
    <!-- 直接从缓存中取，不再执行计算过程。计算属性是支持缓存的。 -->
    全名：{{fullName}}
</template>

<script lang='ts' setup name="PersonInfo">
    import {computed, ref} from 'vue';

    let firstName = ref('zhang');
    let lastName = ref('san');

    // 计算属性
    let fullName = computed(() => {
        return firstName.value.slice(0, 1).toUpperCase() + firstName.value.slice(1) + '-' + lastName.value;
    });
</script>

<style scoped>
    div {
        background-color: orchid;
        padding: 20px;
        margin: 10px;
        border-radius: 4px;
    }
</style>