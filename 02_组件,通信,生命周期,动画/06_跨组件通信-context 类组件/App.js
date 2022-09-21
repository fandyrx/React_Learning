import React, { Component } from 'react'

//1.创建context对象
const UserContext = React.createContext({
  nickName:'aaa',
  level:-1
})

class ProfileHeader extends Component{
  render(){
    //3. 类组件实例身上都有CONTEXT 默认空对象null
   const {nickName,level} = this.context
    //4.一层数据传输嵌套 :类组件不能多个嵌套传值
    return (
      <UserContext.Consumer>

       <div>
           <h2>用户昵称:{nickName}</h2>
          <h2>用户等级:{level}</h2>
        </div>
        
      </UserContext.Consumer>
    )
        // 5.如果是函数式组件 的多层嵌套
        // return (
        //   <UserContext.Consumer>
        //     {
        //       value=>{
        //         return (
        //             <ThemeContext.Consumer>
        //                 {
        //                   theme => {
        //                     return(
  
        //                        <div>
        //                             <h2>用户昵称:{value.nickName}</h2>
        //                             <h2>用户等级:{value.level}</h2>
        //                         </div>
        //                     )
        //                   }
        //                 }
        //             </ThemeContext.Consumer>
        //         )
        //       }
        //     }
        //   </UserContext.Consumer>
        // )

  
  }
  
}

// 4.UserContext 赋值给 contextType 实例便可以通过this.context获取传过来的Value
ProfileHeader.contextType = UserContext

function Profile () {

    return (
      <div>
        < ProfileHeader  />
        <ul>
          <li>设置1</li>
          <li>设置2</li>
          <li>设置3</li>
          <li>设置4</li>
          
        </ul>
      </div>
    )
  }
  




export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      nickName : "kobe",
      level: 99

    }
  }

  render() {
    return (
      <div>
        {/* 2.UserContext.Provider 组件 包裹需要共享数据的子组件 */}
        <UserContext.Provider value={this.state}>
            <Profile  />
        </UserContext.Provider>
       {/* 2.1 若子组件未被包裹,传递的将是 UserContext创建时的默认值 */}
      </div>
    )
  }
}
