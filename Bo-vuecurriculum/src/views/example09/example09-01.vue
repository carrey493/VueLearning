<template>
  <div>
    <h1>Axios拦截器</h1>
    <p>用户名/密码</p>
    <form action="">
      <label for="">用户名</label>
      <input type="text" name="" id="" v-model="number" />
      <br />
      <label for="">密码</label>
      <input type="password" v-model="password" />
      <br />
      <button @click="login">登录</button>
    </form>
  </div>
</template>

<script>
import { LOGIN } from '@/store/types.js'
export default {
  data() {
    return {
      number: '',
      password: '',
    }
  },
  methods: {
    login() {
      console.log(this.password, this.number)
      this.$store.dispatch(LOGIN, {
        number: this.number,
        password: this.password,
      })
    },
  },
}
</script>

<style></style>
