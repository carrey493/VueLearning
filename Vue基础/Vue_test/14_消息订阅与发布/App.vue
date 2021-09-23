<template>
  <div id="app">
    <h1>{{ msg }}</h1>
   <School />
   <Student />
  </div>
</template>

<script>
import Student from "./componets/Student.vue";
import School from "./componets/School.vue";

export default {
  name: "App",
  components: { School, Student },
  data() {
    return {
      msg: "你好啊！",
    };
  }
};
</script>

<style>
.app {
  background: wheat;
}
</style>
