import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

// Obtener el token desde localStorage
const getAccessToken = () => localStorage.getItem('accessToken');

// Función para manejar solicitudes GET con respuesta gestionada
const getBaseAxiosGetWithResponseManage = async (customUrl) => {
  const token = getAccessToken();
  const options = {
    method: 'GET',
    url: `${BASE_URL}${customUrl}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log("Error:", error);
    return error;
  }
};

// Función para manejar solicitudes POST con respuesta gestionada
const getBaseAxiosPostWithResponseManage = async (customUrl, body) => {
  const token = getAccessToken();
  const options = {
    method: 'POST',
    url: `${BASE_URL}${customUrl}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: body,
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log("Error:", error);
    return error;
  }
};

export const getClients = () => {
  return getBaseAxiosGetWithResponseManage('/Client/getAll');
};

export const getIndustries = () => {
  return getBaseAxiosGetWithResponseManage('/Industry/getAll');
};

export const getProyectsTypes = () => {
  return getBaseAxiosGetWithResponseManage('/ProjectType/getAll');
};

export const getContacts = () => {
  return getBaseAxiosGetWithResponseManage('/Contact/getAll');
};

export const getOfferings = () => {
  return getBaseAxiosGetWithResponseManage('/Offering/getAll');
};

export const getSuccessCasesByFilter = (searchParams) => {
  return getBaseAxiosPostWithResponseManage('/SuccessCase/getByFilter', searchParams);
};

export const createSuccessCase = (successCase) => {
  return getBaseAxiosPostWithResponseManage('/SuccessCase/new', successCase);
};

export const getSuccessCaseById = (id) => {
  return getBaseAxiosGetWithResponseManage(`/SuccessCase/getById/${id}`);
};

export const getSuccessCase = () => {
  return getBaseAxiosGetWithResponseManage('/SuccessCase/getAll');
};

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
    technologie,
  } = successCaseObj;

    const startMonth = startDate.getUTCMonth() + 1;
    const startDay = startDate.getUTCDate();
    const startYear = startDate.getUTCFullYear();

  const startNewDate = `${startYear}-${startMonth}-${startDay}`;

    const finishMonth = finishDate.getUTCMonth() + 1;
    const finishDay = finishDate.getUTCDate();
    const finishYear = finishDate.getUTCFullYear();

  const finishNewDate = `${finishYear}-${finishMonth}-${finishDay}`;


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

  return getBaseAxiosPostWithResponseManage('/SuccessCase/create', body);
};
