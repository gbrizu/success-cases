import React, { createContext, useState } from 'react'

export const ProcessContextProvider = createContext();

export default function ProcessContext({ children }) {
    const [successCase, setSuccessCase] = useState({});

    const [successCasePage, setSuccessCasePage] = useState(0);
    const [challengePage, setChallengePage] = useState(0);
    const [improvementsPage, setImprovementsPage] = useState(0);
    const [technologiePage, setTechnologiePage] = useState(0);
    const [screen, setScreen] = useState('createPage');

    const newPageHandler = (type, content) => {
        if(type === 'successCase') {
            setSuccessCasePage(successCasePage + 1);
            successCase.successCase.push(content)
        } else if(type === 'challenge') {
            setChallengePage(challengePage + 1);
            successCase.challenge.push(content)
        } else if(type === 'improvements') {
            setImprovementsPage(improvementsPage + 1);
            successCase.improvements.push(content)
        } else if(type === 'technologie') {
            setTechnologiePage(technologiePage + 1);
            successCase.technologie.push(content)
        }
    }

    const navigate = (screen) => {
        setScreen(screen);
    }

    const saveProgress = (content) => { 
        
    }

    const onSubmitSuccessCase = (content) => {

    }

    return (
        <ProcessContextProvider.Provider value={{ screen, navigate, setSuccessCase, successCase, newPageHandler }}>
            { children }
        </ProcessContextProvider.Provider>
    )
}
