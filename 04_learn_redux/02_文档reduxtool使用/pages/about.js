import React, { PureComponent } from 'react'

import {
  store,
  addAction,
  subAction
  } from '@/store/index.js'

export default class about extends PureComponent {
  constructor(props) {
    super(props);

    this.state={
      counter:store.getState().counter
  } 
}
  componentDidMount() {
    this.unsubscribe = store.subscribe(()=>{
      this.setState({
        counter: store.getState().counter
      })
    })
  }
  componentWillUnmount(){ 
    this.unsubscribe()
  }
  render() {
    return (
      <div>
        <h1>about</h1> 
        <h2>当前计数: {this.state.counter}</h2>
        <button onClick={e=>this.addAction(2)}> +2 </button>
        <button onClick={e=>this.subAction(5)}> -5 </button>
      </div>
    )
  }

  addAction(num){
    store.dispatch(addAction(num))
  }

  subAction(num){
    store.dispatch(subAction(num))
  }
}
