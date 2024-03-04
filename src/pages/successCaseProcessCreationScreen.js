// SuccessCaseProcessCreationScreen.js
import React, { useContext } from "react";
import CreateSuccessCaseScreen from "./createSuccessCaseScreen";
import { ProcessContextProvider } from "../context/process.context";
import SuccessCaseEditionMode from "./successCaseEditionMode";
import ChallengesEditionMode from "./challengesEditionMode";
import ImprovementsEditionMode from "./improvementsEditionMode";
import TechnologiesEditionMode from "./technologiesEditionMode";

export default function SuccessCaseProcessCreationScreen() {
  const { step } = useContext(ProcessContextProvider);

  // Actualiza la lista de screens según tus necesidades
  const screens = {
    0: <CreateSuccessCaseScreen />,
    1: <SuccessCaseEditionMode />,
    2: <ChallengesEditionMode />,
    3: <ImprovementsEditionMode />,
    4: <TechnologiesEditionMode />,
  };

  return <>{screens[step]}</>;
}
