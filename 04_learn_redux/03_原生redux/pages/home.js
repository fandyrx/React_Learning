import React, { PureComponent } from 'react'


import store from '@/store/index.js'
import {decrement,increment} from "@/store/actionCreators"



export default class home extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      counter: store.getState().counter
    }
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(()=>  {
      this.setState({
        counter: store.getState().counter
      })
    })
  }

  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    return (
      <div>
          <h1>home</h1> 
        <h2>当前计数: {this.state.counter}</h2>
        <button onClick={e=> this.decrement()}> -1 </button>
        <button onClick={e=> this.increment()}> +1 </button>
      </div>
    )
  }

  decrement() {
    store.dispatch(increment())
  }
  increment() {
    store.dispatch(decrement())
  }

}
