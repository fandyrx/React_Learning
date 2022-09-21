import React, { PureComponent } from 'react'

// 需求1.context保存数据.React.createContext()
const UserContext = React.createContext({
  // 默认值
  name:"默认",
  age:18
});

// 高阶组件 转换  抽取组件Consumer 不用重复去写 ,组件排列样式由 组件自身决定
function withUser  (WrappedComponent){
  return props=>{
    return (
      <UserContext.Consumer >
        {
          user=> {
            return <WrappedComponent {...user} {...props} />
          }
        }
     </UserContext.Consumer>
    )
  }
}






// Home类组件
class Home extends PureComponent {
  render() {
    return (
      <div>
        Home
       <div>{`名字:${this.props.name}年龄:${this.props.age}`}</div>
     </div>
    )
  }
}


//About 
class About extends PureComponent {
  render() {   
   return (
     <div>
        About
       <div>{`名字:${this.props.name}年龄:${this.props.age}`}</div>
     </div>
   )
  }
}

// 高阶组件 HOC转换
const UserHome = withUser(Home)
const UserAbout = withUser(About)


//1.根组件  使用context传递信息 
class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name:'kobe',
      age:24
    }
  }
  render() {
    return (
    
       <UserContext.Provider value={this.state}>
           <UserHome  />
           <UserAbout />
       </UserContext.Provider>
         
      
    )
  }
}


export default  App;