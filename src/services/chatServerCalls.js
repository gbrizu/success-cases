import axios from 'axios';

const BASE_URL = 'localhost/chat';

const axiosPost = (customUrl, body) => {
    return axios.post(`${BASE_URL}${customUrl}`, body)
}
