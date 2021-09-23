# vue_test

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# 笔记

### 1.脚手架文件结构

- node_moudles

  - public
    - favicon.ico :页签图标
    - index.html :主页面
  - src
    - assets: 存放静态资源
      - logo.png
    - component:存放组件
      - HellpWorld.vue
    - App.vue 汇总所有组件
    - main.js :入口文件
  - .gitignore :git版本管制忽略文件
  - babel.config.js :babel的配置文件
  - package.json :应用包配置文件
  - package-lock.json :包版本控制文件

  ### 2.关于不同版本的Vue

  - vue.js是完整版的Vue,包含：核心功能+模板解析器

  - vue.runtime.xxx.js是运行版的Vue,只包含：核心功能；没有模板解析器

  - 因为vue.runtime.xxx.js没有模板解析器，所以不能使用templete配置项

  - 需要使用render函数收到ceateElement函数去指定具体内容 

  
  ### 3.vue.config.js配置文件
  
  - 使用vue inspect > ouyput.js 可以查看Vue脚手架的默认配置
  - 使用vue.config.js 可以对脚手架进行个性化定制
