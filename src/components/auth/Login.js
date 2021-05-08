import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import loginImage from '../../assets/images/login.svg'
import authService from '../../services/authService'
import './Auth.scss'

import {useDispatch} from 'react-redux'
import {login} from '../../store/actions/auth'

const Login = ({history}) => {
    const dispatch=useDispatch()
    const [email, setEmail] = useState('tai@gmail.com')
    const [password, setPassword] = useState('tai1')

    const formSubmit = (e) => {
        e.preventDefault();
        console.log({ email, password });
        //authService.login({ email, password }).then(res => console.log(res))
        dispatch(login({email,password})).then(()=>history.push('/'))
    }
    return (
        <div id="auth-container">
            <div id="auth-card">
                <div className="card-shadow">
                    <div id="image-section">
                        <img src={loginImage} alt="Login"></img>
                    </div>

                    <div id="form-section">
                        <h2>Welcome back</h2>

                        <form onSubmit={formSubmit}>
                            <div className="input-field mb-1">
                                <input onChange={(e) => setEmail(e.target.value)} value={email} required='required' type='text' placeholder="Email"></input>
                            </div>

                            <div className="input-field mb-2">
                                <input onChange={(e) => setPassword(e.target.value)} value={password} required='required' type='password' placeholder="Password"></input>
                            </div>

                            <button>LOGIN</button>
                        </form>

                        <p>Don't have an account? <Link to='/register'>Register</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login