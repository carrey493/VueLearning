//创建整个应用的路由器
import VueRouter from "vue-router";
import About from "../pages/About";
import Home from "../pages/Home";
import News from "../pages/News";
import Message from "../pages/Message";
import Detail from "../pages/Detail";

const router =  new VueRouter({
  routes: [
    {
      name: "about",
      path: "/about",
      component: About,
      meta:{
        title:'关于'
      }
    },
    {
      name:'home',
      path: "/home",
      component: Home,
      meta:{
        title:'主页'
      },
      children: [
        {
          name:'news',
          path: "news",
          component: News,
          meta:{
            title:'新闻',
            isAuth:true
          }
        },
        {
          path: "message",
          component: Message,
          meta:{
            title:'信息',
            isAuth:true
          },
          children: [
            {
              name: "detail",
              path: "detail/:id/:title", //使用占位符声明接收params参数
              component: Detail,
              meta:{
                title:'详情',
                isAuth:true
              },
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
              },
            },
          ],
        },
      ],
    },
  ],
});

//全局前置路由导航守卫，初始化和每次路由切换之前调用
router.beforeEach((to,from,next)=>{
  console.log('前置路由导航守卫',to,from);
  // 可选择path与name进行判断
  // if(to.path ==='/home/news' || to.path === '/home/message')
  //判断是否需要鉴别权限
  if(to.meta.isAuth){
    if(localStorage.getItem('school') === 'atguigu'){
      // document.title = to.meta.title || '硅谷'
      next()
    }
     else {
      alert('学校名不对，无权限查看。')
    }
  }
  else {
    // document.title = to.meta.title || '硅谷'
    next()
  }
})

//全局后置路由导航守卫，初始化和每次路由切换之后调用
router.afterEach((to,from)=>{
  console.log('后置路由守卫',to,from);
  document.title = to.meta.title || '硅谷'
})

export default router