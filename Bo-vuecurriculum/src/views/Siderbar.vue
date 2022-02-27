<template>
  <div>
    <h1>Vue实例</h1>
    <ul>
      <li><router-link to="/example01">Welcome</router-link></li>
      <li><router-link to="/example02">Data&Computed</router-link></li>
      <ul>
        <li>路由传参</li>
        <li>
          <router-link to="/example03/students/12/homeworks/1">
            路由传参1
          </router-link>
        </li>
        <li>
          <router-link to="/example03/students/15/homeworks/2">
            路由传参2
          </router-link>
        </li>
      </ul>
      <ul>
        <li>
          基本指令
          <ul>
            <li>
              <router-link to="/example04/01">text if show指令</router-link>
            </li>
            <li>
              <router-link to="/example04/02">v-bind</router-link>
            </li>
            <li>
              <router-link to="/example04/03">v-for</router-link>
            </li>
          </ul>
        </li>
      </ul>
      <ul>
        <li>双向绑定</li>
        <li>
          <ul>
            <li>
              <router-link to="/example05/01">v-model双向绑定</router-link>
            </li>
            <li><router-link to="/example05/02">基于方法执行</router-link></li>
          </ul>
        </li>
      </ul>
      <ul>
        <li>Vuex</li>
        <li><router-link to="/example06/01">基本绑定</router-link></li>
        <li><router-link to="/example06/02">同步绑定</router-link></li>
        <li><router-link to="/example06/03">异步绑定</router-link></li>
      </ul>
      <ul>
        <li>Axios</li>
        <li>
          <router-link to="/example07/01">基本请求及mock数据</router-link>
        </li>
        <li><router-link to="/example07/02">homeworks</router-link></li>
      </ul>
      <ul>
        <li>父子组件传值</li>
        <li><router-link to="/example08">父组件向子组件传值</router-link></li>
      </ul>
      <ul>
        <li>Axios拦截器</li>
        <li><router-link to="/example09">Axios响应/请求拦截器</router-link></li>
      </ul>
      <ul>
        <li>嵌套路由</li>
        <li><router-link to="/example10">嵌套路由</router-link></li>
      </ul>
      <ul>
        <li>SessionStorage</li>
        <li><router-link to="/example11">SessionStorage</router-link></li>
      </ul>
      <ul>
        <li>CORS policy</li>
        <li><router-link to="/example13">跨域请求</router-link></li>
      </ul>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
h1 {
  color: brown;
}
</style>
>
