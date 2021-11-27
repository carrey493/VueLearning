<template>
<Demo msg="你好" school="尚硅谷"  @hello="showHello">
  <template v-slot:demo>
    <div>
      <span>test</span>
    </div>
  </template>
  
  
</Demo>
</template>

<script>
import Demo from './components/demo.vue'
export default {
  name: "App",
  components: {Demo},
  setup(){
    function showHello(v){
      alert('你好' + v);
    }

    return {showHello}
  }
};
</script>

<style></style>
