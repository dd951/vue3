/* 
第一种写法：
<router-link to="/home" active-class="active">Home</router-link>

第二种写法：:to可以接收一个带有 path 属性的对象
<router-link :to="{path: '/about'}" active-class="active">About</router-link>

第三种写法：:to可以接收一个带有 name 属性的对象
<router-link :to="{name: 'about'}" active-class="active">About</router-link>
*/