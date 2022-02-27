<template>
  <div>
    <div>
      <div class="row">
        <Banner />
      </div>
      <div class="row">
        <div class="col-xs-2 col-xs-offset-2">
          <div class="list-group">
            <!-- <a class="list-group-item active" href="./about.html">About</a>
            <a class="list-group-item" href="./home.html">Home</a> -->
            <!-- Vue中借助router-link标签实现路由的切换 -->
            <router-link
              class="list-group-item"
              active-class="active"
              to="/about"
              >About</router-link
            >
            <router-link
              class="list-group-item"
              active-class="active"
              to="/home"
              >Home</router-link
            >
          </div>
        </div>
        <div class="col-xs-6">
          <div class="panel">
            <div class="panel-body">
              <!-- 指定组件的切换位置 -->
              <router-view></router-view>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "./componets/Banner.vue";
export default {
  name: "App",
  components: { Banner },
};
</script>

<style scoped></style>
