<template>
  <div>
    <ul>
      <li :style="{opacity}">欢迎学习</li>
      <li>news001 <input type="text"> </li>
      <li>news002 <input type="text"> </li>
      <li>news003 <input type="text"> </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      a:false,
      opacity:1      
    }
  },
/*   beforeDestroy(){
    console.log('news组件即将被销毁');
    clearInterval(this.timer)
  },
  mounted(){
    this.timer = setInterval(()=> {
      this.opacity -= 0.01
      if(this.opacity <= 0) this.opacity = 1
    },16)
  } */
  activated(){
    console.log('News组件被激活了');
    this.timer = setInterval(()=> {
      console.log('@');
      this.opacity -= 0.01
      if(this.opacity <= 0) this.opacity = 1
    },16)
  },
  deactivated(){
    console.log('News组件失活了');
    clearInterval(this.timer)
  }
};
</script>

<style></style>
