<template>
  <h2>求和{{ sum }}</h2>
  <button @click="sum++">加一</button>
  <hr />
  <h2>当前点击的鼠标的坐标 X:{{ point.x }} Y{{ point.y }}</h2>
</template>

<script>
import { ref } from "vue";
import usePoint from '../hooks/usePoint'
export default {
  name: "Demo",

  setup() {
    let sum = ref(0);
    /* let point = reactive({
      x: 0,
      y: 0,
    });
    function savePoint(event) {
      point.x = event.pageX;
      point.y = event.pageY;
      console.log(event.pageX, event.pageY);
    }
    onMounted(() => {
      window.addEventListener("click", savePoint);
    });
    onBeforeUnmount(() => {
      window.removeEventListener("click", savePoint);
    }); */
    let point = usePoint()

    return {
      sum,
      point,
    };
  },
};
</script>

<style></style>
