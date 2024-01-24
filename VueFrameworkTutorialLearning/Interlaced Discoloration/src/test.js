//1.引入 jquery
import $ from "jquery";

// 导入样式(在webapck中一切皆模块，都可以通过ES6语法进行导入与使用)
// 如果在某个模块中，使用 from 接收到的成员为undefined，则没有必要接收。
import "./css/index.css";
import "./css/index.less";

//2.定义入口函数
$(function () {
  //3.具体实现
  $("li:odd").css("background-color", "blue");
  $("li:even").css("background-color", "pink");
});

// 1. 导入图片，得到图片文件
import logo from "./images/favicon.png";

// 2. 给img标签的src赋值
$(".box").attr("src", logo);

// 1．定义了名为 info 的装饰器
function info(target) {
  //2．为目标添加静态属性 info
  target.info = "Person info";
}
//3.为 Person类应用info装饰器
@info
class Person {}
//4、打印 Person 的静态属性 info
console.log(Person.info);
