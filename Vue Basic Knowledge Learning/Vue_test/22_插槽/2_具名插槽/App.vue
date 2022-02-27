<template>
  <div class="container">
    <Category title="美食">
      <p slot="first">插槽1</p>
      <p slot="second">插槽2</p>
    </Category>
    <Category title="游戏">
      <ul slot="first">
        <li v-for="(g, index) in games" :key="index">{{ g }}</li>
      </ul>
      <div class="test" slot="second">
        <p>游戏名1</p>
        <p>游戏名2</p>
      </div>
    </Category>
    <Category title="电影">
      <div class="test" slot="first">
        <p>电影名1</p>
        <p>电影名2</p>
      </div>
      <!-- v-slot最新写法，必须使用template标签包裹 
      普通写法 slot="second"
      -->
      <template v-slot:second>
        <div class="test">
          <p>电影院1</p>
          <p>电影院2</p>
        </div>
        <h4 slot="second">观影</h4>
      </template>
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
.test {
  display: flex;
  justify-content: space-around;
}
</style>
