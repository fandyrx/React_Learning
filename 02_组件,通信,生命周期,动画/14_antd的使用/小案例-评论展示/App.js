import React, { PureComponent } from 'react'

import CommentInput from "@/comment/CommentInput" 
import CommentItem from "@/comment/CommentItem" 

export default class App extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			commentList:[]
		}
	} 
	render() {

		return (
			<div style={{width:"500px",padding:"20px"}}> 
				我是父组件:
				{
					this.state.commentList.map((item,index)=> {
						return <CommentItem key={item.id} comment={item} removeComment={e=>this.removeComment(index)}/>
					})
				}
				<CommentInput submitComment={info=>{this.submitComment(info)}}/>

			</div>
		)
	}

	submitComment(info) {
		const newCommentList = [...this.state.commentList,info] 
		this.setState({
			commentList:	newCommentList 
		})
	}

	removeComment(index) {
		console.log(index)
		const newCommentList = [...this.state.commentList]
		newCommentList.splice(index,1)
		this.setState({
			commentList:	newCommentList
		})
	}
	
}
