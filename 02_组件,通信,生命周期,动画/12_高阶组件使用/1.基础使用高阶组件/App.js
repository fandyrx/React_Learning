import React, { PureComponent } from 'react'

 class App extends PureComponent {
  render() {
    return (
      <div>App:{this.props.name}</div>
    )
  }
}
// 只是用来修改开发者工具组件的展示名字(非必要)
App.displayName="bryant"

function enhanceComponent(WrappedComponent) {
  class NewComponent extends PureComponent {
    render() { 
      // 如果需要将上层的信息传递给底部组件
      return <WrappedComponent {...this.props}/>
    }
  }
  // 只是用来修改开发者工具组件的展示名字(非必要)
  NewComponent.displayName = "Kobe"
  return  NewComponent
}


const EnhanceComponent = enhanceComponent(App)
export default  EnhanceComponent;