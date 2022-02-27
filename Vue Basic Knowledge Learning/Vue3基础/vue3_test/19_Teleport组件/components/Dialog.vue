<template>
  <div>
    <button @click="isShow = true">弹窗</button>
    <teleport to="#example">
      <!-- <teleport to="body"> -->
      <div v-if="isShow" class="mask">
        <div class="dialog">
          <h3>我是弹窗</h3>
          <h4>我是内容</h4>
          <h4>我是内容</h4>
          <h4>我是内容</h4>
          <button @click="isShow = false">关闭弹窗</button>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Dialog",
  setup() {
    let isShow = ref(false);
    return { isShow };
  },
};
</script>

<style>
.mask {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
}
.dialog {
  width: 300px;
  height: 300px;
  background-color: green;
  position: absolute;
  transform: translate(-50%,-50%);
  top: 50%;
  left: 50%;
  text-align: center;
}
</style>