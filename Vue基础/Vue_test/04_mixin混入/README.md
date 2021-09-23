## mixin(混入)

- 功能：可以把多个组件共用的配置提取成一个混入对象
- 使用方式
  - 定义混合
    - {data(){},methods:{}}
  - 使用混合
    - 全局混入: Vue.mixin(xxx)
    - 局部混入：mixins:['xxx']