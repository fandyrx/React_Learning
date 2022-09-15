import React, { PureComponent } from 'react'

export default class App extends  PureComponent {
  constructor(props) {
    super(props);
    
    this.state = {
      friends: [
        {name:"LiLei",age:18},
        {name:"Lucy",age:30},
        {name:"Jacky",age:22},
      
      ]
    }
  }
  render() {
    return (
      <div>
        <h2>好友列表:</h2>
          <ul>
              {
              this.state.friends.map((item,index)=>{
               
                return (
                        <li key={item.name} >
                          姓名:{item.name}
                          -
                          年龄:{item.age}
                          <button  onClick={e=>{this.addAge(index)}}> 年龄+1</button>      
                        </li>
                        )
              })
            }
          </ul>

          <button onClick={e=>{this.insertData()}}>添加数据</button>
      </div>
    )
  }

  insertData() {
    // 1.错误做法: 往this.state.friends.push(),实际指向内存地址没有改变,shallowEqual() 浅层比较,地址没有变化,所以render 不会被调用
    // const newData = {name:"tom",age:30}
    // this.state.friends.push(newData);
    // this.setState({
    //   friends:this.state.friends
    // })

    // 2.推荐做法
    const newData = [...this.state.friends] //新建内存地址,浅拷贝
    newData.push({name:"tom",age:30}); //往这个新内存地址修改数
    this.setState({
      friends:  newData //赋值(修改内存地址指向)
    })
    
  }

  addAge(index) {
    const newData = [...this.state.friends]
    newData[index].age ++;
    this.setState({
      friends: newData
    })
  }
}
