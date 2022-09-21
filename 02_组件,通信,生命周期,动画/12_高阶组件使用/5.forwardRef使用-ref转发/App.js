import React, { PureComponent,createRef,forwardRef } from 'react'

//1.forwardRef 高阶组件 该函数 用于转发ref
const Profile = forwardRef(function (props,ref) {
  return <p ref={ref}>Profile</p>
} )


//2.传入一个函数式组件,新增一个参数 ref  

//3. App 组件创建ref实例, 通过高阶组件新增ref参数,通过转发  获取到另一个组件内的元素


export default class App extends PureComponent {
  constructor(props){
    super(props);
    
    this.titleRef = createRef();
  }
  render() {
    return (
      <div>
        App
       
      </div>
    )
  }
}
