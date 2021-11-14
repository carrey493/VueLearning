<template>
  <div>
    {{ hid }}
    123
    <h1>{{ homework.name }}</h1>
  </div>
</template>

<script>
import { GET_HOMEWORK } from '@/store/types.js'
import { mapState } from 'vuex'
export default {
  props: ['hid'],
  created() {
    this.$store.dispatch(GET_HOMEWORK, { hid: this.hid }).then((h) => {
      this.homework = h
    })
  },
  /* computed: {
    ...mapState(['homework']),
  }, */
  data() {
    return {
      homework: { name: null },
    }
  },
}
</script>

<style></style>
