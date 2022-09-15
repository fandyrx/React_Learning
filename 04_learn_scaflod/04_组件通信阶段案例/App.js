import React,{Component} from "react" 

import TabControl from "./TabControl"

export default class App extends Component{
  constructor(){
    super();
    //固定的数据
    this.titles = ['新款',"精选","流行"]
    
    this.state = {
      currentTitle: "新款",
      currentIndex: 0 
      // 根据业务需要保存索引或者标题，一般写变化的数据
     }
  }

  render() {
    const {currentIndex,currentTitle} = this.state
    return (
      <div>
        <TabControl itemClick={index=>{this.itemClick(index)}} titles={this.titles} />
        <h2>{currentIndex}</h2>
        <h2>{currentTitle}</h2>
      </div>
    )
  }

  itemClick(index){
    this.setState({
      currentIndex: index,
      currentTitle: this.titles[index]
    })
  }

}