import React,{Component} from "react" 
//类型验证
import PropTypes from "prop-types"

class ChildCpn extends Component {
//  1.父组件传入PROPS 传递给 父类super(props) 实际绑定到this
  // constructor(props) {
  //   super(props);
  // }
  // 派生类 默认执行上面操作,可以不写

  render() {
    //this 
    const {name,age} = this.props
    return(
      <h2>子组件:{name+''+ age}</h2>
    )
  }



   //1.es6  class fields 写法 类型校验
  //  static PropTypes = {

  //   }
  //   //默认值
  //   static defaultProps ={

  //   } 


}

//2.类型校验,同函数组件
ChildCpn.propTypes = {
  age: PropTypes.string
}



//3.父组件






export default class App extends Component{
  constructor() {
    super();
    this.state = {
      counter:0
    }
  }

  render() {
    return (
      <div>
        <ChildCpn name="名字" age ={18} height={1.88} names={["名字一","名字二"]} />
      </div>
    )
  }
}