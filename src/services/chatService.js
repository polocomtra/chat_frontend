import API from './api'

const ChatService = {
    fetchChat: () => {
        return API.get('/chats')
            .then(({ data }) => {
                return data
            })
            .catch(error => {
                throw error
            })
    }
}

export default ChatService;