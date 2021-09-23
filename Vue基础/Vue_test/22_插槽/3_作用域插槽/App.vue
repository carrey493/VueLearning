<template>
  <div class="container">
    <Category title="游戏">
      <template slot-scope="game" slot="haha">
        <ul>
          <li v-for="(g, index) in game.youxi" :key="index">{{ g }}</li>
        </ul>
      </template>
    </Category>
    <Category title="游戏">
      <template slot-scope="game" slot="haha">
        <ol>
          <li v-for="(g, index) in game.youxi" :key="index" style="color:red">
            {{ g }}
          </li>
        </ol>
      </template>
    </Category>
    <Category title="游戏">
      <template slot-scope="{ youxi }" slot="haha">
        <h4 v-for="(g, index) in youxi" :key="index">{{ g }}</h4>
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
    return {};
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
