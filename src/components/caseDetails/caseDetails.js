import { Grid, Button, Container } from "@mui/material";
import "../../App.css";
import CaseDetailsInfo from "./caseDetailsInfo";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { CaseViewContextProvider } from "../../context/casesView.context";
import { getSuccessCaseById } from "../../services/successCaseServerCalls";

export default function CaseDetails({ successCase }) {
  const { navigate, setSuccessCase } = useContext(
    CaseViewContextProvider
  );


  const { id } = useParams();

  useEffect(() => {
    getSuccessCaseById(id).then((response) => {
      console.log(response)
      setSuccessCase(response)
    })
  }, [])




  return (
    <div style={{ width: "100%", justifyContent: "center", display: "flex" }}>
      <div style={{ width: "auto", padding: "2rem", border: "solid", marginTop: "5rem" }}>
        <h1 style={{ fontSize: "4.5rem", color: "red", textAlign: "center" }}>Success Case Details</h1>

        <CaseDetailsInfo label={"Client"} info={succesCase.Client.name}></CaseDetailsInfo>
        <CaseDetailsInfo label={"Industry"} info={succesCase.Industry.name}></CaseDetailsInfo>
        <CaseDetailsInfo label={"Project type"} info={succesCase.ProjectType.name}></CaseDetailsInfo>
        <CaseDetailsInfo label={"Offering"} info={succesCase.Offering.name}></CaseDetailsInfo>
        <CaseDetailsInfo label={"Date"} info={succesCase.startdate + " - " + succesCase.finishdate}></CaseDetailsInfo>
        <CaseDetailsInfo label={"Project contact"} info={succesCase.Contact.email}></CaseDetailsInfo>
        <CaseDetailsInfo label={"Avg. Team size"} info={succesCase.teamsize}></CaseDetailsInfo>

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

