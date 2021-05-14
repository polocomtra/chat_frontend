import React,{useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import './Chat.scss'
import Navbar from './Navbar/Navbar'
import {fetchChats} from '../../store/actions/chat'
import Friendlist from './Friendlist/Friendlist'
import Messenger from './Messenger/Messenger'

const Chat=()=>{
    const dispatch=useDispatch();
    const user=useSelector(state=>state.authReducer.user)

    useEffect(()=>{
        dispatch(fetchChats()).then(res=>console.log(res)).catch(err=>console.log(err))
    },[dispatch])
    return (
        <div id="chat-container">
            <Navbar />
            <div id="chat-wrap">
                <Friendlist/>
                <Messenger />
            </div>
        </div>
    )
}

export default Chat