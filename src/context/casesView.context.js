import React, { createContext, useState } from 'react'

export const CaseViewContextProvider = createContext();

export default function CaseViewContext({ children }) {
    const [screen, setScreen] = useState('viewCaseDetails');
    const [actualSuccessCase, setSuccessCase] = useState({});
    const [pagDescription, setPageDescription] = useState({});


    const navigate = (screen) => {
        setScreen(screen);
    }

    return (
        <CaseViewContextProvider.Provider value={{
            screen,
            navigate,
            actualSuccessCase,
            setSuccessCase
        }}>
            {children}
        </CaseViewContextProvider.Provider>
    )
}
