import React, { PureComponent } from 'react'

import	{SwitchTransition,CSSTransition } from "react-transition-group"
// 1.mode='out-in' EXIT类名 先执行 
// 2. key 


class SwitchTransitionDemo extends PureComponent {
	constructor(props) {
		super(props);
		this.state={
			isOn: true
		}
	} 
		render() {
			const {isOn} = this.state
			return(
				<div>
					<SwitchTransition mode='out-in'>
						<CSSTransition  key={isOn? "on":"off"}
														classNames="btn"	
														timeout={300}	>
							<button onClick={e=>this.setState({isOn:!isOn})}>
								{isOn? "on":"off"}
							</button>
						</CSSTransition>
					</SwitchTransition>
				</div>
			)
		}
}


export default class App extends PureComponent {
	render() {
		return (
			<div style={{textAlign:"center"}}>
					<SwitchTransitionDemo></SwitchTransitionDemo>
			</div>
		)
	}
}
