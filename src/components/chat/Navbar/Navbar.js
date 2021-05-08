import React,{useState,Fragment} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {logout} from '../../../store/actions/auth'
import './Navbar.scss'
import Modal from '../../Modal/Modal'

const Navbar=()=>{

    const [showProfileOption,setShowProfileOption]=useState(false)
    const [showProfileModal,setShowProfileModal]=useState(false)

    const dispatch=useDispatch();
    const user=useSelector(state=>state.authReducer.user)
    return (
        <div id="navbar" className="card-shadow">
            <h2>Chat.io</h2>
            <div onClick={()=>setShowProfileOption(!showProfileOption)} id="profile-menu">
                <img width="40px" height="40px" src={user.avatar} alt='Avatar'></img>
                <p>
                    {user.firstName}
                    {user.lastName}
                </p>
                <FontAwesomeIcon icon="caret-down" className="fa-icon"/>
                {
                    showProfileOption && 
                    <div id="profile-option">
                        <p onClick={()=>setShowProfileModal(true)}>Update Profile</p>
                        <p onClick={()=>dispatch(logout())}>Logout</p>
                    </div>
                }

                {
                    showProfileModal&&
                    <Modal click={()=>setShowProfileModal(false)}>
                        <Fragment key='header'>
                            Modal header
                        </Fragment>
                        <Fragment key='body'>
                            Modal body
                        </Fragment>
                        <Fragment key='footer'>
                            Modal footer
                        </Fragment>
                    </Modal>
                }
            </div>
        </div>
    )
}

export default Navbar