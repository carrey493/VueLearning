<!--
 * @Author: your name
 * @Date: 2021-10-25 21:11:17
 * @LastEditTime: 2021-10-25 21:11:52
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \Vue_test\38_路由的两种工作模式\README.MD
-->

### 17.路由器的两种工作模式

- 对于一个url来说，什么是hash值？-#及其后面的内容就是hash值
- hash值不会包含在http请求中，即：hash值不会带给服务器
- hash模式：
  - 地址中永远带着#号，不美观。
  - 若以后将地址通过第三方手机app分享，若app校样严格，则地址会被标记为不合法
  - 兼容性较好
- history模式
  - 地址干净，美观
  - 兼容性和hash模式相比略差
  - 应用部署上线需要后端人员支持，解决刷新页面服务端404的问题