<template>
  <div>
    <index v-if="isLogin" />
    <login v-else />
  </div>
</template>

<script>
import { LOGIN } from '@/store/types.js'
import { mapState } from 'vuex'
export default {
  components: {
    login: () => import('@/views/example11/Login.vue'),
    index: () => import('@/views/example11/Index.vue'),
  },
  computed: {
    ...mapState(['isLogin']),
  },
}
</script>

<style></style>
