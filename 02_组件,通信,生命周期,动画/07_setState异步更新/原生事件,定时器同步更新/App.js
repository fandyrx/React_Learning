import React, { Component } from "react";

function Profile() {
	return (
		<div>
      setState 一定是异步吗?
		</div>
	);
}

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nickName: "kobe",
			level: 99,
		};
	}

	render() {
    console.log("render执行");
		return (
			<div>
  
          <Profile />
          <hr/>
          <h2>{this.state.nickName}</h2>
          <button onClick={e=>{this.changeText()}}>changeText</button>
          <button id="btn">changeText</button>
			</div>
		);
   
	}
  componentDidMount(){

    //2.情况2 : 原生DOM事件
    const btnEl = document.getElementById("btn")
    btnEl.addEventListener("click",()=>{
      this.setState({
        nickName : "你好啊"
      })
      
       console.log("原生dom事件中:"+this.state.nickName,'setState执行后')
    })
  }
  

  changeText(){
    //1.情况1:定时器 
    setTimeout(() => {
      this.setState({
        nickName : "你好啊"
      })
      
       console.log("setTimeout中:"+this.state.nickName,'setState执行后')
    
    }, 0)

}
}