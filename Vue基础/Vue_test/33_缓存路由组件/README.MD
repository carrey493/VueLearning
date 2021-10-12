### 12.缓存路由组件

- 作用：让不展示的路由组件保持挂载，不被销毁
- 实现：

```js
<keep-alive include="News">
<!-- 组件名 -->
	<router-view></router-view>
</keep-alive>
```