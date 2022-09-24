#  v5版本使用
```
<!-- 引入BrowserRouter/HashRouter 路径监测模式不同  -->
import {	BrowserRouter,Link,Route } from 'react-router-dom'

import Home from '@/pages/home.js'
import About from '@/pages/about.js'
import Profile from '@/pages/profile.js'

export default class App extends PureComponent {
	render() {
		return (
			<div>
				<BrowserRouter>
					<Link to="/">首页</Link>
					<Link to="/about">关于</Link>
					<Link to="/profile">我的</Link>

					<Route exact path="/" component={Home}/>
					<Route path="/about" component={About}/>
					<Route path="/profile" component={Profile}/>
				</BrowserRouter>


			</div>
		)
	}
}

```
## Link 组件  a标签,to属性匹配跳转路径,component 匹配展示组件

## NavLink 组件
- 1.activeStyle属性 {{color:"red"}} ;传入一个对象 
- 2.默认添加类名active  
- 3.activeClassName 可以更改默认活跃时的类名

## exact 属性 精准匹配 
 - 1. Route 路由展示标签,path 默认模糊匹配  

## Switch 组件  只展示首个匹配路由,其他匹配不展示
```
	        <Switch>
						<Route exact path="/" component={Home}/>
						<Route path="/about" component={About}/>
						<Route path="/profile" component={Profile}/>
						<Route path="/:id" component={User}/>
						<Route  component={Nomatch}/>
					</Switch>
```
## Redirect  组件
<Redirect to="/home">

## history 非window
route组件渲染,this.props能获取(history,location,match)

## 根组件如何获取history 
- 引入withRouter() 
- 利用高阶函数转换再暴露,子组件可以获取到this.props.history
- 组件外部需要包裹router 

## 动态路由
- /detail/:id
- this.props.match  获取路径,params信息
  
## Link to 路由复杂传参
- to= "String/Object/function"
 ```
  NavLink to={{
        pathname:"/detail",   //必须
        search:"?name=abc", //query 一般直接写在路径后简单传参
        hash:"",            //根据使用模式
        state: info         //复杂传递参数 ,定义好数据,通过state
      }}

  
```


# 库
```
import {
	BrowserRouter,NavLink,Route,Switch
} from 'react-router-dom'

yarn add react-router-dom@5 5版本router-dom  自动附带router库
```

```
yarn add react-router-config 路由配置管理  

引入组件 renderRoutes()  传入配置的路由信息,替代多个 Route标签展示占位
this.props.route 能获取当前页面路由路径,用于获取准确子路由
```