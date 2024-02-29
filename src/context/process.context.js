import React, { createContext, useState } from 'react'

export const ProcessContextProvider = createContext();

export default function ProcessContext({ children }) {
    const [successCase, setSuccessCase] = useState({});
    const [step, setStep] = useState(0);

    const nextStep = () => {
        setStep(step + 1);
    }

    const previousStep = () => {
        setStep(step - 1);
    }

    return (
        <ProcessContextProvider.Provider value={{ step, nextStep, previousStep, setSuccessCase, successCase }}>
            { children }
        </ProcessContextProvider.Provider>
    )
}
