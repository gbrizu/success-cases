
import axios from 'axios';

const BASE_URL = 'http://20.15.110.189/back';

const axiosGet = (customUrl) => {
    return axios.get(`${BASE_URL}${customUrl}`)
}

const axiosPost = (customUrl, body) => {
    return axios.post(`${BASE_URL}${customUrl}`, body)
}

const getBaseAxiosGetWithResponseManage = (customUrl) => {
    return axiosGet(customUrl)
        .then((response) => {
            return response.data;
        }).catch((error) => {
            console.log("Error:" + error)
            return error
        })
}

const getBaseAxiosPostWithResponseManage = (customUrl, body) => {
    return axiosPost(customUrl, body)
        .then((response) => {
            return response.data;
        }).catch((error) => {
            console.log("Error:" + error)
            return error
        })
}


export const getClients = () => {
    return getBaseAxiosGetWithResponseManage('/Client/getAll')
}

export const getIndustries = () => {
    return getBaseAxiosGetWithResponseManage('/Industry/getAll')
}

export const getProyectsTypes = () => {
    return getBaseAxiosGetWithResponseManage('/ProjectType/getAll')
}


export const getContacts = () => {
    return getBaseAxiosGetWithResponseManage('/Contact/getAll')
}

export const getOfferings = () => {
    return getBaseAxiosGetWithResponseManage('/Offering/getAll')
}

export const getSuccessCases = (searchParams) => {
    return getBaseAxiosPostWithResponseManage('/SuccessCase/getByFilter', searchParams)
}

export const createSuccessCase = (successCase) => {
    return getBaseAxiosPostWithResponseManage('/SuccessCase/new', successCase)
}

export const getSuccessCaseById = (id) => {
    return getBaseAxiosGetWithResponseManage('/SuccessCase/getById')
}
