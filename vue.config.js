module.exports = {
  publicPath: "./",
  devServer: {
    port: 8033,
    disableHostCheck: true // 处理host不识别问题
    /*  proxy: {
      '/api': {
        target: '<url>',
        ws: true,
        changeOrigin: true
      },
      '/foo': {
        target: '<other_url>'
      }
    } */
  },
  assetsDir: "static",
  outputDir: process.env.outputDir // 打包生成目录
};
