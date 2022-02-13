<template>
  <div>
    <h1>加强版登录</h1>
    <p>当前用户未登录，加载此组件</p>
    <p>当前用户名/密码：1001 123456</p>
    <form action="" ref="form">
      <label for="">用户名</label>
      <input type="text" v-model="number" />
      <br />
      <label for="">密码</label>
      <input type="password" v-model="password" />
      <br />
      <button @click="login" type="button">登录</button>
    </form>
  </div>
</template>

<script>
import { LOGIN } from '../../store/types'
export default {
  data() {
    return {
      number: null,
      password: null,
    }
  },
  methods: {
    login() {
      this.$store.dispatch(LOGIN, {
        number: this.number,
        password: this.password,
      })
      this.$refs.form.reset()
    },
  },
}
</script>

<style></style>
