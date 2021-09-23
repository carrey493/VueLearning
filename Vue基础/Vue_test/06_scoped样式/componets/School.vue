<template>
  <div class="demo">
    <h2>学校姓名： {{ nam }}</h2>
    <h2>学校地址： {{ address }}</h2>
    <hr />
  </div>
</template>

<script>

export default {
  name: "School",
  data() {
    return {
      name: "尚硅谷atguigu",
      address: "wuhan",
    };
  },
};
</script>

<style scoped>
.demo {
  background: saddlebrown;
}
</style>