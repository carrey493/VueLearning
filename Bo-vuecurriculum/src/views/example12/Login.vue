<template>
  <div>
    <h1>跨域请求</h1>
    <p>
      前端在入口取消moke引入，停止mock数据：启动后端服务：后端添加cors跨域过滤去
    </p>
    <p>后端默认用户名/密码：1001，10001</p>
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
