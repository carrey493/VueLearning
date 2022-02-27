<template>
  <div class="container">
    <Search />
    <List />
  </div>
</template>

<script>
// import axios from "axios";
import Search from "./componets/Search.vue";
import List from "./componets/List.vue";
export default {
  name: "App",
  components: { Search, List },
  methods: {},
};
</script>

<style scoped></style>
