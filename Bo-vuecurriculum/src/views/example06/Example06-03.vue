<template>
  <div v-if="flag">
    <h1>Mutation</h1>
    <p>异步更新，支持网络请求等操作。</p>
    <h3>{{ user.name }} / {{ user.address }}</h3>
    <p>
      <input type="text" v-model="myUser.name" />
      <br />
      <input type="text" v-model="myUser.address" />
      <br />
      <button type="button" @click="change">change</button>
    </p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { UPDATEUESR } from '../../store/types'
export default {
  data() {
    return {
      flag: true,
      myUser: {
        name: null,
        address: null,
      },
    }
  },
  computed: {
    ...mapState(['user']),
  },
  watch: {
    $route: {
      immediate: true,
      handler(newV) {
        if (newV.path !== '/example06/03') {
          this.flag = false
        }
      },
    },
  },
  methods: {
    change() {
      this.$store.dispatch(UPDATEUESR, this.myUser)
    },
  },
}
</script>

<style>
h3 {
  color: purple;
}
</style>
