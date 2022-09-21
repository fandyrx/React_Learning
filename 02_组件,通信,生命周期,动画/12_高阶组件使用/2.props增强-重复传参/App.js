import React, { PureComponent } from 'react'
// 1.需求,同样的props 使用高阶组件转换,实现一次传递


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
    
      <div>
          <EnhanceHome name="Home组件" age={18}/>
           <EnhanceAbout name="About组件" age={26}/>
      </div>

      
    )
  }
}

// Home类组件
class Home extends PureComponent {
  render() {

    return (
      <div>
        Home
        <div>{`名字:${this.props.name}年龄:${this.props.age}
        区域:${this.props.region}`}</div>
      </div>
    )
  }
}

// About类组件
class About extends PureComponent {
  render() {

    return (
      <div>
       About
        <div>{`名字:${this.props.name}年龄:${this.props.age}
        区域:${this.props.region}`}</div>
      </div>
    )
  }
}
//生成新的组件,并使用,往外部暴露时则根据引入名使用即可
const EnhanceHome = enhanceRegionProps(Home)
const EnhanceAbout = enhanceRegionProps(About)

// props强化高阶组件 函数
function enhanceRegionProps (WrappedComponent) {
  return props => {
    return <WrappedComponent {...props} region="中国"/>
  }
}

// 例子 高阶组件内部的 props 传递方式演示
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