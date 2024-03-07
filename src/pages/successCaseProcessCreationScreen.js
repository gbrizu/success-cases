import React, { useContext } from "react";
import CreateSuccessCaseScreen from "./createSuccessCaseScreen";
import { ProcessContextProvider } from "../context/process.context";
import SuccessCaseEditionMode from "./successCaseEditionMode";
import ChallengesEditionMode from "./challengesEditionMode";
import ImprovementsEditionMode from "./improvementsEditionMode";
import TechnologiesEditionMode from "./technologiesEditionMode";

export default function SuccessCaseProcessCreationScreen() {
  const { screen: screenName } = useContext(ProcessContextProvider);

  const screens = [
    {
      name: "createPage",
      component: <CreateSuccessCaseScreen />,
    },
    {
      name: "successCase",
      component: <SuccessCaseEditionMode />,
    },
    {
      name: "challenge",
      component: <ChallengesEditionMode />,
    },
    {
      name: "improvement",
      component: <ImprovementsEditionMode />,
    },
    {
      name: "technologies",
      component: <TechnologiesEditionMode />,
    },
  ];

  const currentScreen = screens.find((screen) => screen.name === screenName);

  return <>{currentScreen && currentScreen.component}</>;
}
