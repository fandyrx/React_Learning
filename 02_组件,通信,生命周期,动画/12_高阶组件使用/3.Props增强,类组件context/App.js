import React, { PureComponent } from 'react'

// 需求1.context保存数据.React.createContext()
const UserContext = React.createContext({
  // 默认值
  name:"默认",
  age:18
});







//根组件
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
           <Home />
           <About />
       </UserContext.Provider>
         
      
    )
  }
}
// 不建议这样, XX组件.contextType = UserContext 这个操作需要多次使用
// Home类组件
class Home extends PureComponent {
  render() {
    const {name,age} = this.context
    console.log(this.context,"home")
    return (
      <div>
        Home
        <div>{`名字:${name}年龄:${age}`}</div>
      </div>
    )
  }
}
//赋值
Home.contextType = UserContext

//About  1.使用Consumer组件包裹2. {}内表达式 写箭头函数 3.再return  jsx
class About extends PureComponent {
  render() {   
    return (
     <UserContext.Consumer >
      {
        user=>{
          return(
              <div>
                   About
                  <div>{`名字:${user.name}年龄:${user.age}`}</div>
               </div>)
       
         }
      }
     </UserContext.Consumer>
    )
  }
}






function enhanceComponent(WrappedComponent) {
  class NewComponent extends PureComponent {
    render() { 
      return  <WrappedComponent {...this.props} />
         
    }
  }
  return  NewComponent
}


const EnhanceComponent = enhanceComponent(App)

export default  EnhanceComponent;