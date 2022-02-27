### 15.独享路由守卫

- 某一个路由所独享的
- 名称：beforeEnter
- 没有afterEnter

```js
beforeEnter: (to, from, next) => {
console.log("前置路由导航守卫", to, from);
// 可选择path与name进行判断
// if(to.path ==='/home/news' || to.path === '/home/message')
//判断是否需要鉴别权限
if (to.meta.isAuth) {
if (localStorage.getItem("school") === "atguigu") {
// document.title = to.meta.title || '硅谷'
next();
} else {
alert("学校名不对，无权限查看。");
}
} else {
// document.title = to.meta.title || '硅谷'
next();
}
},
```