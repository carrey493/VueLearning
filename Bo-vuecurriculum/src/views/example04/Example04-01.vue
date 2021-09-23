<template>
  <div>
    <h1>v-text</h1>
    <p>
      <span v-text="message"></span>
    </p>
    <h1>v-if</h1>
    <p v-if="user.level == 'admin'">此内容仅admin可见</p>
    <template v-if="userNameLogin">
      <p>第一个input会被复用，输入的信息切换时会保存</p>
      <br />
      <input type="password" placeholder="请输入密码" name="" id="" key="k1" />
    </template>
    <br />
    <template v-if="!userNameLogin">
      <input type="text" placeholder="请输入key" key="k2" />
    </template>
    <br />
    <button @click="changeInput">切换</button>
    <h1>v-show</h1>
    <p v-show="close">此内容仅close为true时可见</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'hello world',
      admin: true,
      userNameLogin: true,
      user: { username: 'Bo', level: 'admin' },
      close: true,
    }
  },
  methods: {
    changeInput() {
      this.userNameLogin = !this.userNameLogin
    },
  },
}
</script>

<style></style>
