## 消息订阅与发布（pubsub）

### 1.用途

- 一种组件间通信的方式，适用于任意组件间通信

### 2.使用步骤

- 1.安装 npm i pubsub-js

- 2.引入 import pubsub from 'puvsub-js'

- 3.接收数据

  - A想接收数据，则在A组件中订阅消息，订阅的回调留在A组件本身

  ```js
  methods:{
      demo(name,data){
        console.log('有人发布了hello组件，hello消息的回调执行了',name,data,this);
      }
    },
    mounted() {
      /* this.$bus.$on('hello',(data)=>{
        console.log('School组件,收到了',data);
      }) */
      /* this.pubId = pubsub.subscribe('nihao',(name,data)=>{
        //消息订阅
        console.log(this);
        console.log('有人发布了hello组件，hello消息的回调执行了',name,data);
      }) */
      this.pubId = pubsub.subscribe('nihao',this.demo)
    },
    beforeDestroy() {
      /* this.$bus.$off('hello') //销毁之前解绑 */
      pubsub.unsubscribe(this.pubId)
    }
  ```

- 4.提供数据 pubsub.publish('xxx',数据)
- 5.最好在beforeDestroy钩子中，用pubsub.unsubscribe取消订阅