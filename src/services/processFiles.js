import { ProcessContextProvider } from '../context/process.context'

const AWS = require('aws-sdk');



const s3 = new AWS.S3();



export const uploadFileToS3 = async (file, type, context) => {

    const { screen, setSuccessCaseImage, setChallengeImage, setImprovementsImage, setTechnologiesImage, setSuccessCaseVideo, setChallengeVideo, setImprovementsVideo, setTechnologiesVideo} = context;
    const params = {
        Bucket: 'challenge-3-bucket-example',
        Key: `${type}/${file.name}`,
        Body: file,
        ContentType: file.type,
    };

    const data = await s3.upload(params).promise();

    if (type === 'image') {
        switch (screen) {
            case 'successCase':
                setSuccessCaseImage(data.Location);
                break;
            case 'challenge':
                setChallengeImage(data.Location);
                break;
            case 'improvement':
                setImprovementsImage(data.Location);
                break;
            case 'technologies':
                setTechnologiesImage(data.Location);
                break;
        } 
    } else if (type === 'video') {
        switch (screen) {
            case 'successCase':
                setSuccessCaseVideo(data.Location);
                break;
            case 'challenge':
                setChallengeVideo(data.Location);
                break;
            case 'improvement':
                setImprovementsVideo(data.Location);
                break;
            case 'technologies':
                setTechnologiesVideo(data.Location);
                break;
                
        }
    }
    
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

