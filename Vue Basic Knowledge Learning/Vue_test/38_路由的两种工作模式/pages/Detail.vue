<template>
  <div>
    <ul>
      <!-- <li>消息编号：{{ $route.params.id }}</li>
      <li>消息标题：{{ $route.params.title }}</li> -->
      <!-- <li>a:{{ a }}</li>
      <li>b:{{ b }}</li> -->
      <li>消息编号：{{ id }}</li>
      <li>消息标题：{{ title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Detail",
  // props: ["a", "b"],
  props: ["id", "title"],
  mounted() {
    console.log(this.$route);
  },
};
</script>

<style></style>
