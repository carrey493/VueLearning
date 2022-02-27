### 7.命名路由

- 作用：可以简化路由的跳转

- 如何使用：

  - 给路由命名

    ```js
    {
    name: "about",
    path: "/about",
    component: About,
    },
    ```

  - 简化跳转

  ```js
  <router-link
  class="list-group-item"
  active-class="active"
  :to="{ name: 'about' }"
  >About</router-link
  >
  ```