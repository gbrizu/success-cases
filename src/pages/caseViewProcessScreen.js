import React, { useContext } from "react";
import ChallengesEditionMode from "./challengesEditionMode";
import ImprovementsEditionMode from "./improvementsEditionMode";
import TechnologiesEditionMode from "./technologiesEditionMode";
import { CaseViewContextProvider } from "../context/casesView.context";
import CaseDetails from "../components/caseDetails/caseDetails";
import CaseInfo from "../components/caseInfo/caseInfo";
import EndCase from "../components/endCase/endCase";
import { useParams } from "react-router-dom";

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
  const { actualSuccessCase } = useContext(CaseViewContextProvider);
  const { id } = useParams();


  const screens = [
    {
      name: viewSuccessCaseScreens[0],
      component: <CaseDetails />,
    },
    {
      name: viewSuccessCaseScreens[1],
      component: <CaseInfo
        title={'Success Case'}
        description={actualSuccessCase.CaseDetail ? actualSuccessCase.CaseDetail.text_detail : ''}
        image={actualSuccessCase.CaseDetail ? actualSuccessCase.CaseDetail.image_detail : ''}
        prevPage={viewSuccessCaseScreens[0]}
        nextPage={viewSuccessCaseScreens[2]}
      />
    },
    {
      name: viewSuccessCaseScreens[2],
      component: <CaseInfo
        title={'Challenges'}
        description={actualSuccessCase.Challenge ? actualSuccessCase.Challenge.text_ch : ''}
        prevPage={viewSuccessCaseScreens[1]}
        nextPage={viewSuccessCaseScreens[3]}
      />
    },
    {
      name: viewSuccessCaseScreens[3],
      component: <CaseInfo
        title={'Improvements'}
        description={actualSuccessCase.Improvement ? actualSuccessCase.Improvement.text_imp : ''}
        prevPage={viewSuccessCaseScreens[2]}
        nextPage={viewSuccessCaseScreens[4]}
      />
    },
    {
      name: viewSuccessCaseScreens[4],
      component: <CaseInfo
        title={'Technologies'}
        description={actualSuccessCase.Improvement ? actualSuccessCase.Improvement.text_imp : ''}
        prevPage={viewSuccessCaseScreens[3]}
        nextPage={viewSuccessCaseScreens[5]}
      />
    },
    {
      name: viewSuccessCaseScreens[5],
      component: <EndCase
        prevPage={viewSuccessCaseScreens[4]}
        initialPage={viewSuccessCaseScreens[0]}
      />
    }
  ];

  let currentScreen;
  
  if(id != actualSuccessCase.id) {
    console.log(id)
    console.log(actualSuccessCase.id)
    currentScreen = screens[0]
  } else {
    currentScreen = screens.find((screen) => screen.name === screenName);
  }
  return <>{currentScreen && currentScreen.component}</>;
}