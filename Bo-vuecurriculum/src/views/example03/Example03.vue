<template>
  <div>
    <p>在router启用props支持，在vue props属性中声明同名变量</p>
    studentID:{{ sid }}
    <br />
    homeWorksID: {{ hid }}
    <br />
    也可以通过$route.params调用
    <br />
    {{ $route.params.id }}
    <hr />
    {{ getTitle }}
  </div>
</template>

<script>
export default {
  name: 'ex3',
  props: ['sid', 'hid'],
  data() {
    return {
      homeworks: [
        { id: 1, title: 'spring' },
        { id: 2, title: 'springMvc' },
        { id: 3, title: 'springboot' },
      ],
    }
  },
  created() {
    console.log('created' + this.$route.params.sid)
    console.log('created' + this.$route.params.hid)
  } /* ,
  beforeUpdate() {
    console.log('beforeUpdate' + this.$route.params.sid)
    console.log('beforeUpdate' + this.$route.params.hid)
  },

  beforeRouteUpdate(to, from, next) {
    console.log('beforeRouterUpdate')
    next()
  } */,
  computed: {
    getTitle() {
      return this.homeworks.find((item) => item.id == this.hid).title
    },
  },
}
</script>

<style></style>
