import API from './api'

const authService = {
    login: (data) => {
        return API.post('/login', data)
            .then(data => {
                setHeadersAndStorage(data.data)
                return data
            })
            .catch(error => {
                console.log('Auth service error', error)
                throw error
            })
    },
    register: (data) => {
        return API.post('/register', data)
            .then(data => {
                setHeadersAndStorage(data.data)
                return data
            })
            .catch(error => {
                console.log('Auth service error', error)
                throw error
            })
    },
    logout: (data) => {
        API.defaults.headers['Authorization'] = ``
        localStorage.removeItem('user')
        localStorage.removeItem('token')

    }
}

const setHeadersAndStorage=({user,token})=>{
    API.defaults.headers['Authorization'] = `Bearer ${token}`
    localStorage.setItem('user',JSON.stringify(user))
    localStorage.setItem('token',token)
}

export default authService