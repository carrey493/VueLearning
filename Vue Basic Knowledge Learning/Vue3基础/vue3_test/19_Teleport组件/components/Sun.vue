<template>
  <div class="sun">
    <h3>孙组件（孙）</h3>
    <Dialog />
  </div>
</template>

<script>
import Dialog from "./Dialog.vue";
export default {
  name: "SunApp",
  components: { Dialog },
};
</script>

<style>
.sun {
  background-color: orange;
  padding: 10px;
}
</style>
