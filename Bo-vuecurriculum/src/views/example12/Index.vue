<template>
  <div>
    <h1>后端提纲数据</h1>
    <p>
      基于sessionStorsge中数据判断用户登录状态，登录后加载此组件
      <br />
    </p>
    <p v-if="name">
      {{ name }}
    </p>
    <p v-if="teacher">
      {{ teacher }}
    </p>
    <div v-if="courses">
      课程
      <ul>
        <li v-for="(c, index) in courses" :key="index">
          {{ c.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  created() {
    this.$store.dispatch('backemdindex')
  },
  computed: {
    ...mapState(['teacher', 'courses']),
  },
}
</script>

<style></style>
