## 25.webStorage

### 1.存储大小

- 存储内容大小一般支持5M左右，不同浏览器不同

### 2.存储机制

- 浏览器通过Window.sessionStorage 和 Window.localStorage属性来实现本地存储机制

### 3.相关API

**Window.sessionStorage 和 Window.localStorage同Api**

- 存储：sessionStorage.setItem("msg", "hello");
- 读取：sessionStorage.getItem("msg")
- 删除：sessionStorage.removeItem("msg");
- 清空sessionStorage.clear();
- 这些方法接受一个键和值作为参数

### 4.备注

- sessionStorage存储的内容会随着浏览器窗口的关闭而消失
- localStorage存储的内容需要手动清除才会消失
- Window.sessionStorage 和 Window.localStorage对应的value获取不到那么getItem的返回值是null
- JSON.parse(null)的结果依然是null