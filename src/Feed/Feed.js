import React from 'react'
import "./Feed.css"
import MessageSender from './MessageSender'
import Post from './Post'


function Feed() {
    return (
        <div className="feed">
            {/* MessageSender */}
            <MessageSender />
            <Post
                profilePic={'https://photo-cms-plo.zadn.vn/w850/Uploaded/2022/aptwohu/2021_10_05/zuckerberg3-scaled_qpun.jpg'}
                message="Woawoeiawe"
                timestamp={"akshdjkashdj"}
                username={"Mark Zuckerberg"}
                image='https://photo-cms-plo.zadn.vn/w850/Uploaded/2022/aptwohu/2021_10_05/zuckerberg3-scaled_qpun.jpg'
            />
        </div>
    )
}

export default Feed