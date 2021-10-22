<template>
  <div>
    <h2>我是About</h2>
  </div>
</template>

<script>
export default {
  name: "About",
  beforeDestroy() {
    console.log("About组件即将被销毁了");
  },
  mounted() {
    console.log("About组件挂在完毕");
    console.log(this);
  },
};
</script>
