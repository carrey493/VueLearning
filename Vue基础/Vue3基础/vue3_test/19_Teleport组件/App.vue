<template>
  <div class="app">
    <h3>APP组件</h3>
    <Child />
  </div>
</template>

<script>
import Child from "./components/Child.vue";
export default {
  name: "App",
  components: { Child },
};
</script>

<style>
.app {
  background-color: skyblue;
  padding: 10px;
}
</style>
