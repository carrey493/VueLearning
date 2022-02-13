<template>
  <div>
    <h1>登录后系统首页</h1>
    <p>
      基于sessionStorsge中数据判断用户登录状态，登录后加载此组件
      <br />
      <router-link to="/example/welocome">仅登录才有此路由信息</router-link>
    </p>
    <p v-if="name">
      {{ name }}
    </p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  created() {
    this.$store.dispatch('index')
  },
  computed: {
    ...mapState(['name']),
  },
}
</script>

<style></style>
