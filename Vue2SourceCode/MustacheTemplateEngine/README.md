# Vue 源码探秘之 mustache 模板引擎

> 学习地址：https://www.bilibili.com/video/BV1EV411h79m

**为什么要学 Vue 源码?**

面试变得越来越难

- 2016 年~2019 年，面试主要考察 Vue 的使用
- 2020 年~2021 年，面试越来越爱考 Vue 底层

![](https://img2024.cnblogs.com/blog/2332774/202403/2332774-20240317225157461-2008349637.png)

中高级前端、leader 职位必会底层知识

- 为企业“造轮子”，开发通用组件
- 解决编程中遇见的问题
- 解决效率问题

**内容循序渐进：**Vue 源码非常庞大，各种机理很多:模板技术、数据劫持、虚
拟节点、最小量更新、抽象语法树....我们将它们一一拆解，从简单知识到复
杂，循序渐进;

**提升编程能力：**手写底层源码，拒绝纸上谈兵，让同学能实打实的提升编程
能力;

**讲解图文并茂：**老师用丰富的图示、例子进行讲解，力求让同学们彻底理解
每一个核心机理;

**新老版本兼顾：**兼顾 Vue2 和 3，它们的底层区别老师上课会着重讲解。核心机
理是共通的、永恒的。

## 一、学习内容

![](https://img2024.cnblogs.com/blog/2332774/202403/2332774-20240317225508004-1907019630.png)

学习本课程的**知识储备前提：**

- 会写一些**JavaScript 常见算法**，比如递归、二维数组遍历等
- 熟悉**ES6 的常用特性**，比如 `let`、`箭头函数`等
- 了解**webpack 和 webpack-dev-server**

## 二、什么是模板引擎

**模板引擎是将数据要变为视图最优雅的解决方案**

![](https://img2024.cnblogs.com/blog/2332774/202403/2332774-20240323165605157-1269592693.png)

`v-for`实际上也是一种模板引擎

> 历史上曾经出现的数据变为视图的方法

![](https://img2024.cnblogs.com/blog/2332774/202403/2332774-20240323165737444-2048451483.png)

1. 纯 DOM 法

```js
let arr = [
  { name: "小明", age: "12", sex: "男" },
  { name: "小红", age: "11", sex: "女" },
  { name: "小强", age: "12", sex: "男" },
];

let list = document.getElementById("list");

for (let i = 0; i < arr.length; i++) {
  // 每遍历一项，都要用DOM方法去创建li标签
  let oLi = document.createElement("li");
  // 创建hd这个div
  let hdDiv = document.createElement("div");
  hdDiv.className = "hd";
  hdDiv.innerText = arr[i].name + "的基本信息";
  // 创建bd这个div
  let bdDiv = document.createElement("div");
  bdDiv.className = "bd";
  // 创建三个p
  let p1 = document.createElement("p");
  p1.innerText = "姓名:" + arr[i].name;
  bdDiv.appendChild(p1);
  let p2 = document.createElement("p");
  p2.innerText = "年龄:" + arr[i].age;
  bdDiv.appendChild(p2);
  oLi.appendChild(hdDiv);
  let p3 = document.createElement("p");
  p3.innerText = "性别:" + arr[i].sex;
  bdDiv.appendChild(p3);
  oLi.appendChild(bdDiv);
  // 创建的节点必须上树用户在才可以被用户看到看到
  list.appendChild(oLi);
}
```

2. 数组 join 法

```js
let arr = [
  { name: "小明", age: "12", sex: "男" },
  { name: "小红", age: "11", sex: "女" },
  { name: "小强", age: "12", sex: "男" },
];
let str = [
  `<li>`,
  `    <div class= "hd" ></div>`,
  `    <div class="bd">`,
  `        <p> 姓名：</p>`,
  `        <p>年龄：</p>`,
  `        <p> 性别：</p>`,
  `    </div>`,
  `</li >`,
].join("");
console.log(str);

let list2 = document.getElementById("list2");
// 遍历arr数组，每遍历一项，就以字符串的视角将HTML字符串添加至list中
for (let i = 0; i < arr.length; i++) {
  list.innerHTML += [
    "<li>",
    '    <div class= "hd" >' + arr[i].name + "的信息</div>",
    '    <div class="bd">',
    "        <p> 姓名：" + arr[i].name + "</p>",
    "        <p>年龄：" + arr[i].age + "</p>",
    "        <p> 性别：" + arr[i].sex + "</p>",
    "    </div>",
    "</li >",
  ].join("");
}
```

3. ES6 的反引号法

```js
let list3 = document.getElementById("list3");
// 遍历arr数组，每遍历一项，就以字符串的视角将HTML字符串添加至list中
for (let i = 0; i < arr.length; i++) {
  list3.innerHTML += `<li>
        <div class= "hd" >${arr[i].name}的基本信息</div>
        <div class="bd">
            <p> 姓名：${arr[i].name}</p>
            <p>年龄：${arr[i].age}</p>
          <p> 性别：${arr[i].sex}</p>
        </div>
    </li >`;
}
```
