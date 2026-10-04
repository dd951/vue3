<!-- 
 计算属性可读可写的语法格式
   let computedProperty: WritableComputedRef<string> = computed({
    get(){
      // 当读取计算属性的值时，该方法会被调用。
      return 值;
    },
    set(val){
      // 当修改计算属性的值时，该方法会被调用。
    }
  });

  总结：
    - 只读的计算属性：computed(回调函数)
    - 可读可写的计算属性：computed({对象中写 get 和 set 方法})
-->
<template>
    姓：<input type="text" v-model="firstName"><br>
    名：<input type="text" v-model="lastName"><br>
    <!-- 这里会自动调用计算属性的 get() 方法 -->
    全名：{{fullName}}<br>
    <button @click="changeFullName">将全名修改为Jack-son</button>
</template>

<script lang='ts' setup name="PersonInfo">
    import {computed, ref} from 'vue';

    let firstName = ref('张');
    let lastName = ref('三');

    // 计算属性（注意TS类型要使用 WritableComputedRef）
    let fullName = computed({
        get(){
            return firstName.value.slice(0, 1).toUpperCase() + firstName.value.slice(1) + '-' + lastName.value;
        },
        set(val){
            // 解构语法（给默认值，解决编译报错）
            const [first = '', last = ''] = val.split('-');
            firstName.value = first;
            lastName.value = last;
        }
    });

    // 尝试修改只读的计算属性
    const changeFullName = ()=> {
        // 这里会自动调用计算属性的 set() 方法。并且将值传递给 set(val) 方法的val参数
        fullName.value = 'jack-son';
    };
</script>