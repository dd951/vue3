/* 
路由器工作模式

history 模式
优点：URL 更加美观，路径中不带有 #，更接近传统网站的 URL。
缺点：后期项目上线，需要服务器端配合处理路径问题，否则刷新会有 404 的错误。（浏览器刷新时会把 /about 路径发给服务器，但服务器上根本没有这个文件，所以返回 404）
代码实现：
const router = createRouter({
  history: createWebHistory(),
  // ......
});
history 模式由于路径较为美观，因此在多数的 to C 系统较为常用。（to C（面向消费者），to B（面向企业））

hash 模式
优点：兼容性好，不需要服务器端处理路径。
缺点：URL 中带有 # 不美观，且在 SEO 优化方面相对较差。
代码实现：
const router = createRouter({
  history: createWebHashHistory(),
  // ......
});
hash 模式多数使用在后台管理系统当中，因为大部分后台管理系统对美观性要求较低。
*/