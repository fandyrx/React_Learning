import React, { PureComponent } from 'react'
import {
		BrowserRouter,NavLink,Route,Switch
} from 'react-router-dom'
import Home from '@/pages/home.js'
import About from '@/pages/about.js'
import Profile from '@/pages/profile.js'


import "./App.css"

export default class App extends PureComponent {
	render() {
		return (
			<div>
				<BrowserRouter>
				{/* 1.NavLink 内联样式 */}
					{/* <NavLink exact to="/"  activeStyle={{color:"red"}}>首页</NavLink>
					<NavLink to="/about" activeStyle={{color:"red"}}>关于</NavLink>
					<NavLink to="/profile" activeStyle={{color:"red"}}>我的</NavLink> */}
					{/* 2. */}
					<NavLink exact to="/" >首页</NavLink>
					<NavLink to="/about" >关于</NavLink>
					<NavLink to="/profile" >我的</NavLink>
					
					<Switch>
						<Route exact path="/" component={Home}/>
						<Route path="/about" component={About}/>
						<Route path="/profile" component={Profile}/>
					</Switch>
				</BrowserRouter>


			</div>
		)
	}
}
