import React  from 'react'



import {decrement,increment} from "@/store/actionCreators"
// 1.引入connect hoc组件
import {connect} from "react-redux"


function  Home(props){
  return(
      <div>
          <h1>home</h1> 
        <h2>当前计数: {props.counter}</h2>
        <button onClick={e=> props.decrement()}> -1 </button>
        <button onClick={e=> props.increment()}> +1 </button>
      </div> 
  ) 


}
//2.声明状态 映射到props
const mapStateToProps = state => ({
  counter:state.counter
})

//2.声明dispatch 映射到props
const mapDispatchToProps = dispatch => ({
  decrement() {
   dispatch(increment())
  },
  increment() {
    dispatch(decrement())
  }

})
// 3. hoc转换  暴露
export default connect(mapStateToProps,mapDispatchToProps)(Home)