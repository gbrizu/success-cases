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
            successCase: { text: successCaseText, image: 'https://phantom-expansion.unidadeditorial.es/aaad57cd1e20cab29748a0375dcd0309/crop/0x110/1920x1191/resize/828/f/jpg/assets/multimedia/imagenes/2022/05/20/16530528329270.jpg' },
            challenge: { text: challengeText, image: 'https://phantom-expansion.unidadeditorial.es/aaad57cd1e20cab29748a0375dcd0309/crop/0x110/1920x1191/resize/828/f/jpg/assets/multimedia/imagenes/2022/05/20/16530528329270.jpg' },
            improvements: { text: improvementsText, image: 'https://phantom-expansion.unidadeditorial.es/aaad57cd1e20cab29748a0375dcd0309/crop/0x110/1920x1191/resize/828/f/jpg/assets/multimedia/imagenes/2022/05/20/16530528329270.jpg' },
            technologie: { text: technologieText, image: 'https://phantom-expansion.unidadeditorial.es/aaad57cd1e20cab29748a0375dcd0309/crop/0x110/1920x1191/resize/828/f/jpg/assets/multimedia/imagenes/2022/05/20/16530528329270.jpg' },
        }
        console.log(body)
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
