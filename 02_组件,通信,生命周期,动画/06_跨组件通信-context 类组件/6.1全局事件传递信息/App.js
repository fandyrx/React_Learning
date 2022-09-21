import React, { PureComponent } from 'react'
// 1.下载,并引入 类
import { EventEmitter} from "events"
//2.创建实例  
const eventBus = new EventEmitter();

class Home extends PureComponent {
  componentDidMount() {
    //3.绑定检测事件
    eventBus.addListener("sayHello",this.handleSayHelloListener)
  }
  componentWillUnmount (){
    //4.组件卸载时候卸载该事件监听 释放内存
    eventBus.removeListener("sayHello",this.handleSayHelloListener)
  }
  // 该事件总线回调
  handleSayHelloListener(...args) {
    console.log(args)
  }

  render() {
    return(
      <div>
        Home
      </div>
    )
  }
}
class Profile  extends PureComponent {
  render() {
    return(
      <div>
        <button onClick={e=> this.emitEvent()}>点击发射事件</button>
      </div>
    )
  }

  emitEvent() {
    // 5.点击发射事件,事件名
    eventBus.emit("sayHello","hello,home",123)
    
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home></Home>
        <Profile></Profile>
      </div>
    )
  }
}
