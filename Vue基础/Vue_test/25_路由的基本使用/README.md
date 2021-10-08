## 34.Vue-router

### 1.vue-router

- 理解：vue的一个插件库，专门用来实现SPA应用

### 2.SPA

- 单页面应用
- 整个应用只有一个完整的页面
- 点击页面中的导航链接不会刷新页面，只会做页面的局部刷新
- 数据需要通过ajax请求

### 3.路由

- 什么是路由

  - 一个路由就是一组映射关系 key--value
  - key为路径，value可能是function或component

- 路由分类

  - 后端路由
    - value是function,用于处理客户端提交的请求
    - 工作过程：服务器接收到一个请求时，根据请求路径找到匹配的函数来处理请求，返回响应数据
  - 前端路由
    - value是component用于展示页面内容
    - 工作过程：当浏览器的路径改变时，对应的组件就会显示
    - key是路径，value是组件

- 基本使用

  - 安装vue-router,命令 npm i vue-router
  - 应用插件 Vue.use(VueRouter)
  - 编写配置项

  ```js
  //创建整个应用的路由器
  import VueRouter from "vue-router";
  import About from '../componets/About'
  import Home from '../componets/Home'
  
  export default new VueRouter({
      routes:[
          {
              path:'/about',
              component:About
          },
          {
              path:'/home',
              component:Home
          }
      ]
  })
  
  Vue.use(VueRouter)
  
  //创建vm
  new Vue({
    el: "#app",
    render: (h) => h(App),
    router
  });
  ```

  - 借助router-link标签实现路由的切换
  - active-class路由被激活时的样式

  ```js
  <router-link class="list-group-item"  active-class="active" to="/about">About</router-link>
  <router-link class="list-group-item" active-class="active" to="/home">Home</router-link>
  ```

  - router-view指定组件的切换位置

  ```js
  <router-view></router-view>
  ```

  

