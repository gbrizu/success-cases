import React, { createContext, useRef, useState } from 'react'

export const ProcessContextProvider = createContext();

export default function ProcessContext({ children }) {
    const [successCase, setSuccessCase] = useState({});

    const [successCasePage, setSuccessCasePage] = useState(0);
    const [challengePage, setChallengePage] = useState(0);
    const [improvementsPage, setImprovementsPage] = useState(0);
    const [technologiePage, setTechnologiePage] = useState(0);
    const [screen, setScreen] = useState('createPage');

    console.log(successCase)

    const newPageHandler = (type, content) => {
        if (type === 'successCase') {
            setSuccessCasePage(successCasePage + 1);
            successCase.successCase.push(content)
        } else if (type === 'challenge') {
            setChallengePage(challengePage + 1);
            successCase.challenge.push(content)
        } else if (type === 'improvements') {
            setImprovementsPage(improvementsPage + 1);
            successCase.improvements.push(content)
        } else if (type === 'technologie') {
            setTechnologiePage(technologiePage + 1);
            successCase.technologie.push(content)
        }
    }

    const navigate = (screen, currentScreen) => {
        setScreen(screen);
    }

    const submitSuccessCaseHandler = (content) => {

    }

    const onChangeTextInput = (text, screen) => {
        if (screen === 'successCase') {
            if (successCase.succesCase && successCase.successCase[successCasePage]) {
                successCase.successCase[successCasePage].text = text;
            }
        }
        else if (screen === 'challenge') {
            console.log(screen, text)
            if (successCase.challenge && successCase.challenge[challengePage]) {
                successCase.challenge[challengePage].text = text;
            }
        } else if (screen === 'improvements') {
            if (successCase.improvements && successCase.improvements[improvementsPage]) {
                successCase.improvements[improvementsPage].text = text;
            }
        } else if (screen === 'technologie') {
            if (successCase.technologie && successCase.technologie[technologiePage]) {
                successCase.technologie[technologiePage].text = text;
            }
        }
    }

    return (
        <ProcessContextProvider.Provider value={{
            screen,
            navigate,
            setSuccessCase,
            successCase,
            newPageHandler,
            submitSuccessCaseHandler,
            onChangeTextInput,
            successCasePage,
            challengePage,
            improvementsPage,
            technologiePage,
        }}>
            {children}
        </ProcessContextProvider.Provider>
    )
}
