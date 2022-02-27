<template>
  <div>
    <Student name="lisi" sex="nv" :age="19" />
  </div>
</template>

<script>
import Student from "./componets/Student.vue";

export default {
  name: "App",
  components: { Student },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style></style>
