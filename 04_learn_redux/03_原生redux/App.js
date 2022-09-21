import React, { PureComponent } from 'react'
import About from '@/pages/about.js'
import Home from '@/pages/home.js'



export default class App extends PureComponent {
	render() {
		return (
			<div>
				<Home />
				<About/>
			</div> 
		)
	}

	
}




