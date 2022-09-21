# 一: **基本使用**: 类似element-ui
## 1.使用包管理器download 所需库: antd
## 2.引入所需组件,样式 
```
//第一个是icon图标
import { PoweroffOutlined } from '@ant-design/icons'
//第二个是所需组件
import { Button, Space } from 'antd';
//第三个是样式表
import 'antd/dist/antd.css';

```
## 3.查看文档组件 cv起来 按个人需要修改属性参数


# 二: **主题修改** craco 
名词解释:CRA (create-react-app)脚手架的缩写名称
- 1.熟悉webpack 可以 yarn run eject 暴露 配置信息,修改
- 2.不熟悉的:早期方案(react-app-rewired + customize-cra)
- 3. craco;(目前antd推荐的方案)
-  使用方式: yarn add @craco/craco 
   -  1.package.json 脚本修改: 使用craco 运行脚本
   ``` 
    /* package.json */
    "scripts": {
    -   "start": "react-scripts start",
    -   "build": "react-scripts build",
    -   "test": "react-scripts test",

    +   "start": "craco start",
    +   "build": "craco build",
    +   "test": "craco test",
    }

   ```
   -2. 根目录创建一个 craco.config.js 用于修改默认配置。
    ```
    /* craco.config.js */
    module.exports = {
      // ...
    };
    ```
  - 3. 安装 craco-less 并修改 craco.config.js (类似vue.config.js合并到隐藏的webpack配置)
  - 4.  主文件引入css 需要修改为 less(因为上方操作是在修改less) 


# ****报错相关****
   **antd使用:**
## 1.error Missing list of packages to add to your project.
- yarn add --save @ant-design/icons  不用添加 -save  直接跟包名 ,否则会报错

## 2.react 18 按需引入 antd 报错无法识别
- package.json babel配置修改,脚手架创建缺少
  ```
   "babel": {
    "presets": [
      "react-app"
    ],
    "plugins": [
      [
        "import",
        {
          "libraryName": "antd",
          "libraryDirectory": "es",
          "style": "css"
        }
      ]
    ]
  }
  ```
> https://www.cnblogs.com/HJ412/p/11803489.html

## 3. 样式引入错误
App.js:
 - import 'antd/dist/antd.css'; 
```
Compiled with warnings.

Failed to parse source map: 'webpack://antd/./components/config-provider/style/index.less' URL is not supported

Failed to parse source map: 'webpack://antd/./components/icon/style/index.less' URL is not supported

Failed to parse source map: 'webpack://antd/./components/locale-provider/style/index.less' URL is not supported

Failed to parse source map: 'webpack://antd/./components/time-picker/style/index.less' URL is not supported

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.
```
>解决方案: 

      1. 引入改为 antd.min.css
        
      2.修改 src/App.css，在文件顶部引入antd/dist/antd.css。 (官网文档)

      @import '~antd/dist/antd.css'; 