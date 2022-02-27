module.exports = {
  //开发环境配置
  devServer: {
    //默认端口
    port: 8081,
    //设置代理
    proxy: {
      '/api/': {
        //目标API地址
        target: 'http://localhost:8080',
        //将主机标头的原点改为目标URL
        changeOrigin: true,
      },
    },
  },
  //生产环境配置
  //默认部署时按服务器下路径寻找资源
  //编译时使用相对路径
  publicPath: '/',
  //编译后不生成map映射文件
  productionSourceMap: false,
}
