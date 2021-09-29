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
            <li><router-link to="/example05">v-model双向绑定</router-link></li>
            <li><router-link to="">基于方法执行</router-link></li>
          </ul>
        </li>
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
