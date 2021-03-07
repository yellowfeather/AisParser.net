import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://www.aisparser.net/api',
    withCredentials: false,
    headers: {
        Accept: 'application/json', 'Content-Type': 'application/json'
    }
})

export default {
    parse(message: string) {
        let body = {
            "aisMessage": message
        }
        return apiClient.post('/parse', body)
    }
}