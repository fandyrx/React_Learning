import React, { Component } from "react";



function Profile() {
	return (
		<div>
        123
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
			</div>
		);
   
	}

  //1.更新生命周期,以及回调可以获取最新的值. 异步更新 防止了数据 和页面 不同步 批量修改的优势
	//如果同步更新,render函数未执行,state,props 不同步会有问题
  componentDidUpdate(){
    console.log("更新生命周期:" + this.state.nickName);
  }

  changeText(){
//  setState为异步更新 
    this.setState({
      nickName : "你好啊"
    },()=>{console.log("setState回调:"+this.state.nickName);})
    
    console.log("原本的值:"+this.state.nickName,'setState执行后');
  }

}

如何获取异步更新的数据?
1.this.setState({},回调)
在回调中可以获取到最新的数据

2.componentDidUpdate() {} 生命周期中可以获取异步更新的数据
