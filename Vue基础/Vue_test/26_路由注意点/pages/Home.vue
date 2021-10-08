<template>
  <div>
    <h2>我是Home</h2>
  </div>
</template>

<script>
export default {
  name: "Home",
  beforeDestroy() {
    console.log("Home组件即将被销毁了");
  },
  mounted() {
    console.log("Home组件挂载完毕");
    console.log(this);
  },
};
</script>
