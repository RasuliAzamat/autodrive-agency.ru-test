import axios from 'axios'

class HTTPService {
    constructor(baseURL) {
        this.url = baseURL
    }

    async postData(data) {
        try {
            const{ data: call } = await axios.post(this.url, data)

            return call
        } catch (error) {
            throw error
        }
    }
}

export const httpService = new HTTPService(
    'http://hh.autodrive-agency.ru/test-tasks/front/task-7/'
)