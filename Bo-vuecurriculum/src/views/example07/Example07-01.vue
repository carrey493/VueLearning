<template>
  <div>
    <h1>axios基本请求</h1>
    <p>
      基本get请求
      <br />
      <button @click="getUser">getUser</button>
      <br />
      匹配表达式测试
    </p>
    <button @click="getHomework">getHomework</button>
    <p>{{ user.userId }} / {{ user.userName }}</p>
    <hr />
    <p>
      post请求测试
      <br />
      <button @click="login">login</button>
    </p>
  </div>
</template>

<script>
import axios from '@/axios/MyAxios.js'
export default {
  data() {
    return {
      user: {
        userName: null,
        userId: null,
      },
    }
  },
  methods: {
    /* getUser() {
      axios.get('users/14').then((resp) => {
        this.user = resp.data.user
      })
    }, */
    async getUser() {
      let resp = await axios.get('users/12')
      this.user = resp.data.user
    },
    getHomework() {
      axios.get('user/12/homework/233').then((resp) => {
        this.user = resp.data.user
      })
    },
    login() {
      axios
        .post('login', {
          user: {
            userName: 'Bo',
            userId: 'B12',
          },
        })
        .then((resp) => {
          console.log(resp.headers['Authorization'])
          this.user = resp.data.user
        })
    },
  },
}
</script>

<style>
p {
  color: salmon;
}
</style>
