<template>
<button @click="isShow = !isShow">切换</button>
<Demo v-if="isShow"></Demo>
</template>

<script>
import { ref } from '@vue/reactivity';
import Demo from './components/demo.vue'
export default {
  name: "App",
  components: {Demo},
  setup(){
    let isShow = ref(true)
    return {isShow}
  }
};
</script>

<style></style>
