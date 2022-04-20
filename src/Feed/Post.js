import { Avatar } from '@mui/material'
import React from 'react'
import "./Post.css"
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ShortcutIcon from '@mui/icons-material/Shortcut';

function Post({ profilePic, image, username, timestamp, message }) {
    return (
        <div className="post">
            <div className="post_top">
                <Avatar src={profilePic} className='post_avatar' />
                <div className="post_topInfo">
                    <h3>{username}</h3>
                    <p>Timestamp..</p>
                </div>
            </div>
            <div className="post_bottom">
                <p>{message}</p>
            </div>
            <div className="post_image">
                <img src={image} alt="" />
            </div>

            <div className="post_options">
                <div className="post_option">
                    <ThumbUpIcon/>
                    <p>Like</p>
                </div>
                <div className="post_option">
                    <ChatBubbleIcon />
                    <p>Comment</p>
                </div>
                <div className="post_option">
                    <ShortcutIcon />
                    <p>Share</p>
                </div>
            </div>
        </div>
    )
}

export default Post