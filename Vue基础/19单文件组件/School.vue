<template>
  <!-- 组件的结构 -->
  <div class="demo">
    <h2>学校名称: {{ schoolName }}</h2>
    <h2>学校地址: {{ address }}</h2>
    <button @click="tip">点我输出x</button>
  </div>
</template>

<script>
// 组件交互的相关代码
// export 分别暴露

// const school = Vue.extend({
// export default Vue.extend({
	export default {
			name: 'School',
	data() {
			return {
			schoolName: "尚硅谷",
			address: "武汉",
			};
	},
	methods: {
			tip() {
			alert(this.schoolName);
			},
	},
};
// export {school} 统一暴露
// export default school 默认暴露

// import ??? from ???
// import {???} from ???
</script>

<style scoped>
/* 组件的样式 */
.demo {
  background: wheat;
}
</style>
