import React, { PureComponent,createRef } from 'react'

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.titleRef = createRef();
    this.titleEl =  null;
  }
  render() {
    return (
      <div>
        {/* 1.字符串获取dom已废弃 */}
        {/* <h1 ref="title">Hello,World</h1> */}
        {/* 2.createRef  */}
        <h1 ref={this.titleRef}>Hello,World</h1>
        <h1 ref={arg => this.titleEl = arg}>Hello,World</h1>
         <button onClick={e=>{this.changeText()}}>改变文本</button>
      </div>
    )
  }

  changeText() {
    //1.对象方式获取DOM元素 this.titleRef.current
    console.log(this.titleRef.current)

    this.titleRef.current.innerText = "Hello ,React"
        // 2.回调函数方式
    this.titleEl.innerText = "Hello ,React"
    // 3.类组件 ref 同理,但是函数式组件不能获取,因为它们没有实例
  }

}
