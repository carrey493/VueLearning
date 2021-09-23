<template>
  <div class="container">
    <Category title="美食">
      <p>插槽1</p>
    </Category>
    <Category title="游戏">
      <ul>
        <li v-for="(g, index) in games" :key="index">{{ g }}</li>
      </ul>
    </Category>
    <Category title="电影">
      <h5>插槽3</h5>
    </Category>
  </div>
</template>

<script>
// import axios from "axios";
import Category from "./componets/Category.vue";
export default {
  name: "App",
  components: { Category },
  data() {
    return {
      foods: ["q", "w", "e", "r"],
      games: ["1", "2", "3", "4"],
      films: ["!", "@", "#", "$"],
    };
  },
  methods: {},
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-around;
}
</style>
