module.exports = {
  publicPath: "./",
  devServer: {
    port: 8033,
    disableHostCheck: true // 处理host不识别问题
  },
  assetsDir: "static",
  outputDir: process.env.outputDir // 打包生成目录
};
