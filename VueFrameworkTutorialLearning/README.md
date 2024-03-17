# Vue 全套知识

> 学习地址：https://www.bilibili.com/video/BV1zq4y1p7ga?p=16&vd_source=be3b45fc17b50a3c41a73ab4183d9c90

### 一、前端工程化

#### 1. 工程化

- 模块化：js 的模块化、css 的模块化、资源的模块化
- 组件化：复用现有的 UI 结构、样式、行为
- 规范化：目录结构的划分、编码规范化、接口规范化、文档规范化、Git 分支管理
- 自动化：自动化构建、自动部署、自动化测试

#### 2. 什么是前端工程化

- 前端工程化指的是:在企业级的前端项目开发中，把前端开发所需的工具、技术、流程、经验等进行规范化、标准化。
- 好处：前端开发自成体系，有一套标准的开发方案和流程

#### 3. 前端工程化的解决方案

- 早期的前端工程化解决方案
  - grunt
  - gulp
- 目前主流的前端工程化解决方案
  - webpack
  - parcel

### 二、webpack 的基本使用

#### 1. 什么是 webpack

- 概念：webpack 是前端项目工程化的具体解决方案。
- 主要功能：它提供了友好的前端模块化开发支持，以及代码压缩混淆、处理浏览器端 JavaScript 的兼容性、性能优化等强大的功能。
- 好处：让程序员把工作的重心放到具体功能的实现上，提高了前端开发效率和项目的可维护性。
- 注意：目前 Vue,React 等前端项目，基本上都是基于 webpack 进行工程化开发的。

#### 2. 创建列表隔行变色项目

- 新建项目空白目录，并运行 npm init -y 命令，初始化包管理配置文件 package.json
- 新建 src 源代码目录
- 新建 src -> index.html 首页和 src -> index.js 脚本文件
- 初始化首页基本的结构
- 运行 npm install jquery -s 命令，安装 jQuery
- 通过 ES6 模块化的方式导入 jQuery，实现列表隔行变色效果

#### 3. 在项目中安装 webpack

- 在终端运行如下的命令，安装 webpack 相关的两个包:npm install webpack@5.42.1 webpack-cli@4.7.2
- -S 是--save 的简写：dependencies 指开发和生产环境下都需要
- -D 是--save-dev 的简写：devDependencies 指只在开发环境下需要

#### 4. 在项目中配置 webpack

- 在项目根目录中，创建名为 webpack.config.js 的 webpack 配置文件，并初始化如下的基本配置

```js
module.exports = {
  mode: "development",
  //mode用来指定构建模式。可选值有 development 和 production
};
```

- 在 package.json 的 scripts 节点下，新增 dev 脚本如下

```json
"scripts": {"dev" :"webpack"}
// script 节点下的脚本，可以通过 npm run 执行。例如npm run dev
```

- 在终端中运行 npm run dev 命令，启动 webpack 进行项目的打包构建。

#### 5. 了解 mode 可选值的应用场景

**mode 节点的可选值有两个**

- development
  - 开发环境
  - 不会对打包生成的文件进行代码压缩和性能优化
  - 打包速度快，适合在开发阶段使用
- production
  - 生产环境
  - 会对打包生成的文件进行代码压缩和性能优化
  - 打包速度很慢，仅适合在项目发布阶段使用
    **run 脚本的时候去读取命令**

#### 6. webpack 中的默认约定

- 在 webpack 4.x 和 5.x 的版本中，有如下的默认约定
  - 默认的打包入口文件为 src -> index.js
  - 默认的输出文件路径为 dist -> main.js
- 注意:可以在 webpack.config.js 中修改打包的默认约定

#### 7. 自定义打包的入口与出口

在 webbpack.config.js 配置文件中，通过 entry 节点指定打包的入口。通过 output 节点指定打包的出口。示例代码如下

