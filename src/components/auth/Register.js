import React,{useState} from 'react'
import registerImage from '../../assets/images/register.svg'
import { Link } from 'react-router-dom'

import {useDispatch} from 'react-redux'
import {register} from '../../store/actions/auth'


const Register = ({history}) => {
    const dispatch=useDispatch()
    const [firstName,setFirstName]=useState('');
    const [lastName,setLastName]=useState('');
    const [email,setEmail]=useState('');
    const [gender,setGender]=useState('male');
    const [password,setPassword]=useState('');

    const formSubmit=(e)=>{
        e.preventDefault();
        console.log({firstName,lastName,email,gender,password})
        dispatch(register({firstName,lastName,gender,email,password})).then(()=>history.push('/'))
    }


    return (
        <div id="auth-container">
            <div id="auth-card">
                <div className="card-shadow">
                    <div id="image-section">
                        <img src={registerImage} alt="Register"></img>
                    </div>

                    <div id="form-section">
                        <h2>Create an account</h2>

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

                            <button>REGISTER</button>
                        </form>

                        <p>Already have an account? <Link to='/login' >Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register