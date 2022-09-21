import React, { Component } from "react";

function Profile() {
	return (
		<div>
      setState 一定是异步吗?
		</div>
	);
}
// 1.需求:页面不依赖的数据变化时,不需要执行render函数
//2.生命周期  shouldComponentUpdate(nextProps,nextState) { }
    
  

//根组件
export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			movies:['大话西游','大内密探','审死官'],
      count:0
		};
	}

	render() {
    console.log("render执行");
		return (
			<div>
          <Profile />
          <hr/>
          <h2>
           {
             this.state.movies.map(item=>{
              return <li key={item}>{item}</li>
            })
           }
       
          </h2>
          <button onClick={e=>{this.insertMovie()}}>changeText</button>
          <button onClick={e=>{this.changeCount()}}>changeCount</button>
        
			</div>
		);
   
	}
  shouldComponentUpdate(nextProps,nextState) {
        if(this.state.movies !== nextState.movies) {
          return true;
        }
        return false;
  }

  insertMovie() {
    this.setState({
      movies : ['美人鱼',...this.state.movies]
    })
  };

  changeCount() {
    this.setState({
      count : ++this.state.count
    })
  } 
}