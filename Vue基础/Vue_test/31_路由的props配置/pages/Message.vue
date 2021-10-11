<template>
  <div>
    <div>
      <ul>
        <li v-for="m in messageList" :key="m.id">
          <!-- 跳转路由并携带params参数，to的字符串写法 -->
          <!-- <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{ m.title }}</router-link> -->
          <!-- 跳转路由并携带params参数，to的对象写法 -->
          <router-link
            :to="{
              name: 'detail',//不允许写path必须写name
              params: {
                id: m.id,
                title: m.title,
              },
            }"
            >{{ m.title }}</router-link
          >
        </li>
      </ul>
      <hr />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      messageList: [
        { id: "001", title: "消息001" },
        { id: "002", title: "消息002" },
        { id: "003", title: "消息003" },
      ],
    };
  },
};
</script>

<style></style>
