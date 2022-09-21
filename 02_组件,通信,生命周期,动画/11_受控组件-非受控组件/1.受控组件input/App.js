import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  constructor(){
    super();
    this.state = {
      value:1
    }
  }
  render() {
    return (
      <div>
        <form  onSubmit={e=>this.handleSubmit(e)}>
        {/* // 1.受控组件:页面的展示数据,完全依赖于state的数据改变 */}
         <label htmlFor="userName">
           用户:  <input id="userName"
                  onChange={e=>this.handleUsername(e)} 
                  value={this.state.value}/>
         </label>
        
          <input type="submit" value="提交"/>
        </form>
      </div>
    )
  }

  handleSubmit(e) {
    e.preventDefault()
    // 收集的数据在STATE,同时用于展示页面数据
    console.log(this.state.value)
  }

  handleUsername(e) {
console.log(e.target.value)
    this.setState({
      value:e.target.value
    })
}
}
