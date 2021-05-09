import AuthService from '../../services/authService'
import { LOGIN, REGISTER, LOGOUT,UPDATE } from '../types/index'



export const login=(params)=>dispatch=>{
    return AuthService.login(params)
                        .then(data=>{
                            console.log(data.data)
                            dispatch({type: LOGIN,payload: data.data})
                    
                        })
                        .catch(error=>{
                            console.log(error)
                        })
}

export const register=(params)=>dispatch=>{
    return AuthService.register(params)
                        .then(data=>{
                            console.log(data.data)
                            dispatch({type: REGISTER,payload: data.data})
                    
                        })
                        .catch(error=>{
                            console.log(error)
                        })
}

export const updateProfile=(params)=>dispatch=>{
    return AuthService.updateProfile(params)
                        .then(data=>{
                            dispatch({type: UPDATE,payload: data.data})
                        })
                        .catch(error=>{
                            throw error
                        })
}

export const logout=()=>dispatch=>{
    AuthService.logout();
    dispatch({type: LOGOUT})
}