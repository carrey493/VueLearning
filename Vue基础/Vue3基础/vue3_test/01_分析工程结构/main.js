//引入的不再是Vue构造函数了，引入的是一个名为createApp的工厂函数
import { createApp } from 'vue'
import App from './App.vue'

//创建应用实例对象(类似于之前Vue2中的vm,但app比vm更‘轻’)
const app = createApp(App)
console.log(app);

//挂载
app.mount('#app')

/* //卸载
setTimeout(()=>{
    app.unmount('#app')
},1000) */

// createApp(App).mount('#app')
