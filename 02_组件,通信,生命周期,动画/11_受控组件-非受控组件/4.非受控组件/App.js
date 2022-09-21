import React, { PureComponent,createRef } from 'react'

// 非受控组件指 :组件的数据不由React 控制,展示.以下为使用ref 直接获取DOM
export default class App extends PureComponent {
  constructor(){
    super();
    //1.创建ref对象
    this.inputRef = createRef();
  
  }
  render() {
    return (
      <div>
        <form  onSubmit={e=>this.handleSubmit(e)}>
        
         <label htmlFor="userName">
           用户:  <input id="userName"
          //  2.绑定
                        ref={this.inputRef} />
         </label>
       
          <input type="submit" value="提交"/>
        </form>
      </div>
    )
  }

  handleSubmit(e) {
    e.preventDefault()
    //获取dom元素,ref.current   
console.log(this.inputRef.current.value)

  }


}
