import React, { createContext, useState } from 'react'
import { getSuccessCase } from '../services/successCaseServerCalls';

export const CaseViewContextProvider = createContext();

export default function CaseViewContext({ children }) {
    const [screen, setScreen] = useState('viewCaseDetails');
    const [actualSuccessCase, setSuccessCase] = useState({});
    const [successCasesList, setSuccessCasesList] = useState([]);
    const [challenge, setChallenge] = useState('');
    const [casedetail, setCaseDetail] = useState('');
    const [technology, setTechnology] = useState('');
    const [improvement, setImprovement] = useState('');

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
            setSuccessCasesList,
            challenge,
            setChallenge,
            casedetail,
            setCaseDetail,
            technology,
            setTechnology,
            improvement,
            setImprovement

        }}>
            {children}
        </CaseViewContextProvider.Provider>
    )
}
