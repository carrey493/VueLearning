<template>
  <Person />
</template>

<script lang="ts">
import Person from "./components/Person.vue";
//js或ts
export default {
  name: "App", //组件名
  components: { Person },
};
</script>

<style scoped></style>
