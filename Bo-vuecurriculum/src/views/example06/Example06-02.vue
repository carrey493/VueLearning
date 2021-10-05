<template>
  <div v-if="flag">
    <h1>Mutation</h1>
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
        if (newV.path !== '/example06/02') {
          this.flag = false
        }
      },
    },
  },
  methods: {
    change() {
      this.$store.commit(UPDATEUESR, this.myUser)
    },
  },
}
</script>

<style>
h3 {
  color: orange;
}
</style>
