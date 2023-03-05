const path = require('path') //导入nodejs中操作路径模块
const HtmlPlugin = require('html-webpack-plugin')

const htmlPlugin = new HtmlPlugin({
    template: './src/index.html', // 指定原文件的存放路径
    filename: './index.html' // 指定生成的文件存放路径
})

//使用Node.js中的导出语法 向外导出一个webpack配置对象
module.exports = {
    //mode用来指定构建模式。可选值有 development 和 production
    //结论：开发阶段使用development 主要追求速度
    //      发布上线使用production 追求打包体积
    mode: "development",
    //插件的数组 将来webpack在运行时会加载并调用这些插件
    plugins: [htmlPlugin], // 通过 plugins 节点，使 htmlPlugin 插件生效
    //entry指定要处理的文件路径
    entry: path.join(__dirname, './src/test.js'),

    //output指定生成文件的存放目录
    output: {
        //生成的目录
        path: path.join(__dirname, 'dist'),
        //生成的文件名
        filename: 'bundle.js'
    },
    devServer: {
        static: '.',
        port: 8081
    }
}