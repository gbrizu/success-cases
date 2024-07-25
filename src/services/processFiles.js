import { setSuccessCaseData, setImprovementsData, setChallengeData, setTechnologiesData } from '../context/process.context'



const AWS = require('aws-sdk');




export const uploadFileToS3 = async (file, type) => {

    const params = {
        Bucket: 'challenge-3-bucket-example',
        Key: `${type}/${file.name}`,
        Body: file,
        ContentType: file.type,
    };

    const data = await s3.upload(params).promise();

    return data.Location;
};

export const deleteFileFromS3 = async (url) => {

    const key = url.split('.com/')[1];

    const params = {
        Bucket: 'challenge-3-bucket-example',
        Key: key,
    };

    await s3.deleteObject(params).promise();
};

