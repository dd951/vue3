// 引入createApp函数
import {createApp} from 'vue';

// 引入根组件App（在App.vue文件中对外暴露了组件App，因此这里才能导入App组件）
// 这种导入方式为：默认导入。
import App from './App.vue';

// 采用默认导入的时候，import后面的变量名是随意的，例如也可以这样写：
//import Application from './App.vue';

// 将App根组件交给createApp来完成应用的创建，并且将应用挂载到id='app'的元素上
// 任何一个App都应该有一个根组件。
createApp(App).mount('#app');