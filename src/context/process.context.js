import React, { createContext, useState } from 'react'
import { postSuccessCase } from '../services/successCaseServerCalls';

export const ProcessContextProvider = createContext();

export default function ProcessContext({ children }) {
    const [successCase, setSuccessCase] = useState({});

    const [screen, setScreen] = useState('createPage');

    const [successCaseText, setSuccessCaseText] = useState('');
    const [challengeText, setChallengeText] = useState('');
    const [technologieText, setTechnologieText] = useState('');
    const [improvementsText, setImprovementsText] = useState('');

    const [successCaseFile, setSuccessCaseFile] = useState('')
    const [challengeFile, setChallengeFile] = useState('')
    const [technologieFile, setTechnologieFile] = useState('')
    const [improvementsFile, setImprovementsFile] = useState('')

    const navigate = (screen, currentScreen) => {
        setScreen(screen);
    }

    const toBase64 = file => new Promise((resolve, reject) => {
        if(!file) return resolve('');
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
    });


    const submitSuccessCaseHandler = async () => {

        
        
        const paramsSuccessCase = {
            Bucket: 'challenge-3-bucket-example',
            Key: successCase.title + '-caseimage',
            Body: successCaseFile,
            ContentType: 'image/*', 
        };
        const paramsChallenges = {
            Bucket: 'challenge-3-bucket-example',
            Key: successCase.name + '-challengeimage',
            Body: challengeFile,
            ContentType: 'image/*', 
        };
        const paramsImprovements = {
            Bucket: 'challenge-3-bucket-example',
            Key: successCase.name + '-improvimage',
            Body: improvementsFile,
            ContentType: 'image/*', 
        };
        const paramsTechnologies = {
            Bucket: 'challenge-3-bucket-example',
            Key: technologieFile.name + '-techimage',
            Body: technologieFile,
            ContentType: 'image/*', 
        };
        // Sube el archivo a S3
        const caseData = await s3.upload(paramsSuccessCase).promise();
        const challengeData = await s3.upload(paramsChallenges).promise();
        const improvData = await s3.upload(paramsImprovements).promise();
        const techData = await s3.upload(paramsTechnologies).promise();
        console.log('casedata =', caseData.Location,'challengedata = ', challengeData.Location,'improvData = ', improvData.Location, 'techData = ', techData.Location)

        const body = {
            ...successCase,
            // NO BORRAR
            successCase: { text: successCaseText, image: caseData.Location},
            challenge: { text: challengeText, image: challengeData.Location },
            improvements: { text: improvementsText, image: improvData.Location },
            technologie: { text: technologieText, image: techData.Location },
            // NO BORRAR
            // successCase: { text: successCaseText, image: 'https://www.coca-cola.com/content/dam/onexp/ie/en/apps/Campaign-card_1280x1024.jpg' },
            // challenge: { text: challengeText, image: 'https://www.coca-cola.com/content/dam/onexp/ie/en/apps/Campaign-card_1280x1024.jpg' },
            // improvements: { text: improvementsText, image: 'https://www.coca-cola.com/content/dam/onexp/ie/en/apps/Campaign-card_1280x1024.jpg' },
            // technologie: { text: technologieText, image: 'https://www.coca-cola.com/content/dam/onexp/ie/en/apps/Campaign-card_1280x1024.jpg' },
        }

        const res = await postSuccessCase(body);

        if(res.message === 'El caso se ha creado correctamente.') {
            alert('El caso se ha creado correctamente.');
        }
    }

    return (
        <ProcessContextProvider.Provider value={{
            screen,
            navigate,
            setSuccessCase,
            successCase,
            submitSuccessCaseHandler,
            setSuccessCaseText,
            challengeText,
            successCaseText,
            setChallengeText,
            setTechnologieText,
            technologieText,
            improvementsText,
            setImprovementsText,
            successCaseFile,
            setSuccessCaseFile,
            challengeFile,
            setChallengeFile,
            technologieFile,
            setTechnologieFile,
            improvementsFile,
            setImprovementsFile
        }}>
            {children}
        </ProcessContextProvider.Provider>
    )
}
