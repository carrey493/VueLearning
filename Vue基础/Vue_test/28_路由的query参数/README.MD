### 6.路由的query参数

- 传递参数

```js
<!-- 跳转路由并携带query参数，to的字符串写法 -->
<!-- <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{ m.title }}</router-link -->
<!-- 跳转路由并携带query参数，to的对象写法 -->
<router-link
:to="{
path: '/home/message/detail',
query: {
id: m.id,
title: m.title,
},
}"
>{{ m.title }}</router-link
>
```

- 接收参数

```js
$route.query.id
$route.query.title
```

