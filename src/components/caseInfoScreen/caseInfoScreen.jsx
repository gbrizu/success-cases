import React, {useState, useEffect} from "react";
import DataTable from "../dataTable/dataTable";
import CaseDetails from "../caseDetails/caseDetails";
import CaseInfo from "../caseInfo/caseInfo";

function caseInfoScreen() {
    const [currentComponent,setCurrentComponent ] = useState("DataTable");
    const [currentCaseInfo, setCurrentCaseInfo] = useState(0);

    const handleNext = () =>{
        if (currentCaseInfo < 4){
            setCurrentCaseInfo ((prevIndex) => prevIndex + 1);
        }
    };

    const handleBack = () =>{
        if (currentCaseInfo >0){
            setCurrentCaseInfo ((prevIndex) => prevIndex - 1);
        }
    };

    const handleDetailsClick = () =>{
        setCurrentComponent("CaseInfo");
        setCurrentCaseInfo(0);
    };

    return (
        <div>
        {currentComponent === "DataTable" && <DataTable rows={[]} onDetailsClick={handleDetailsClick} />}
        {currentComponent === "CaseDetails" && <CaseDetails client={{}} onBack={handleBack} onNext={handleNext} />}
        {currentComponent === "CaseInfo" && (
          <CaseInfo
            key={currentCaseInfo}
            onNext={handleNext}
            onBack={handleBack}
          />
        )}
      </div>
    );
  }
   
export default caseInfoScreen;