import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  constructor(){
    super();
    this.state = {
      name:"",
      password:'',
      valid:""
    }
  }
  render() {
    return (
      <div>
        <form  onSubmit={e=>this.handleSubmit(e)}>
        
         <label htmlFor="userName">
           用户:  <input id="userName"
                        onChange={e=>this.handleChange(e)} 
                        name="name"
                        value={this.state.name}/>
         </label>
         <br/>
        
         <label htmlFor="userPassword">
           密码:  <input id="userPassword"
                         onChange={e=>this.handleChange(e)} 
                         name="password"
                         value={this.state.password}/>
         </label>
         <br/>
         <label htmlFor="userValid">
           验证:  <input id="userValid"
                        onChange={e=>this.handleChange(e)} 
                        name="valid"
                       value={this.state.valid}/>
         </label>
      
         <br/>
          <input type="submit" value="提交"/>
        </form>
      </div>
    )
  }

  handleSubmit(e) {
    e.preventDefault()
    // 收集的数据在STATE,同时用于展示页面数据
    
    const {name,password,valid }  =this.state
    console.log(name,password,valid );
  }

  handleChange(e) {
      // console.log(e.target.value,'changeValue')
      // console.log(e.target.name,'changeName')
    this.setState({
      // [xxx] ed6 计算属性名
        [e.target.name]:e.target.value
    })
}
}
