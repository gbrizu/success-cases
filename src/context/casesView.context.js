import React, { createContext, useState } from 'react'

export const CaseViewContextProvider = createContext();

export default function CaseViewContext({ children }) {
    const [screen, setScreen] = useState('viewCaseDetails');
    const [successCase, setSuccessCase] = useState({});


    const navigate = (screen) => {
        setScreen(screen);
    }

    return (
        <CaseViewContextProvider.Provider value={{
            screen,
            navigate,
            successCase,
            setSuccessCase
        }}>
            {children}
        </CaseViewContextProvider.Provider>
    )
}
