import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:5000';

const axiosPost = (customUrl, body) => {
    return axios.post(`${BASE_URL}${customUrl}`, body)
}

const getBaseAxiosPostWithResponseManage = (customUrl, body) => {
    console.log(body) 
    return axiosPost(customUrl, body)
        .then((response) => {
            return response.data;
        }).catch((error) => {
            console.log("Error:" + error)
            return error
        })
}

export const sendRequestChat = (requestChat) => {
    if(!requestChat.text || !requestChat.history){
        throw new Error('Invalid requestChat need have text and history.');
    }
    return getBaseAxiosPostWithResponseManage('/chat/message', requestChat)
}

