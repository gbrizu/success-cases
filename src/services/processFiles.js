import {setSuccessCaseData, setImprovementsData, setChallengeData, setTechnologiesData} from '../context/process.context'


const awsLogin = async () => {
    const AWS = require('aws-sdk');

        

        const s3 = new AWS.S3();
}

const submitImage = async (file, screen) => {
    const params = {
        Bucket: 'challenge-3-bucket-example',
        Key: file.name + screen,
        Body: file,
        ContentType: 'image/*', 
    };

    const data = await s3.upload(params).promise();

    switch (screen) {
        case 'successCase':
            setSuccessCaseData(data.Location);
            console.log(data);
        case 'challenges':
            setChallengeData(data.Location);
        case 'improvement':
            setImprovementsData(data.Location);
        case 'technologies':
            setTechnologiesData(data.Location);
    }

}

