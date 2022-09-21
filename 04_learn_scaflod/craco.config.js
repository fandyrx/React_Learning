const CracoLessPlugin = require('craco-less');
const path = require("path"); //node 自带模块
// __dirname 当前config.js所在路径,dir该函数传入的路径  ,拼接路径
const resolve = dir => path.resolve(__dirname,dir)


module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
// webpack配置别名,调用resolve()函数,传入需要拼写的地址
  webpack: {
    alias: {
      "@":resolve("src"),
      "components": resolve("src/components")
    }
  }


};