```js
//entry指定要处理的文件路径
    entry: path.join(__dirname, './src/test.js'),

    //output指定生成文件的存放目录
    output: {
        //生成的目录
        path: path.join(__dirname, 'dist'),
        //生成的文件名
        filename:'bundle.js'
    }
```

### 三、webpack 中的插件

#### 1. webpack 插件的作用

通过安装和配置第三方的插件，可以拓展 webpack 的能力，从而让 webpack 用起来更方便。最常用的 webpack 插件有如下两个

- webpack-dev-server
  - 类似于 node.js 阶段用到的 nodemon 工具
  - 每当修改了源代码，webpack 会自动进行项目的打包和构建
- html-webpack-plugin
  - webpack 中的 HTML 插件(类似于一个模板引擎插件)
  - 可以通过此插件自定制 index.html 页面的内容

#### 2. webpack-dev-server

##### 2.1 安装 webpack-dev-server

代码改变后实时监听代码改动并重新渲染

运行如下的命令，即可在项目中安装此插件

`npm install webpack-dev-server@3.11.2 -D`

##### 2.2 配置 webpack-dev-server

- 修改 package.json Pscripts 中的 dev 命令如下

```js
"scripts": {"dev": "wcbpack serve"} //script 节点下的脚本，可以通过npm run执行
```

- 再次运行 npm run dev 命令，重新进行项目的打包
- 在浏览器中访问 `http://localhost:8080` 地址，查看自动打包效果

注意：webpack-dev-server 会启动一个实时打包的 http 服务器

#### 3. html-webpack-plugin

##### 3.1 安装 html-webpack-plugin

项目发布的时候会把所有文件都放在一个目录下也就是 dist

运行如下的命令，即可在项目中安装此插件

`npm install html-webpack-plugin@5.3.2 -D`

##### 3.2 配置 html-webpack-plugin

```js
// 1. 导入HTML插件，得到一个构造函数
const HtmlPlugin = require("html-webpack-plugin");

// 2. 创建 HTML 插件的实例对象
const htmlPlugin = new HtmlPlugin({
  template: "./src/index.html", // 指定原文件的存放路径
  filename: "./index.html", // 指定生成的文件存放路径
});

module.exports = {
  mode: "development",
  plugins: [htmlPlugin], // 3. 通过 plugins 节点，使 htmlPlugin 插件生效
};
```

##### 3.3 解惑 html-webpack-plugin

1. 通过 HTML 插件复制到项目根目录的 index.html 页面，也被放到了内存中
2. HTML 插件在生成的 index.html 页面，自动注入了打包的 bundle.js 文件

##### 3.4 devServer 节点

在 webpack.config.js 配置文件中，可以通过`devServer`节点对 webpack-dev-server 插件进行更多的配置,示例代码如下

```js
devServer:{
  open:true, //初次打包完成后，自动打开浏览器
  host:'127.0.0.1', //实时打包所使用的主机地址
  port:80 //实时打包所使用的端口号
}
```

注意:凡是修改了 webpack.config.js 配置文件，或修改了 package.json 配置文件，**必须重启实时打包的服务器**，否则最新的配置文件无法生效！

### 四、webpack 中的 loader

#### 1. loader 概述

在实际开发过程中，webpack 默认只能打包处理以.js 后缀名结尾的模块。其他**非.js 后缀名结尾的模块**,webpack 默认处理不了，**需要调用 loader 加载器才可以正常打包**，否则会报错！

loader 加载器的作用：**协助 webpack 打包处理特定的文件模块**。比如

- css-loader 可以打包处理 `.css` 相关的文件
- less-loader 可以打包处理 `.less` 相关的文件
- babel-loader 可以打包处理 `webpack` 无法处理的高级 JS 语法

#### 2. lodaer 的调用过程

