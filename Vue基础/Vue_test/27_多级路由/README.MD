### 5.多级路由

- 配置路由规则。使用children配置项：

```js
{
    path:'/home',
        component:Home,
            children:[
                {
                    path:'news',
                    component:News
                },
                {
                    path:'message',
                    component:Message
                },
            ]
}
```

- 跳转（要写完整路由）

```js
<router-link class="list-group-item " active-class="acive" to="/home/news">News</router-link>
```