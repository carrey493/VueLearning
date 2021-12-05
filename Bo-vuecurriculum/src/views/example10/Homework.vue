<template>
  <div class="home">
    {{ hid }}
    子路由
    <h1>{{ homework.name }}</h1>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { GET_HOMEWORK } from '../../store/types'
export default {
  props: ['hid'],
  created() {
    this.$store.dispatch(GET_HOMEWORK, { hid: this.hid })
  },
  computed: {
    ...mapState(['homework']),
  },
}
</script>

<style></style>
