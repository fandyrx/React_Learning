import React, { PureComponent } from 'react'
import { Input,Button } from "antd";
import 'antd/dist/antd.less';

import moment from "moment"

export default class CommentInput extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      content:''
    }
  }
  render() {
    return (
      <div >
        <Input.TextArea rows={4} cols={30} placeholder="输入评论" 
                        value={this.state.content}
                        onChange={e=> this.commentChange(e)} /> 
        <Button type="primary" onClick={e=> this.upDateComment()} >添加评论</Button>
      </div>
    )
  }

  commentChange(e) {
   
    this.setState({
      content:e.target.value
    })
  }

  upDateComment() {
  const  commentInfo = {
      // 获取当前时间戳当id
      id: moment().valueOf(),
      avatar:"https://cnv4.botzone.org.cn/avatar/5fc0609397190c3037aaf9ac.png?large=true",
      nickname:"coder",
      datetime: moment(),
      content: this.state.content
    }
    this.props.submitComment(commentInfo)
  }


}
