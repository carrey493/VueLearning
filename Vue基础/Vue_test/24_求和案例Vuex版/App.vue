<template>
  <div>
    <Count />
    <hr>
    <Person />
  </div>
</template>

<script>
import Count from "./componets/Count.vue";
import Person from "./componets/Persons.vue";
export default {
  name: "App",
  components: { Count,Person },
  mounted() {
  },
};
</script>

<style scoped></style>
