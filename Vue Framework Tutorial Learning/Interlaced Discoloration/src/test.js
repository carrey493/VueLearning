//1.引入 jquery
import $ from 'jquery'

// 导入样式(在webapck中一切皆模块，都可以通过ES6语法进行导入与使用)
// 如果在某个模块中，使用 from 接收到的成员为undefined，则没有必要接收。
import './css/index.css'
import './css/index.less'

//2.定义入口函数
$(function () {
    //3.具体实现
    $('li:odd').css('background-color', 'blue')
    $('li:even').css('background-color', 'pink')
})

// 1. 导入图片，得到图片文件
import logo from './images/favicon.png'

// 2. 给img标签的src赋值
$('.box').attr('src',logo)
