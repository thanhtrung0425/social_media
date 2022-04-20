import { Avatar } from '@mui/material'
import React, { useState } from 'react'
import "./MessageSender.css"
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';

function MessageSender() {


    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setInput("");
    };


    return (
        <div className="messageSender">
            <div className="messageSender_top">
                <Avatar />
                <form>
                    <input 
                    value={input}
                    onChange={e=>setInput(e.target.value)}
                    className='messageSender_input'
                        placeholder="What's on your mind?" />
                    <button onClick={handleSubmit} type="submit">
                        Hidden submit
                    </button>
                </form>
            </div>

            <div className="messageSender_bottom">
                <div className="messageSender_option">
                    <VideocamIcon sx={{ color: "red" }} />
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender_option">
                    <PhotoLibraryIcon sx={{ color: "green" }} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender_option">
                    <InsertEmoticonIcon sx={{ color: "orange" }} />
                    <h3>Feeling/activity</h3>
                </div>
            </div>

        </div>
    )
}

export default MessageSender