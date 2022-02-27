<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition-group name="hello" :appear="true">
      <h1 v-show="isShow" key="1">你好啊2！</h1>
      <h1 v-show="!isShow" key="2">你好啊3！</h1>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "Test",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
h1 {
  background: orange;
}
/* 进入的起点离开终点 */
.hello-enter,
.hello-leave-to {
  transform: translateX(-100%);
}
.hello-enter-active,
.hello-leave-to {
  transition: 2s linear;
}
/* 进入的终点  离开起点 */
.hello-enter-to,
.hello-leave {
  transform: translateX(0px);
}
</style>
