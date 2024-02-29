
import axios from 'axios';

const BASE_URL = 'http://20.15.110.189/back';

const axiosGet = (customUrl) => {
    return axios.get(`${BASE_URL}${customUrl}`)
}

const axiosPost = (customUrl, body) => {
    //TODO: Implementar
}

const getBaseAxiosGetWithResponseManage = (customUrl) => {
    return axiosGet(customUrl)
        .then((response) => {
            return response.data;
        }).catch((error) => {
            console.log("Error:" + error)
            return 
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
    //return getBaseAxiosGetWithResponseManage('/SuccessCase/getByFilter')
    //TODO: Implementar
}

export const createSuccessCase = (successCase) => {
    //TODO: Implementar
}

export const getSuccessCaseById = (id) => {
    return getBaseAxiosGetWithResponseManage('/SuccessCase/getById')
}
