<template>
  <div>
    <h1>homeworks</h1>
    <ul>
      <li v-for="(h, index) in homeworks" :key="index">
        <router-link :to="`/example07/03/${h.id}`">{{ h.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { LIST_HOMEWORKS } from '@/store/types.js'
import { mapState } from 'vuex'
export default {
  created() {
    this.$store.dispatch(LIST_HOMEWORKS)
  },
  computed: {
    ...mapState(['homeworks']),
  },
}
</script>

<style></style>
