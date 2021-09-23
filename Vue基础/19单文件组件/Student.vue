<template>
  <!-- 组件的结构 -->
  <div class="demo">
    <h2>学生姓名: {{ name }}</h2>
    <h2>学生年龄: {{ age }}</h2>
    <button @click="tip">点我输出x</button>
  </div>
</template>

<script>
  export default {
    name: "School",
    data() {
      return {
        name: "张三",
        age: "16",
      };
    },
    methods: {
      tip() {
        alert(this.name);
      },
    },
  };
</script>

<style scoped>
/* 组件的样式 */
.demo {
  background: dodgerblue;
}
</style>
