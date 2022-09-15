import React,{Component} from "react" 



class ChildCpn extends Component {
  constructor(){
    // 初始化state 绑定this
    super();
    console.log("1.construtor方法,第一个执行")
    //状态
    this.state = {
      counter: 0
    }
    // this.increment.bind(this)
  }
 
  render() {

    console.log("2.render方法执行,第二个执行/每次数据更新"); 
  
    return(
    <div>
      <h2>{this.state.counter}</h2>
       {/* 点击执行箭头函数,箭头函数的函数体为,调用回调   */}
      <button onClick= {e=>{ this.increment() }}> 数字+1 </button>
    </div>
     )
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1 
    })
  }
  //3. 组件挂载完成
  componentDidMount() {
    // 一般用于操作DOM阶段 ,网络请求,订阅
    console.log("3.componentDidMount函数调用,挂载阶段结束");
  }
  //4.数据更新完成 
  componentDidUpdate() {
   //  一般 组件更新Dom操作,props进行比较, 根据变化发送网络请求
    console.log("4.componentDidUpdate函数调用.只有数据更新才会调用");
  }
  //5.组件卸载时调用
  componentWillUnmount() {
    // 一般用于清除网络请求,timer,订阅等事件
    console.log("5.componentWillUnmount调用,组件卸载时调用");
  }

}


  


export default class App extends Component{
  constructor() {
    super();
    this.state = {
      isShow: true
    }
  }

  render() {
    return (
      <div>
        <button onClick={e=> { this.changeCpnShow()}}>切换子组件</button>
       {this.state.isShow && <ChildCpn />}
      </div>
    )
  }

  changeCpnShow(){
    this.setState({
      isShow: !this.state.isShow
    })
  }
}