const path = require("path")
const { defineConfig } = require("@vue/cli-service")
module.exports = defineConfig({
  publicPath: "./",
  transpileDependencies: true,
  devServer: {
    historyApiFallback: true,
    proxy: {
      "^/api": {
        target: "http://152.136.185.210:5000",
        pathRewrite: { "^/api": "" },
        changeOrigin: true
      }
    }
  },

  // 配置方式二： 与webpack一致，最终合并
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       views: "@/views"
  //     }
  //   }
  // }
  // configureWebpack: (config) => {
  //   config.resolve.alias = {
  //     "@": path.resolve(__dirname, "src")
  //   }
  // }

  // 配置方式三：使用chainWebPack链式调用
  chainWebpack: (config) => {
    config.resolve.alias
      .set("@", path.resolve(__dirname, "src"))
      .set("components", "@/components")
  }
})
