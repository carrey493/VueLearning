<template>
  <div></div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({ exp: (state) => state.exception }),
  },
  watch: {
    exp() {
      alert(`${this.exp.message}`)
    },
  },
}
</script>

<style></style>
