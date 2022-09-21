import React,{Component} from "react" 
//类型验证
import PropTypes from "prop-types"

//1.函数组件 props 为父组件传入属性
 function ChildCpn(props) {
  const{name, age , height} = props;
  const { names } = props;

  return (
    <div>
      <h2>{name + age + height}</h2>
      <ul>
        {
          names.map((item,index)=>{
            return <li>{item}</li>
          })
        }
      </ul>
    </div>
  )
 } 

//2.传递信息props  类型校验  组件.propTypes 配置项,首字母小写, 下面使用的是自定义别名P才能大写
ChildCpn.propTypes = {
  name: PropTypes.string.isRequired,  //必须
  age: PropTypes.number,
  height: PropTypes.number,
  names: PropTypes.array
  
}

//3.默认值
ChildCpn.defaultProps = {
  name:"why",
  age:6666
}

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
        <h2>当前计数: {this.state.counter}</h2>
        <button>+</button>
        <button>-</button>
        <ChildCpn name="名字" age ={18} height={1.88} names={["名字一","名字二"]} />
      </div>
    )
  }
}