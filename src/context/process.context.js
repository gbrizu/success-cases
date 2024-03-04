import React, { createContext, useState } from 'react'

export const ProcessContextProvider = createContext();

export default function ProcessContext({ children }) {
    const [successCase, setSuccessCase] = useState({});

    const [successCasePage, setSuccessCasePage] = useState(0);
    const [challengePage, setChallengePage] = useState(0);
    const [improvementsPage, setImprovementsPage] = useState(0);
    const [technologiePage, setTechnologiePage] = useState(0);

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

    const [step, setStep] = useState(0);

    const nextStep = () => {
        setStep(step + 1);
    }

    const previousStep = () => {
        setStep(step - 1);
    }

    return (
        <ProcessContextProvider.Provider value={{ step, nextStep, previousStep, setSuccessCase, successCase, newPageHandler }}>
            { children }
        </ProcessContextProvider.Provider>
    )
}
