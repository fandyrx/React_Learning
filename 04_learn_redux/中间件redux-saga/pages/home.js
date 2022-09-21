import React  from 'react'
// 1.引入connect hoc组件
import {connect} from "react-redux"


import {decrement,increment,fetchHomeMultidataAction} from "@/store/actionCreators"



function  Home(props){
  return(
      <div>
          <h1>home</h1> 
          <ul>
           {
            props.banner.map((item=>{
              return (
              <li key={item.acm}>
                <img src={item.image}  style={{height:item.height,width:item.width}}/>
                {item.title}
              </li>
              )
            }))
           }
          </ul>
        <h2>当前计数: {props.counter}</h2>
        <button onClick={e=> props.decrement()}> -1 </button>
        <button onClick={e=> props.increment()}> +1 </button>
        <button onClick={e=> props.getHomeMultidata()}> 获取异步数据 </button>
      </div> 
  ) 


}
//2.声明状态 映射到props
const mapStateToProps = state => ({
  counter:state.counter,
  banner:state.banner
})

//2.声明dispatch 映射到props
const mapDispatchToProps = dispatch => ({
  decrement() {
   dispatch(increment())
  },
  increment() {
    dispatch(decrement())
  },
  getHomeMultidata() {
    dispatch(fetchHomeMultidataAction);
  }

})
// 3. hoc转换  暴露
export default connect(mapStateToProps,mapDispatchToProps)(Home)