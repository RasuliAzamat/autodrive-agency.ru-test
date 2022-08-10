import axios from 'axios'

class HTTPService {
    constructor(baseURL) {
        this.url = baseURL
    }

    async postData(data) {
        try {
            await axios.post(this.url, data)
        } catch (error) {
            throw error
        }
    }
}

export const httpService = new HTTPService(
    'http://hh.autodrive-agency.ru/test-tasks/front/task-7/'
)
