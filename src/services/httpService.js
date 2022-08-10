import axios from 'axios'

class HTTPService {
    constructor(baseURL) {
        this.url = baseURL
    }

    async postData(data) {
        try {
            const{ data: call } = await axios.post(`${this.url}/calls.json`, data)

            return call
        } catch (error) {
            throw error
        }
    }
}

export const httpService = new HTTPService(
    'https://modal-aa646-default-rtdb.firebaseio.com'
)