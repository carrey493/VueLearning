<template>
  <div>
    <h2>学校姓名： {{ name | mySlice }}</h2>
    <h2>学校地址： {{ address }}</h2>
    {{x}}
    <button @click="test">测试hello</button>
    <hr />
  </div>
</template>

<script>

export default {
  name: "School",
  data() {
    return {
      name: "尚硅谷atguigu",
      address: "wuhan",
    };
  },
  methods:{
    test(){
      this.hello()
    }
  }
};
</script>
