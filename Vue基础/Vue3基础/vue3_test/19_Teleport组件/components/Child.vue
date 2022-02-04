<template>
  <div class="child">
    <h3>子组件（子）</h3>
    <Sun />
  </div>
</template>

<script>
import Sun from "./Sun.vue";
export default {
  name: "ChildApp",
  components: { Sun },
};
</script>

<style>
.child {
  background-color: fuchsia;
  padding: 10px;
}
</style>
