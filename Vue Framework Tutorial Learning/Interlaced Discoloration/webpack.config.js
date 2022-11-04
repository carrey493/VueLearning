const path = require('path') //导入nodejs中操作路径模块

//使用Node.js中的导出语法 向外导出一个webpack配置对象
module.exports = {
    //mode用来指定构建模式。可选值有 development 和 production
    //结论：开发阶段使用development 主要追求速度
    //      发布上线使用production 追求打包体积
    mode: "development",

    //entry指定要处理的文件路径
    entry: path.join(__dirname, './src/test.js'),

    //output指定生成文件的存放目录
    output: {
        //生成的目录
        path: path.join(__dirname, 'dist'),
        //生成的文件名
        filename:'bundle.js'
    },
    devServer: {
        static: '.',
        port: 8081
    }
}