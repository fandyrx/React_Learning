import React,{Component} from "react" 


//子组件 控制父组件状态
class ChildCpn extends Component {

  render() {
    const { btnClick } = this.props
    return(
        <button onClick={btnClick}>子组件按钮+1</button>
     )
  }

  

}


  


export default class App extends Component{
  constructor() {
    super();
    this.state = {
      counter: 0
    }
  }

  render() {
    return (
      <div>
          <h2>{this.state.counter}</h2>
        {/* <ChildCpn btnClick = {this.increment}/>  报错this 为undefiend*/}
        {/* 1.方法绑定this */}
        {/* <ChildCpn btnClick = {this.increment.bind(this)}/> */}
        {/* 3. 箭头函数 */}
        <ChildCpn btnClick = {e=> this.increment()}/>
      </div>
    )
  }

  // 2.箭头函数 没有THIS指向
  // increment = () =>{
  //   this.setState({
  //     counter: this.state.counter + 1 
  //   })
  // }
  // 3.表达式内为箭头函数
  increment  (){
    this.setState({
      counter: this.state.counter + 1 
    })
  }
}