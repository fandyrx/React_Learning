import React, { Fragment, PureComponent } from 'react'

// 1.普通CSS  内联样式 ;
//样式不冲突,动态获取state状态,需要驼峰表示,某些样式没有提示.伪类/伪元素无法编写

// 2. 正常引入 
//没有VUE 的scoped ,选择器不好编写,容易造成样式层叠,混乱

// 3. 模块化CSS   不是react独有的,webpack类似的环境
// 3.1样式表名字 XXXX.module.css
// 3.2 按照模块化引入 
// 3.2 样式使用 className{引入模块 .类名 }
//缺点 不能使用链接符 xxx-name  ,不能动态修改样式 


//4.CSS in JS  第三方库 
//yarn add styled-components

import style from './style.module.css'    

class Modal extends PureComponent {
  render() {
    const pStyle = {
      color:"orange",
      textDecoratoin:"underline"
     }
    return  (
        
      <>
        <div style={{color:'red'}}>我是子组件的内容</div>
        <p style={pStyle}>我是P标签</p>
        <div className={style.profile}>我是模块化引入的样式</div>
      </>

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
