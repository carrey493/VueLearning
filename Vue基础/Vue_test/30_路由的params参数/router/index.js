//创建整个应用的路由器
import VueRouter from "vue-router";
import About from "../pages/About";
import Home from "../pages/Home";
import News from "../pages/News";
import Message from "../pages/Message";
import Detail from "../pages/Detail";

export default new VueRouter({
  routes: [
    {
      name: "about",
      path: "/about",
      component: About,
    },
    {
      path: "/home",
      component: Home,
      children: [
        {
          path: "news",
          component: News,
        },
        {
          path: "message",
          component: Message,
          children: [
            {
              name: "detail",
              path: "detail/:id/:title",//使用占位符声明接收params参数
              component: Detail,
            },
          ],
        },
      ],
    },
  ],
});
