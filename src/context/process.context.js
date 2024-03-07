import React, { createContext, useState } from 'react'
import { postSuccessCase } from '../services/successCaseServerCalls';

export const ProcessContextProvider = createContext();

export default function ProcessContext({ children }) {
    const [successCase, setSuccessCase] = useState({});

    // const [successCasePage, setSuccessCasePage] = useState(0);
    // const [challengePage, setChallengePage] = useState(0);
    // const [improvementsPage, setImprovementsPage] = useState(0);
    // const [technologiePage, setTechnologiePage] = useState(0);

    const [screen, setScreen] = useState('createPage');

    const [successCaseText, setSuccessCaseText] = useState('');
    const [challengeText, setChallengeText] = useState('');
    const [technologieText, setTechnologieText] = useState('');
    const [improvementsText, setImprovementsText] = useState('');

    const [successCaseFile, setSuccessCaseFile] = useState('')
    const [challengeFile, setChallengeFile] = useState('')
    const [technologieFile, setTechnologieFile] = useState('')
    const [improvementsFile, setImprovementsFile] = useState('')

    // const newPageHandler = (type, content) => {
    //     if (type === 'successCase') {
    //         setSuccessCasePage(successCasePage + 1);
    //         successCase.successCase.push(content)
    //     } else if (type === 'challenge') {
    //         setChallengePage(challengePage + 1);
    //         successCase.challenge.push(content)
    //     } else if (type === 'improvements') {
    //         setImprovementsPage(improvementsPage + 1);
    //         successCase.improvements.push(content)
    //     } else if (type === 'technologie') {
    //         setTechnologiePage(technologiePage + 1);
    //         successCase.technologie.push(content)
    //     }
    // }

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
        setSuccessCase({
            ...successCase,
            successCase: { text: successCaseText, image: await toBase64(successCaseFile) },
            challenge: { text: challengeText, image: await toBase64(challengeFile) },
            improvements: { text: improvementsText, image: await toBase64(improvementsFile) },
            technologie: { text: technologieText, image: await toBase64(technologieFile) },
        });
        // const res = postSuccessCase(successCase)
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
