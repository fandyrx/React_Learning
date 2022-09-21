import React, { PureComponent } from 'react'

import ReactDOM from 'react-dom';

export default class App extends PureComponent {
	state =  { opacity:1 }

	componentDidMount(){
		this.timer =setInterval(() => {
			let {opacity} = this.state
	
			opacity -= 0.1;
	
			if(opacity <= 0) opacity = 1
			this.setState({
				opacity
			})
		}, 200);
	
	}

	componentWillUnmount(){
		clearInterval(this.timer)
	}
 render() {
	
	 return (
		 <div>
			 <h2 style={{opacity:this.state.opacity}}>React张天禹</h2>
			 <button onClick={e=> this.unmount()}>卸载组件</button>
		 </div>
	 )
 }

 unmount() {
	 ReactDOM.unmountComponentAtNode(document.getElementById('root'))
 }


}

