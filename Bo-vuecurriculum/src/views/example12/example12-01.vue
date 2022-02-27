<template>
  <div>
    <index v-if="isLogin" />
    <login />
  </div>
</template>

<script>
import { LOGIN } from '@/store/types.js'
import { mapState } from 'vux'
export default {
  components: {
    login: () => import('@/views/example12/Login.vue'),
    index: () => import('@/views/example12/Index.vue'),
  },
  computed: {
    ...mapState(['isLogin']),
  },
}
</script>

<style></style>
