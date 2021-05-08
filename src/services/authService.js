import API from './api'

const authService = {
    login: (data) => {
        return API.post('/login', data)
            .then(data => {
                API.defaults.headers['Authorization'] = `Bearer ${data.token}`
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
                API.defaults.headers['Authorization'] = `Bearer ${data.token}`
                return data
            })
            .catch(error => {
                console.log('Auth service error', error)
                throw error
            })
    },
    logout: (data) => {

    }
}

export default authService