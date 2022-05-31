//使用Node.js中的导出语法 向外导出一个webpack配置对象
module.exports = {
    mode: "development"
    //mode用来指定构建模式。可选值有 development 和 production
    //结论：开发阶段使用development 主要追求速度
    //      发布上线使用production 追求打包体积
}