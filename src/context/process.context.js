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

    const [successCaseData, setSuccessCaseData] = useState('');
    const [improvementsData, setImprovementsData] = useState('');
    const [challengeData, setChallengeData] = useState('');
    const [technologiesData, setTechnologiesData] = useState('');

    const navigate = (screen, currentScreen) => {
        setScreen(screen);
    }

    const submitSuccessCaseHandler = async () => {

        const body = {
            ...successCase,
            successCase: { text: successCaseText, image: successCaseData},
            challenge: { text: challengeText, image: improvementsData },
            improvements: { text: improvementsText, image: challengeData },
            technologie: { text: technologieText, image: technologiesData },
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
