### 9.路由的props配置

```js
{
name: "detail",
path: "detail/:id/:title", //使用占位符声明接收params参数
component: Detail,
//props第一种写法值为对象，该对象中所有的key-value都会以props的形式传给detail组件
/* props: {
a: 1,
b: "hello",
}, */
//props第二种写法值为布尔值，若布尔值为真，就会把该组件收到的所有params参数，以props的形式传给detail组件
/* props: true, */
//props第三种写法值为函数
props($route) {
//{params:{id,title}}
return { id: $route.params.id, title: $route.params.title };
//return {id,title}
}
```