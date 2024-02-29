import React, { useContext } from 'react'
import CreateSuccessCaseScreen from './createSuccessCaseScreen'
import { ProcessContextProvider } from '../context/process.context';

export default function SuccessCaseProcessCreationScreen() {
    const { step, nextStep, previousStep, setSuccessCase, successCase } = useContext(ProcessContextProvider);

    const screens = [
        {
            step: 0,
            component: <CreateSuccessCaseScreen />
        }
    ]

    const currentScreen = screens.find(screen => screen.step === step);

    return (
        <>
            {currentScreen && currentScreen.component}
        </>
    )
}
