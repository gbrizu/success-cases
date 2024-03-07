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
        const body = {
            ...successCase,
            // NO BORRAR
            // successCase: { text: successCaseText, image: await toBase64(successCaseFile) },
            // challenge: { text: challengeText, image: await toBase64(challengeFile) },
            // improvements: { text: improvementsText, image: await toBase64(improvementsFile) },
            // technologie: { text: technologieText, image: await toBase64(technologieFile) },
            // NO BORRAR
            successCase: { text: successCaseText, image: 'https://www.coca-cola.com/content/dam/onexp/ie/en/apps/Campaign-card_1280x1024.jpg' },
            challenge: { text: challengeText, image: 'https://www.coca-cola.com/content/dam/onexp/ie/en/apps/Campaign-card_1280x1024.jpg' },
            improvements: { text: improvementsText, image: 'https://www.coca-cola.com/content/dam/onexp/ie/en/apps/Campaign-card_1280x1024.jpg' },
            technologie: { text: technologieText, image: 'https://www.coca-cola.com/content/dam/onexp/ie/en/apps/Campaign-card_1280x1024.jpg' },
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
