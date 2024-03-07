
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

export const getSuccessCasesByFilter = (searchParams) => {
    return getBaseAxiosPostWithResponseManage('/SuccessCase/getByFilter', searchParams)
}

export const createSuccessCase = (successCase) => {
    return getBaseAxiosPostWithResponseManage('/SuccessCase/new', successCase)
}

export const getSuccessCaseById = (id) => {
    return getBaseAxiosGetWithResponseManage(`/SuccessCase/getById/${id}`)
}

export const getSuccessCase = () => {
    return getBaseAxiosGetWithResponseManage('/SuccessCase/getAll')
}

export const postSuccessCase = (successCase) => {

    return axiosPost('/SuccessCase/create', {
        // SUCCESS CASE
// successCase.offering
// successCase.client
// successCase.industry
// successCase.date
// successCase.projectContact
// successCase.avgTeamSize
// successCase.isPublic
// successCase.successCase
// successCase.challenge
// successCase.improvements
// successCase.technologie
    })
        .then((response) => {
            console.log(response)
            return response.data;
        }).catch((error) => {
            console.log("Error:" + error)
            return error
        })
}

// {
//     "title": "Ejemplo de Caso de Éxito 1",
//     "startdate": "2024-02-29",
//     "finishdate": "2024-03-10",
//     "teamsize": 20,
//     "ispublic": true,
//     "industryid": 3,
//     "offeringid": 1,
//     "clientid": 1,
//     "projecttypeid": 3,
//     "contactid": 1,
//     "casedetail": {
//         "image_detail": "BASE64",
//         "video_detail": null,
//         "text_detail": "BASE64"
//     },
//      "technology": {
//             "image_tech": "BASE64",
//             "video_tech": null,
//             "text_tech": "BASE64"
//         },
//         "improvement": {
//             "image_imp": "BASE64",
//             "video_imp": null,
//             "text_imp": "BASE64"
//         },
//         "challenge": {
//             "image_ch": "BASE64",
//             "video_ch": null,
//             "text_ch": "BASE64"
//         }
// }