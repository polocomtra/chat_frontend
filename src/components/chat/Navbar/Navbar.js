import React, { useState, Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { logout } from '../../../store/actions/auth'
import { updateProfile } from '../../../store/actions/auth'
import './Navbar.scss'
import Modal from '../../Modal/Modal'

const Navbar = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.authReducer.user)
    const [showProfileOption, setShowProfileOption] = useState(false)
    const [showProfileModal, setShowProfileModal] = useState(false)
    const [firstName,setFirstName]=useState(user.firstName);
    const [lastName,setLastName]=useState(user.lastName);
    const [email,setEmail]=useState(user.email);
    const [gender,setGender]=useState(user.gender);
    const [password,setPassword]=useState('');
    const [avatar,setAvatar]=useState('');

    const formSubmit=(e)=>{
        e.preventDefault();
        const form={firstName,lastName,email,gender,avatar}
        if(password.length>0){
            form.password=password
        }

        const formData=new FormData();

        for(const key in form){
            formData.append(key,form[key])
        }

        //dispatch
        dispatch(updateProfile(formData)).then(()=>setShowProfileModal(false))
    }

    
    return (
        <div id="navbar" className="card-shadow">
            <h2>Chat.io</h2>
            <div onClick={() => setShowProfileOption(!showProfileOption)} id="profile-menu">
                <img width="40px" height="40px" src={user.avatar} alt='Avatar'></img>
                <p>
                    {user.firstName}
                    {user.lastName}
                </p>
                <FontAwesomeIcon icon="caret-down" className="fa-icon" />
                {
                    showProfileOption &&
                    <div id="profile-option">
                        <p onClick={() => setShowProfileModal(true)}>Update Profile</p>
                        <p onClick={() => dispatch(logout())}>Logout</p>
                    </div>
                }

                {
                    showProfileModal &&
                    <Modal click={() => setShowProfileModal(false)}>
                        <Fragment key='header' className="m-0">
                            Update frofile
                        </Fragment>
                        <Fragment key='body'>
                            <form onSubmit={formSubmit}>
                                <div className="input-field mb-1">
                                    <input onChange={(e) => setFirstName(e.target.value)} value={firstName} required='required' type='text' placeholder="Firstname"></input>
                                </div>
                                <div className="input-field mb-1">
                                    <input onChange={(e) => setLastName(e.target.value)} value={lastName} required='required' type='text' placeholder="Lastname"></input>
                                </div>
                                <div className="input-field mb-1">
                                    <input onChange={(e) => setEmail(e.target.value)} value={email} required='required' type='text' placeholder="Email"></input>
                                </div>
                                <div className="input-field mb-1">
                                    <select onChange={(e) => setGender(e.target.value)} value={gender} required='required' >
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                </div>

                                <div className="input-field mb-2">
                                    <input onChange={(e) => setPassword(e.target.value)} value={password} required='required' type='password' placeholder="Password"></input>
                                </div>
                                <div className="input-field mb-2">
                                    <input onChange={(e) => setAvatar(e.target.files[0])}  type='file' ></input>
                                </div>
                            </form>
                        </Fragment>
                        <Fragment key='footer'>
                            <button className="btn-success" onClick={formSubmit}>UPDATE</button>
                        </Fragment>
                    </Modal>
                }
            </div>
        </div>
    )
}

export default Navbar