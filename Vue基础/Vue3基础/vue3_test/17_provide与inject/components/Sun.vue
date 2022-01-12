<template>
  <div class="sun">
    <h3>孙组件（孙）{{ car.name }}--{{ car.price }}</h3>
  </div>
</template>

<script>
import { inject } from "vue";
export default {
  name: "SunApp",
  setup() {
    let car = inject("car");
    return { car };
  },
};
</script>

<style>
.sun {
  background-color: orange;
  padding: 10px;
}
</style>
