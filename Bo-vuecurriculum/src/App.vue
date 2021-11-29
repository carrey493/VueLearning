<template>
  <div id="app">
    <Siderbar id="siderbar" />
    <!-- <keep-alive>
      <router-view id="router" :key="$route.path" />
    </keep-alive> -->
    <router-view id="router" :key="$route.path" />
    <alertDialog />
  </div>
</template>

<script>
import Siderbar from './views/Siderbar.vue'
export default {
  components: {
    Siderbar,
    alertDialog: () => import('@/components/AlertDialog.vue'),
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#siderbar {
  width: 300px;
  display: inline-block;
  border: steelblue 1px solid;
  vertical-align: top;
}
#router {
  display: inline-block;
  border: cadetblue 1px solid;
}
</style>
