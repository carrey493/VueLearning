//1.引入 jquery
import $ from 'jquery'

// 倒入样式(在webapck中一切皆模块，都可以通过ES6语法进行导入与使用)
import './css/index.css'
import './css/index.less'

//2.定义入口函数
$(function () {
    //3.具体实现
    $('li:odd').css('background-color', 'blue')
    $('li:even').css('background-color', 'pink')
})