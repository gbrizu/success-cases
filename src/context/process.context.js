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

    const [successCaseImage, setSuccessCaseImage] = useState('');
    const [improvementsImage, setImprovementsImage] = useState('');
    const [challengeImage, setChallengeImage] = useState('');
    const [technologiesImage, setTechnologiesImage] = useState('');

    const [successCaseVideo, setSuccessCaseVideo] = useState('');
    const [improvementsVideo, setImprovementsVideo] = useState('');
    const [challengeVideo, setChallengeVideo] = useState('');
    const [technologiesVideo, setTechnologiesVideo] = useState('');

    const navigate = (screen, currentScreen) => {
        setScreen(screen);
    }

    const submitSuccessCaseHandler = async () => {

        const body = {
            ...successCase,
            successCase: { text: successCaseText, image: successCaseImage, video: '' },
            challenge: { text: challengeText, image: improvementsImage, video: '' },
            improvements: { text: improvementsText, image: challengeImage, video: '' },
            technologie: { text: technologieText, image: technologiesImage, video: '' },
        }

        const res = await postSuccessCase(body);

        if (res.message === 'El caso se ha creado correctamente.') {
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
            setImprovementsFile,
            successCaseImage,
            setSuccessCaseImage,
            improvementsImage, setImprovementsImage,
            challengeImage, setChallengeImage,
            technologiesImage, setTechnologiesImage,
            successCaseVideo, setSuccessCaseVideo,
            improvementsVideo, setImprovementsVideo,
            challengeVideo, setChallengeVideo,
            technologiesVideo, setTechnologiesVideo
        }}>
            {children}
        </ProcessContextProvider.Provider>
    )
}

