import React from 'react'
import './Chat.scss'
import Navbar from './Navbar/Navbar'

const Chat=()=>{
    return (
        <div id="chat-container">
            <Navbar />
            <div id="chat-wrap">
                <p>Data</p>
            </div>
        </div>
    )
}

export default Chat