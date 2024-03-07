
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

export const postSuccessCase = (successCaseObj) => {
    const {
        title,
        startDate,
        finishDate,
        teamSize,
        isPublic,
        industryId,
        offeringId,
        clientId,
        projectTypeId,
        contactId,
        successCase,
        challenge,
        improvements,
        technologie
    } = successCaseObj;

    const startMonth = startDate.getUTCMonth() + 1; 
    const startDay = startDate.getUTCDate();
    const startYear = startDate.getUTCFullYear();

    const startNewDate = startYear + "-" + startMonth + "-" + startDay;

    const finishMonth = finishDate.getUTCMonth() + 1; 
    const finishDay = finishDate.getUTCDate();
    const finishYear = finishDate.getUTCFullYear();

    const finishNewDate = finishYear + "-" + finishMonth + "-" + finishDay;

    
    const body = {
        "title": title,
        "startdate": startNewDate,
        "finishdate": finishNewDate,
        "teamsize": teamSize,
        "ispublic": isPublic,
        "industryid": industryId,
        "offeringid": offeringId, 
        "clientid": clientId,
        "projecttypeid": projectTypeId,
        "contactid": contactId,
        "casedetail": {
            "image_detail": successCase.image,
            "video_detail": null,
            "text_detail": successCase.text
        },
        "technology": {
            "image_tech": technologie.image,
            "video_tech": null,
            "text_tech": technologie.text
        },
        "improvement": {
            "image_imp": improvements.image,
            "video_imp": null,
            "text_imp": improvements.text
        },
        "challenge": {
            "image_ch": challenge.image,
            "video_ch": null,
            "text_ch": challenge.text,
        }
    }

    console.log(body)

    return axiosPost('/SuccessCase/create', body)
        .then((response) => {
            console.log(response)
            return response.data;
        }).catch((error) => {
            console.log("Error:" + error)
            return error
        })
}

