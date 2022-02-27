<!--
 * @Author: your name
 * @Date: 2021-10-22 20:53:58
 * @LastEditTime: 2021-10-22 20:55:22
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \Vue_test\37_组件内守卫\README.MD
-->
### 16.组件内守卫

```js
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