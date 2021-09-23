<template>
  <div class="school">
    <h2>学校姓名： {{ name }}</h2>
    <h2>学校地址： {{ address }}</h2>
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
  mounted() {
    this.$bus.$on('hello',(data)=>{
      console.log('School组件,收到了',data);
    })
  },
  beforeDestroy() {
    this.$bus.$off('hello') //销毁之前解绑
  },
};
</script>

<style scoped>
.school {
  background: saddlebrown;
  padding: 5px;
}
</style>