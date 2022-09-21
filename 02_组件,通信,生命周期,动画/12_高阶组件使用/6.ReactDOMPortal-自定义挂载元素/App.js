import React, { PureComponent } from 'react'
import  ReactDOM  from 'react-dom';
// 用法:将一些元素,挂载到你想挂载的地方

// 1.index.html 写一个<div id="modal"></div>  用于挂载
// 2.引入ReactDOM
// 3.App使用一个组件,正常应该挂载到App组件上
// 4. modal 组件render返回的 ReactDOM.createPortal(挂载元素,挂载到哪个组件)

class Modal extends PureComponent {
  render() {
    return  ReactDOM.createPortal(
      this.props.children,
      document.getElementById("modal")
    )
  }
}




export default class App extends PureComponent {
 
  render() {
    return (
      <div>
        <Modal>
          <h2>我是modal的子元素1</h2>
          <h2>我是modal的子元素2</h2>
        </Modal>
       
      </div>
    )
  }
}
