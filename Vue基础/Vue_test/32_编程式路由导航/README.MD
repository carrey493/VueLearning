### 11.编程式路由导航

- 作用：不借助router-link实现路由跳转，让路由跳转更灵活
- 实现

```js
pushShow(m) {
      //console.log(this.$router);
      this.$router.push({
        name: "detail",
        params: {
          id: m.id,
          title: m.title,
        },
      });
    },
    replaceShow(m){
      this.$router.replace({
        name: "detail",
        params: {
          id: m.id,
          title: m.title,
        },
      });
    }
```

- go:可以实现多步跳转正数为向前跳转几步，负数为向后跳转几步
- back:向后退一步
- forward:向前进一步