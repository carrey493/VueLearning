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