import React, { Component } from 'react'

//1.创建context对象
// const UserContext = React.createContext({
//   nickName:'aaa',
//   level:-1
// })

function ProfileHeader (props) {
  
  return (

    <div>
      <h2>用户昵称:</h2>
      <h2>用户等级:</h2>

    </div>
  )
}

class Profile extends Component {
  //类组件可用  模拟插槽
  render(){
    const {leftSlot,centerSlot,rightSlot} = this.props

    return (
      <div>
        < ProfileHeader  />
        <hr />
        <div>
          {leftSlot}
        </div>
        <div>
          {centerSlot}
        </div>
          <div>
            {rightSlot}
          </div>
          <hr />
          <div>
           
              {this.props.children[0]}
              {this.props.children[1]}
              {this.props.children[2]}
          </div>
      </div>
    )
  }
  


}


export default class App extends Component {
  render() {
    return (
      <div>
        {/* 插槽2:  通过变量传递jsx 子组件再变量接受展示 */}
        <Profile  leftSlot={<span>父组件传递给子组件,模拟VUE插槽</span>}
                  centerSlot={<strong>中间</strong>}
                  rightSlot={<a href='/#'>标签</a>} >
           {/*插槽1:通过children  */}
            <span>children传入组件/元素</span>
            <span>2号</span>
            <span>3号</span>
        </Profile>
      </div>
    )
  }
}