![](https://img2023.cnblogs.com/blog/2332774/202303/2332774-20230312221136601-837881825.png)

处理 css 文件

![](https://img2023.cnblogs.com/blog/2332774/202303/2332774-20230312221648262-750369600.png)

#### 3. 打包处理 css 文件

1. 运行 `npm i style-loader@3.0.0 css-loader@5.2.6 -D` 命令，安装处理 css 文件的 loader
2. 在 webpack.config.js 的 module -> rules 数组中，添加 loader 规则如下:

```js
module: {
  // 所有第三方模块的匹配规则
  rules: [
    // 文件后缀名的匹配规则
    { test: /\.css$/, use: ["style-loader", "css-loader"] },
  ];
}
```

其中，**test**表示匹配的**文件类型**，**use**表示对应要**调用的 loader**

注意：

- use 数组中指定的 loader**顺序是固定的**
- 多个 loader 的调用顺序是：**从后往前调用**

**loader**调用顺序

1. webpack 默认只能打包处理.js 结尾的文件。处理不了其它后缀的文件
2. 由于代码中包含了 index.css 这个文件，因此 webpack 默认处理不了
3. 当 webpack 发现某个文件处理不了的时候，会查找 webpack.config.js 这个配置文件，module.rules 数组中，是否配置了对应的 loader 加载器。
4. webpack 把 index.css 这个文件，先转交给最后一个 loader 进行处理(先转交给 css-loader)
5. 当 css-loader 处理完毕之后。会把处理的结果，转交给下一个 loader(转交给 style-loader)
6. 当 style-loader 处理完毕之后，发现没有下一个 loader 了，于是就把处理的结果，转交给了 webpack
7. webpack 把 style-loader 处理的结果，合并到/dist/bundle.js 中，最终生成打包好的文件。

#### 4. 打包处理 less 文件

1. 运行 npm i less-loader@10.0.1 less@4.1.1 -D 命令
2. 在 webpack.config.js 的 module -> rules 数组中，添加 loader 规则如下

```js
module: {
  // 所有第三方模块的匹配规则
  rules: [
    // 文件后缀名的匹配规则
    { test: /\.less$/, use: ["style-loader", "css-loader", "less-loader"] },
  ];
}
```

#### 5. 打包处理样式表中与 url 路径相关的文件

1. 运行 npm i url-loader@4.1.1 file-loader@6.2.0 -D 命令
2. 在 webpack.config.js 的 module -> rules 数组中，添加 loader 规则如下

```js
module: { //所有第三方文件模块的匹配规则
    rules: [ //文件后缀名的匹配规则
    	{ test: /.jpglpnglgif$/, use: "url-loader?limit=22229’}.
    ]
)
```

其中`?`之后的是`loader`的参数项·:

- limit 用来指定`图片的大小`，单位是字节( byte)

- 只有`<=`limit 大小的图片，才会被转为 base64 格式的图片

#### 6. 打包处理 js 文件中的高级语法

webpack 只能打包处理`一部分`高级的 JavaScript 语法。对于那些 webpack 无法处理的高级 js 语法，需要借助于 `babel-loader`进行打包处理。例如 webpack 无法处理下面的 JavaScript 代码:

```js
// 1．定义了名为 info 的装饰器
function info(target) {
  //2．为目标添加静态属性 info
  target.info = "Person info";
}
//3.为 Person类应用info装饰器
@info
class Person {}
//4、打印 Person 的静态属性 info
onsole.log(Person.info);
```

##### 6.1 安装 babel-loader 相关的包

运行如下的命令安装对应的依赖包:

> `npm i babel-loader@8.2.2 @babel/core@7.14.6@babel/plugin-proposal-decorators@7.14.5-D`

在 webpack.config.js 的 module -> rules 数组中，添加 loader 规则如下

```JS
注意:必须使用exclude指定排除项;因为node_modules目录下的第三方包不需要被打包

{{ test: /\.js$/, use: "babel-loader", exclude: /node_modules/ }, // exclude排除node_modules
```

##### 6.2 配置 babel-loader

在项目根目录下，创建名为 babel.config.js 的配置文件，定义 Babel 的配置项如下:

```js
module.exports = {
  //声明babel 可用的插件
  plugins: [["@babel/plugin-proposal-decorators", { legacy: true }]],
};
```

详情请参考 Babel 的官网`https://babeljs.io/docs/en/babel-plugin-proposal-decorators`

### 五、打包发布

#### 1. 为什么要打包发布

**项目开发完成之后**，需要使用 webpack**对项目进行打包发布**，主要原因有以下两点

1. 开发环境下，打包生成的文件**存放于内存中**，无法获取到最终打包生成的文件
2. 开发环境下，打包生成的文件**不会进行代码压缩和性能优化**

**为了让项目能够在生产环境中高性能的运行**，因此需要对项目进行打包发布。

#### 2. 配置 webpack 的打包发布

在**package.json**文件的**scripts**节点下，新增 build 命令如下:

```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "SET NODE_OPTIONS=--openssl-legacy-provider && webpack serve",
    "build": "webpack --mode production"
}
```

**--model**是一个参数项，用来指定 webpack 的**运行模式**。production 代表生产环境，会对打包生成的文件进行**代码压缩**和**性能优化**。

注意：通过--model 指定的参数项，会**覆盖**webpack.config.js 中的 model 选项。

--model 的优先级高于配置文件中的 mode

#### 3. 把 JavaScript 文件统一生成到 js 目录中

在**webpack.config.js** 配置文件的 **output**节点中，进行如下的配置

```js
output: {
    //生成的目录
    path: path.join(__dirname, "dist"),
    //生成的文件名
    filename: "js/bundle.js",
},
```

#### 4. 把图片文件统一生成到 image 目录中

修改 webpack.config.js 中的**url-loader**配置项，新增**outputPath**选项即可指定图片文件的输出路径

```js
{ test: /\.jpg|png|gif$/, use: "url-loader?limit=22229&outputPath=images" },
```

#### 5. 自动清理 dist 目录下的旧文件

为了在每次打包发布时自动清理掉 dist 目录中的旧文件，可以安装并配置 clean-webpack-plugin 插件

```js
//1．安装清理dist目录的 webpack 插件
npm install clean-webpack-plugin@3.0.0 -D
//2．按需导入插件、得到插件的构造函数之后，创建插件的实例对象
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const cleanPlugin = new CleanWebpackPlugin();
//3．把创建的cleanPlugin插件实例对象，挂载到plugins节点中
plugins: [htmlPlugin,cleanPlugin],//挂载插件

```

### 六、Source Map

#### 1. 什么是 SourceMap

**Source Map 就是一个信息文件，里面储存着位置信息**。也就是说，Source Map 文件中存储着压缩混淆后的代码，所对应的转换前的位置。
有了它，出错的时候，除错工具将**直接显示原始代码，而不是转换后的代码**，能够极大的方便后期的调试。

#### 2. webpack 开发环境下的 Source Map

在**开发环境下**，webpack**默认启用了**Source Map 功能。当程序运行出错时，可以直接在控制台提示**错误行的位置**，并**定位到具体的源代码:**

![](https://img2023.cnblogs.com/blog/2332774/202310/2332774-20231026003714005-448872270.png)

#### 3. 默认 SourceMap 的问题

开发环境下默认生成的 Source Map，记录的是**生成后的代码的位置**。会导致**运行时报错的行数**与**源代码的行数**不一致的问题。示意图如下

![](https://img2023.cnblogs.com/blog/2332774/202310/2332774-20231026003750926-1454539779.png)

#### 4. 解决默认 SourceMap 的问题

开发环境下，推荐在 **webpack.config.js**中添加如下的配置，即可保证**运行时报错的行数**与**源代码的行数**保持一致

```js
module.exports = {
  mode: "development",
  //eval-source-map仅限在"开发模式"下使用，不建议在“生产模式"下使用。
  //此选项生成的 Source Map能够保证"运行时报错的行数"与"源代码的行数"保持一致
  devtool: "eval-source-map",
};
```

#### 5. webpack 生产环境下的 Source Map

在**生产环境**下，如果**省略了 devtool 选项**，则最终生成的文件中**不包含 Source Map**。这能够**防止原始代码**通过 Source Map 的形式**暴露**给别有所图之人。

![](https://img2023.cnblogs.com/blog/2332774/202310/2332774-20231026003813526-774442520.png)

**只定位行数不暴露源码**

在生产环境下，如果**只想定位报错的具体行数**，且**不想暴露源码**。此时可以将**devtool**的值设置为**nosources-source-map**。实际效果如图所示:

![](https://img2023.cnblogs.com/blog/2332774/202310/2332774-20231026003827896-2050877727.png)

**定位行数且暴露源码**

在生产环境下，如果**想在定位报错行数的同时，展示具体报错的源码**。此时可以将**devtool**的值设置为**source-map**。实际效果如图所示:

![](https://img2023.cnblogs.com/blog/2332774/202310/2332774-20231026004201966-103200196.png)

采用此选项后:你应该将你的服务器配置为，**不允许普通用户访问 source map 文件!**

#### 6. Source Map 的最佳实践

**开发环境下**

- 建议把 devtool 的值设置为 eval-source-map
- 好处:可以精准定位到具体的错误行

**生产环境下**

- 建议关闭 Source Map 或将 devtool 的值设置为 nosources-source-map
- 好处:防止源码泄露，提高网站的安全性

> 实际开发中需要自己配置 webpack 吗?

答案:不需要!

- 实际开发中会使命令行工具(俗称 CLI)一键生成带有 webpack 的项目
- 开箱即用，所有 webpack 配置项都是现成的!
- 我们只需要知道 webpack 中的基本概念即可!

### 七、Vue 简介

#### 1. 什么是 vue

官方给出的概念: Vue(读音/vju:/，类似于 view)是一套`用于构建用户界面`的前端`框架`。

![](https://img2024.cnblogs.com/blog/2332774/202401/2332774-20240110192212134-1939468634.png)

构建用户界面：用 vue 往 html 页面中填充数据，非常的方便。

框架：可以理解为一套现成的解决方案，程序员只能遵守框架的规范，去编写自己的业务功能。

要学习 vue，就是在学习 vue 框架中规定的用法：vue 的指令、组件(是对 UI 结构的复用)、路由、 Vuex 等。

#### 2. Vue 的特性

Vue 框架的特性，主要体现在如下两方面:

1. 数据驱动视图
2. 双向数据绑定

##### 2.1 数据驱动视图

在使用了 vue 的页面中，vue 会`监听数据的变化`，从而`自动`重新渲染页面的结构。示意图如下:

![](https://img2024.cnblogs.com/blog/2332774/202401/2332774-20240110193016445-256024800.png)

- 好处：当页面数据发生变化时，页面会自动重新渲染!
- 注意：数据驱动视图是`单向的数据绑定`。

##### 2.2 双向数据绑定

在`填写表单`时，双向数据绑定可以辅助开发者在`不操作DOM的前提下`，`自动`把用户填写的内容`同步到`数据源中。示意图如下

![](https://img2024.cnblogs.com/blog/2332774/202401/2332774-20240110193428824-1976286708.png)

- 好处：开发者不再需要手动操作 DOM 元素，来获取表单元素最新的值!

##### 2.3 MVVM

`MVVM`是 vue 实现`数据驱动视图`和`双向数据绑定`的核心原理。MVVM 指的是**M**odel、**V**iew 和**V**iew**M**odel,它把每个 HTML 页面都拆分成了这三个部分，如图所示

![](https://img2024.cnblogs.com/blog/2332774/202401/2332774-20240111222522071-910686295.png)

##### 2.4 MVVM 的工作原理

`ViewModel`作为`MWVM`的核心，是它把当前页面的`数据源`（Model）和`页面的结构`（View）连接在了一起。

![](https://img2024.cnblogs.com/blog/2332774/202401/2332774-20240111223123024-64250736.png)

当`数据源发生变化`时，会被 ViewModel 监听到，VM 会根据最新的数据源`自动更新`页面的结构

当`表单元素的值发生变化`时，也会被 VM 监听到，VM 会把变化过后最新的值`自动同步`到 Model 数据源中

##### 2.5 Vue 的版本

当前，vue 共有 3 个大版本，其中

2.x 版本的 vue 是目前企业级项目开发中的主流版本

3.x 版本的 vue 于 2020-09-19 发布
1.x 版本的 vue 几乎被淘汰，不再建议学习与使用

总结

- 3.x 版本的 vue 是未来企业级项目开发的趋势;
- 2.x 版本的 vue 在未来(1 ～ 2 年内)会被逐渐淘汰;

### 八、Vue 的基本使用

#### 1. 基本使用步骤

![](https://img2024.cnblogs.com/blog/2332774/202401/2332774-20240124192315127-1783355642.png)

#### 2. 基本代码与 MVVM 的对应关系

![](https://img2024.cnblogs.com/blog/2332774/202401/2332774-20240124193158935-1979630152.png)

#### 3. Vue 的调试工具

##### 3.1 安装 vue-devtools 调试工具

vue 官方提供的 vue-devtools 调试工具，能够方便开发者对 vue 项目进行调试与开发

Chrome 浏览器在线安装 vue-devtools :
https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogimejiglipccpnnnanhbledaibpd

FireFox 浏览器在线安装 vue-devtools :
https://addons.mozillaorg/zh-CN/firefox/addon/vue-js-devtools/

##### 3.2 配置 Chrome 浏览器中的 vue-devtools

![](https://img2024.cnblogs.com/blog/2332774/202401/2332774-20240124193607178-233468537.png)

##### 3.3 使用 vue-devtools 调试 vue 页面

![](https://img2024.cnblogs.com/blog/2332774/202401/2332774-20240124193842914-607433093.png)

### 八、Vue 的指令与过滤器

#### 1. 指令的概念

**指令 (Directives)** 是 vue 为开发者提供的**模板语法**，用于**辅助开发者染页面的基本结构**。

vue 中的指令**按照不同的用途**可以分为如下 6 大类

1. 内容渲梁指令
2. 属性绑定指令
3. 事件绑定指令
4. 双向绑定指令
5. 条件渲染指令
6. 列表渲染指令

注意:指令是 vue 开发中最基础、最常用、最简单的知识点

##### 1.1 内容渲染指令

**内容渲染指令**用来辅助开发者**渲染 DOM 元素的文本内容**。常用的内容渲染指令有如下 3 个:

- v-text
- {{}}
- v-html

**1. v-text**

![](https://img2024.cnblogs.com/blog/2332774/202403/2332774-20240317212054393-1650047217.png)

缺点：会覆盖元素内部原有的内容

**2. {{}}**

vue 提供的`{{}}`语法，专门用来解决 v-text 会覆盖默认文本内容的问题。这种`{{}}`语法的专业名称是插值表达式(英文名为: **Mustache**)

![](https://img2024.cnblogs.com/blog/2332774/202403/2332774-20240317213005075-1976482235.png)

`{{}}`插值表达式: 在实际开发中用的最多，只是内容的占位符，不会覆盖原有的内容!

**3. v-html**

**v-text** 指令和插值表达式只能渲染纯文本内容。如果要把**包含 HTML 标签的字符串**渲染为页面的 HTML 元素，则需要用到 **v-html**这个指令:

![](https://img2024.cnblogs.com/blog/2332774/202403/2332774-20240317213509208-897712026.png)

**v-html** 指令的作用:可以把带有标签的字符串，渲染成真正的 HTML 内容!
