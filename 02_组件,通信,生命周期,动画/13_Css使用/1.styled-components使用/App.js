import React, { Fragment, PureComponent } from 'react'
//CSS in JS  第三方库 
//yarn add styled-components
//引入 模块
import styled, { ThemeProvider }   from 'styled-components'

//使用:  使用模板字符串调用函数,获得一个组件
const MyInput = styled.input`
  background-color: lightgrey;
`

/* 
* 1.props 穿透
* 2.attrs 使用
* 3.继承   3.1.styled(需要继承的组件)  
          3.2. ThemeProvider组件引入,包裹子组件,theme={{color:"red"}}
          3.3  子组件内部样式: color:${ props => props.theme.color };
*/        

// props 会穿透,直接再组件上写type 也能起作用,或者利用attrs()函数调用(返回一个函数)
const MyInput2 = styled.input.attrs({
  placeholder:"第二个input属性",
  bColor:"red"
})`
  background-color: lightcoral;
  border-color:${props=>props.bColor}
`
/* attrs({ })  设置属性,等于在标签直接写props*/
/* 优点:下方模板调用函数 props 可以获取到,定义的属性 和 state的数据*/


class Modal extends PureComponent {
  render() {
   
    return  (
        
      <>
        <div>我是子组件的内容</div>
        <p >我是P标签</p>
        <MyInput placeholder='第一个标签属性'></MyInput>
        <MyInput2></MyInput2>
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
