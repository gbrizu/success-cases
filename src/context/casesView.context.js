import React, { createContext, useState } from 'react'
import { getSuccessCase } from '../services/successCaseServerCalls';

export const CaseViewContextProvider = createContext();

export default function CaseViewContext({ children }) {
    const [screen, setScreen] = useState('viewCaseDetails');
    const [actualSuccessCase, setSuccessCase] = useState({});
    const [successCasesList, setSuccessCasesList] = useState([]);


    const navigate = (screen) => {
        setScreen(screen);
    }

    return (
        <CaseViewContextProvider.Provider value={{
            screen,
            setScreen,
            navigate,
            actualSuccessCase,
            setSuccessCase,
            successCasesList,
            setSuccessCasesList
        }}>
            {children}
        </CaseViewContextProvider.Provider>
    )
}
