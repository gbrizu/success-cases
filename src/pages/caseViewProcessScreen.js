import React, { useContext } from "react";
import ChallengesEditionMode from "./challengesEditionMode";
import ImprovementsEditionMode from "./improvementsEditionMode";
import TechnologiesEditionMode from "./technologiesEditionMode";
import { CaseViewContextProvider } from "../context/casesView.context";
import CaseDetails from "../components/caseDetails/caseDetails";
import CaseInfo from "../components/caseInfo/caseInfo";
import EndCase from "../components/endCase/endCase";

const viewSuccessCaseScreens = [
  "viewCaseDetails",
  "viewSuccessCaseDescription",
  "viewSuccessCaseChallenges",
  "viewSuccessImprovements",
  "viewSuccessTechnologies",
  "endCaseView"
]

export default function CaseViewProcessScreen() {
  const { screen: screenName } = useContext(CaseViewContextProvider);
  let { successCase } = useContext(CaseViewContextProvider);

  successCase = {
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales ut etiam sit amet nisl purus. Nullam eget felis eget nunc lobortis mattis aliquam faucibus purus. Amet venenatis urna cursus eget nunc. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat."
  }

  const screens = [
    {
      name: viewSuccessCaseScreens[0],
      component: <CaseDetails />,
    },
    {
      name: viewSuccessCaseScreens[1],
      component: <CaseInfo
        title={'Success Case'}
        description={successCase.description}
        prevPage={viewSuccessCaseScreens[0]}
        nextPage={viewSuccessCaseScreens[2]}
      />
    },
    {
      name: viewSuccessCaseScreens[2],
      component: <CaseInfo
        title={'Challenges'}
        description={successCase.description}
        prevPage={viewSuccessCaseScreens[1]}
        nextPage={viewSuccessCaseScreens[3]}
      />
    },
    {
      name: viewSuccessCaseScreens[3],
      component: <CaseInfo
        title={'Improvements'}
        description={successCase.description}
        prevPage={viewSuccessCaseScreens[2]}
        nextPage={viewSuccessCaseScreens[4]}
      />
    },
    {
      name: viewSuccessCaseScreens[4],
      component: <CaseInfo
        title={'Technologies'}
        description={successCase.description}
        prevPage={viewSuccessCaseScreens[3]}
        nextPage={viewSuccessCaseScreens[5]}
      />
    },
    {
      name: viewSuccessCaseScreens[5],
      component: <EndCase
      />
    }
  ];

  const currentScreen = screens.find((screen) => screen.name === screenName);
  console.log(currentScreen)
  return <>{currentScreen && currentScreen.component}</>;
}
