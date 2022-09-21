import React, { PureComponent } from "react";

import { DeleteOutlined } from "@ant-design/icons";

import { Avatar, Comment, Tooltip } from "antd";

export default class CommentItem extends PureComponent {
	render() {
  
    const {nickname,avatar,datetime,content} = this.props.comment
		return (
			<div>
				<Comment
            author={<a>{nickname}</a>}
            avatar={<Avatar src={avatar} alt="nickname" />}
            content={
              <p>
                {content}
              </p>
            }
					datetime={
						<Tooltip title={datetime.format("YYYY-MM-DD HH:mm:ss")}>
							<span>{datetime.fromNow()}</span>
						</Tooltip>
					}
          actions = {
            [<span onClick={e=>this.removeItem()}><DeleteOutlined />删除评论</span>]
            
          }
				/>
			</div>
		);
	}

  removeItem() {
    this.props.removeComment()
  }
}
