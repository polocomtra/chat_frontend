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
    logout: () => {
        API.defaults.headers['Authorization'] = ``
        localStorage.removeItem('user')
        localStorage.removeItem('token')

    },
    updateProfile: (data) => {
        const headers={
            headers:{'Content-Type':'application/x-www-wrlencoded'}
        }
        return API.post('/users/update', data,headers)
            .then(data => {
                localStorage.setItem('user',JSON.stringify(data.data))
                return data
            })
            .catch(error => {
                console.log('Auth service error', error)
                throw error
            })
    },
}

const setHeadersAndStorage=({user,token})=>{
    API.defaults.headers['Authorization'] = `Bearer ${token}`
    localStorage.setItem('user',JSON.stringify(user))
    localStorage.setItem('token',token)
}

export default authService