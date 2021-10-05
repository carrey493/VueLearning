<template>
  <div v-if="flag">
    <h1>State绑定</h1>
    <p>
      通过根组件store对象绑定
      {{ getUser.name }} /
      {{ getUser.address }}
    </p>
    <hr />
    <p>
      通过mapState绑定 {{ user.name }}
      <br />
      {{ user1.address }}
      <br />
    </p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    getUser() {
      return this.$store.state.user
    },
    ...mapState(['user']),
    ...mapState({ user1: (state) => state.user }),
  },
  watch: {
    $route: {
      immediate: true,
      handler(newV) {
        if (newV.path !== '/example06/01') {
          this.flag = false
        }
      },
    },
  },
  data() {
    return {
      flag: true,
    }
  },
}
</script>

<style>
* {
  margin: 0;
}
</style>
