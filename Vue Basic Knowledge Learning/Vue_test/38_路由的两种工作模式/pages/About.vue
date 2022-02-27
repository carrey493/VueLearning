<!--
 * @Author: your name
 * @Date: 2021-10-11 09:21:04
 * @LastEditTime: 2021-10-22 20:50:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue_test\src\pages\About.vue
-->
<template>
  <div>
    <h2>我是About</h2>
  </div>
</template>

<script>
export default {
  name: "About",
  beforeDestroy() {
    console.log("About组件即将被销毁了");
  },
  mounted() {
    console.log("About组件挂在完毕");
    console.log(this);
  },
  //通过路由规则，进入该组件时被调用
  beforeRouteEnter(to, from, next) {
    console.log("进入时-beforeRouteEnter-路由导航守卫", to, from);
    //判断是否需要鉴别权限
    if (to.meta.isAuth) {
      if (localStorage.getItem("school") === "atguigu") {
        next();
      } else {
        alert("学校名不对，无权限查看。");
      }
    } else {
      next();
    }
  },
  //通过路由规则，离开该组件时被调用
  beforeRouteLeave(to, from, next) {
    console.log("离开时-beforeRouteLeave-路由导航守卫", to, from);
    //判断是否需要鉴别权限
    if (to.meta.isAuth) {
      if (localStorage.getItem("school") === "atguigu") {
        next();
      } else {
        alert("学校名不对，无权限查看。");
      }
    } else {
      next();
    }
  },
};
</script>
