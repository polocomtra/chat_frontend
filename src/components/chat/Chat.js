import React from 'react'
import {useSelector} from 'react-redux'
import './Chat.scss'
import Navbar from './Navbar/Navbar'

const Chat=()=>{
    const user=useSelector(state=>state.authReducer.user)
    return (
        <div id="chat-container">
            <Navbar />
            <div id="chat-wrap">
                <p>Welcome, {user.firstName}</p>
            </div>
        </div>
    )
}

export default Chat