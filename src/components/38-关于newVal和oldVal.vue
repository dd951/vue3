<!-- 
关于 newVal 和 oldVal
1. 首先实际开发中，newVal 用的较多，oldVal 几乎不用，因此回调函数一般写一个参数即可。
2. 如果是  修改整个人 newVal 和 oldVal 两个变量保存的对象地址不同，newVal 引用指向新对象，oldVal 引用指向旧对象。
3. 如果是  修改姓名、修改年龄  newVal 和 oldVal 两个引用保存的对象地址不变，因此指向的是同一个对象，因此如 37-监视ref定义的对象类型-开启深度监听 所示，newVal 和 oldVal 打印结果相同，都指向了更新后的效果。 
-->