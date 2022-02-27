<template>
  <div class="student">
    <h2>学生姓名： {{ name }}</h2>
    <h2>学生性别： {{ sex }}</h2>
    <button @click="sendSudentName">把学生名给School</button>
    <hr />
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name: "张三",
      sex: "男",
    };
  },
  methods: {
    sendSudentName() {
      this.$bus.$emit('hello',666)
    },
  },
};
</script>

<style scoped>
.student {
  background: darkcyan;
  margin-top: 50px;
}
</style>
