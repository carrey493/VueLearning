<template>
  <div class="school">
      <h2>学校名称： {{name}}</h2>
      <h2>学习地址： {{address}}</h2>
  </div>
</template>

<script>
export default {
    name: 'School',
    data() {
        return {
            name: '尚硅谷',
            address:'beijing'
        }
    },
}
</script>

<style>
.school{
    background: goldenrod;
}
</style>