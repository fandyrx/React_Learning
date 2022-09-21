import React, { PureComponent } from 'react'

import	{CSSTransition} from "react-transition-group"
//1. 3个状态appear,enter,exit
/**
 * 	1.包裹子组件
 * 	2.in 属性决定动画使用与否   (必须)
 * 	3.classNames=""  添加类名   会自动拼接再每个动画过程 (必须)
 * 	4. timeout = {"Number"}  	类名切换 时间ms    (必须)
 * 	5. unmountOnExit={Boolean} 动画展示exit 是否消除dom
 *  6. appear  用户刷新页面,是否动画过程-需要添加CSS   
 * 	7.onEnter = (el=>...) 回调  onEntering onEntered 对应exit 
 * 
 */


class CSSTransitionDemo extends PureComponent {
	constructor(props) {
		super(props);
		this.state={
			isShow: true
		}
	} 
		render() {
			const {isShow} = this.state
			return(
				<div>
					<button onClick={e=>this.setState({isShow:!isShow})}>显示/隐藏</button>
					<CSSTransition in={isShow}
												classNames="card"
												timeout={300}
												appear
												onEnter={el=>console.log("开始进入")}
												onEntering={el=>console.log("进入ing")}
												onEntered={el=>console.log("已进入")}
												onExit={el=>console.log("开始退出")}>
						<h2>CSSTransition测试</h2>
					</CSSTransition>
				</div>
			)
		}
}


export default class App extends PureComponent {
	render() {
		return (
			<div>
					<CSSTransitionDemo></CSSTransitionDemo>
			</div>
		)
	}
}
