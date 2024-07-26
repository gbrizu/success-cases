import { Grid, Button, Container } from "@mui/material";
import "../../App.css";
import CaseDetailsInfo from "./caseDetailsInfo";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { CaseViewContextProvider } from "../../context/casesView.context";
import { getSuccessCaseById } from "../../services/successCaseServerCalls";

export default function CaseDetails({ successCase }) {
  const { navigate, setSuccessCase, actualSuccessCase } = useContext(
    CaseViewContextProvider
  );


  const { id } = useParams();

  useEffect(() => {
    getSuccessCaseById(id).then((response) => {
      setSuccessCase(response)
    })
  }, [])




  return (
    <div style={{ width: "100%", justifyContent: "center", display: "flex" }}>
      <div style={{ width: "auto", padding: "2rem", border: "solid", marginTop: "5rem" }}>
        <h1 style={{ fontSize: "4.5rem", color: "red", textAlign: "center" }}>Success Case Details</h1>

        <CaseDetailsInfo label={"Client"} info={actualSuccessCase.Client ? actualSuccessCase.Client.name : ''}></CaseDetailsInfo>
        <CaseDetailsInfo label={"Industry"} info={actualSuccessCase.Industry ? actualSuccessCase.Industry.name : ''}></CaseDetailsInfo>
        <CaseDetailsInfo label={"Project type"} info={actualSuccessCase.ProjectType ? actualSuccessCase.ProjectType.name : ''}></CaseDetailsInfo>
        <CaseDetailsInfo label={"Offering"} info={actualSuccessCase.Offering ? actualSuccessCase.Offering.name : ''}></CaseDetailsInfo>
        <CaseDetailsInfo label={"Date"} info={actualSuccessCase.startdate + " - " + actualSuccessCase.finishdate}></CaseDetailsInfo>
        <CaseDetailsInfo label={"Project contact"} info={actualSuccessCase.Contact ? actualSuccessCase.Contact.email : ''}></CaseDetailsInfo>
        <CaseDetailsInfo label={"Avg. Team size"} info={actualSuccessCase.teamsize}></CaseDetailsInfo>

        <div style={{ marginTop: "1.5rem", display: "flex", justifyContent: "space-between" }}>
          <Link to={"/"}>
            <Button
              variant="contained"
              style={{ marginRight: "100px" }}
            >
              Back
            </Button>
          </Link>

          <Button
            variant="contained"
            style={{ marginLeft: "100px" }}
            onClick={() => {
              navigate('viewSuccessCaseDescription')
            }}
          >
            Next
          </Button>

        </div>
      </div>
    </div>
  );
}

