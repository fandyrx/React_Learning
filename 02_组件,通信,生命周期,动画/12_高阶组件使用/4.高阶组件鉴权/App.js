import React, { PureComponent } from 'react'

// 鉴权
function withAuth (WrappedComponent) {
  return props=>{
    const {isLogin}= props
    if(isLogin){
      return  <WrappedComponent {...props} />
    }else {
      return <Login />
    }
    
    } 
}




class Cart extends PureComponent {
  render(){
    return ( 
    <div>Cart(isLogin=true)</div>
    )
  }
   
}

class Login extends PureComponent {
  render(){
    return ( 
    <div>Login登录页(isLogin=false)</div>
    )
  }
   
}

const AuthCart  = withAuth(Cart)
export default class App extends PureComponent {
  render() {
    return (
      <div>
        App
        <AuthCart isLogin={true}/>
      </div>
    )
  }
}
