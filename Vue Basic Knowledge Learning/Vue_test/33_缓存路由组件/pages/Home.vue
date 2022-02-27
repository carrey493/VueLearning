<template>
  <div>
    <div>
      <h2>Home组件内容</h2>
      <div>
        <ul class="nav nav-tabs">
          <li>
            <router-link
              class="list-group-item "
              active-class="acive"
              to="/home/news"
              >News</router-link
            >
          </li>
          <li>
            <router-link
              class="list-group-item "
              active-class="acive"
              to="/home/message"
              >Message</router-link
            >
          </li>
        </ul>
        <keep-alive include="News">
          <!-- 组件名 -->
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  beforeDestroy() {
    console.log("Home组件即将被销毁了");
  },
  mounted() {
    console.log("Home组件挂载完毕");
    console.log(this);
  },
};
</script>
