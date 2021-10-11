### 8.路由的params参数

- 配置路由，声明接收params参数

```js
{
path: "message",
component: Message,
children: [
{
name: "detail",
path: "detail/:id/:title",
component: Detail,
},
],
},
```

- 传递参数

```js
<router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{ m.title }}</router-link>
<router-link
:to="{
name: 'detail',//不允许写path必须写name
params: {
id: m.id,
title: m.title,
},
}"
>{{ m.title }}</router-link
>
```

- 特别注意：路由携带params参数时，若使用to对象的写法，则不能使用path配置项，必须使用name配置。
- 接收参数

```js
$route.params.id
$route.params.title
```