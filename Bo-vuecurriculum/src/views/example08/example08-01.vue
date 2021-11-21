<template>
  <div>
    <h1>父组件绑定子组件属性</h1>
    <table>
      <tr>
        <td>#</td>
        <td>题目</td>
        <td>时间</td>
        <td>操作</td>
      </tr>
      <tr v-for="(h, index) in homeworks" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ h.name }}</td>
        <td>{{ h.deadline }}</td>
        <td><delbutton :homework="h"></delbutton></td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { LIST_HOMEWORKS } from '../../store/types'
import delbutton from './DelButton.vue'
export default {
  components: { delbutton },
  created() {
    this.$store.dispatch(LIST_HOMEWORKS)
  },
  computed: {
    ...mapState(['homeworks']),
  },
}
</script>

<style></style>
