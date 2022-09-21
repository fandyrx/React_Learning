import React, { Component } from 'react'

import PropTypes from "prop-types"

export default class TabControl extends Component {
  constructor(props) {
    super(props);
    this.state= {
      currentIndex : 0
    }
  }


  render() {
    const { titles } = this.props
    const { currentIndex } = this.state
   
    return (
      <div className='tab-control'>
        {
          titles.map((item,index) =>{
            return( 
            <div 
            className = {"tab-item " + (index === currentIndex? "active":"")}  
            key={index}
            onClick={e=>{this.itemClick(index)}} >
             <span> {item}</span>
            </div>)
          })
        }
      </div>
    )
  }


  itemClick(index){
    
    this.setState({
      currentIndex : index
    })
    // 父组件传入事件
    const{itemClick} = this.props
    itemClick(index)
  }
}

TabControl.propTypes = {
  titles: PropTypes.array.isRequired
}