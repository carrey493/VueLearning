//1.引入 jquery
import $ from 'jquery'

//2.定义入口函数
$(function () {
    //3.具体实现
    $('li:odd').css('background-color', 'red')
    $('li:even').css('background-color', 'orange')
})