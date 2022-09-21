import React, { Fragment, PureComponent } from 'react'

//1.<React.StrictMode> 严格模式,检查 不安全生命周期 
//2 .constructor 会被调用两次,检查副作用(生产环境不会调用两次)
//3. 过时的语法,过时的ref API contex tAPI

class Modal extends PureComponent {
  render() {
    return  (
<React.StrictMode>
      <>
        <div>我是子组件的内容</div>
      </>
</React.StrictMode>
    )
    
  }
}




export default class App extends PureComponent {
 
  render() {
    return (
      <Fragment>
        <Modal>
          <h2>我是modal的子元素1</h2>
          <h2>我是modal的子元素2</h2>
        </Modal>
       
      </Fragment>
    )
  }
}
