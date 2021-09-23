<template>
  <div>
    <School />
    <hr>
    <Student />
  </div>
</template>

<script>
import Student from "./componets/Student.vue";
import School from "./componets/School.vue"

export default {
  name: "App",
  components: { School,Student },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style></style>
