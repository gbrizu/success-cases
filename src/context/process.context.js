import React, { createContext, useState } from 'react';
import imageCompression from 'browser-image-compression';
import { postSuccessCase } from '../services/successCaseServerCalls';

export const ProcessContextProvider = createContext();

export default function ProcessContext({ children }) {
    const [successCase, setSuccessCase] = useState({});
    const [screen, setScreen] = useState('createPage');
    const [successCaseText, setSuccessCaseText] = useState('');
    const [challengeText, setChallengeText] = useState('');
    const [technologieText, setTechnologieText] = useState('');
    const [improvementsText, setImprovementsText] = useState('');

    const [successCaseFile, setSuccessCaseFile] = useState('');
    const [challengeFile, setChallengeFile] = useState('');
    const [technologieFile, setTechnologieFile] = useState('');
    const [improvementsFile, setImprovementsFile] = useState('');

    const [successCaseVideo, setSuccessCaseVideo] = useState('');
    const [challengeVideo, setChallengeVideo] = useState('');
    const [technologieVideo, setTechnologieVideo] = useState('');
    const [improvementsVideo, setImprovementsVideo] = useState('');

    const navigate = (screen) => {
        setScreen(screen);
    };

    const compressImage = async (file) => {
        if (!file) return null;

        const options = {
            maxSizeMB: 1,
            maxWidthOrHeight: 800,
            useWebWorker: true,
        };

        try {
            const compressedFile = await imageCompression(file, options);
            return compressedFile;
        } catch (error) {
            console.error('Error compressing image:', error);
            return null;
        }
    };

    const toBase64 = (file) => new Promise((resolve, reject) => {
        if (!file) return resolve('');
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
    });

    const submitSuccessCaseHandler = async () => {
        const compressedSuccessCaseFile = await compressImage(successCaseFile);
        const compressedChallengeFile = await compressImage(challengeFile);
        const compressedTechnologieFile = await compressImage(technologieFile);
        const compressedImprovementsFile = await compressImage(improvementsFile);

        const successCaseImage = await toBase64(compressedSuccessCaseFile);
        const challengeImage = await toBase64(compressedChallengeFile);
        const technologieImage = await toBase64(compressedTechnologieFile);
        const improvementsImage = await toBase64(compressedImprovementsFile);

        const successCaseVideoBase64 = await toBase64(successCaseVideo);
        const challengeVideoBase64 = await toBase64(challengeVideo);
        const technologieVideoBase64 = await toBase64(technologieVideo);
        const improvementsVideoBase64 = await toBase64(improvementsVideo);

        const body = {
            ...successCase,
            successCase: { text: successCaseText, image: successCaseImage, video: successCaseVideoBase64 },
            challenge: { text: challengeText, image: challengeImage, video: challengeVideoBase64 },
            improvements: { text: improvementsText, image: improvementsImage, video: improvementsVideoBase64 },
            technologie: { text: technologieText, image: technologieImage, video: technologieVideoBase64 },
        };

        const res = await postSuccessCase(body);

        if (res.message === 'El caso se ha creado correctamente.') {
            alert('El caso se ha creado correctamente.');
        }
    };

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
            successCaseVideo,
            setSuccessCaseVideo,
            challengeVideo,
            setChallengeVideo,
            technologieVideo,
            setTechnologieVideo,
            improvementsVideo,
            setImprovementsVideo
        }}>
            {children}
        </ProcessContextProvider.Provider>
    );
}
