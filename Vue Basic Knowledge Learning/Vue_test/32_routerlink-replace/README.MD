### 10.router-link的replace属性

- 作用：控制路由跳转时操作浏览器历史纪录的模式
- 浏览器的历史记录有两种写入方式：分别为push和replace，push是追加历史记录，replace是替换当前记录。路由跳转的时候默认为push
- 如何开启replace模式：

```js
<router-linkreplace:to="{ name: 'about' }">About</router-link>
```