import { Grid, Button, Container } from "@mui/material";
import "../../App.css";
import CaseDetailsInfo from "./caseDetailsInfo";
import { Link } from "react-router-dom";

export default function CaseDetails({ client }) {
  function backButton() {
    alert("This should go to cases list");
  }

  function nextButton() {
    alert("This should go to case description");
  }

  const infoList = [
    { label: "Client", info: "Info" }
  ]

  return (
    <Container>
      <h1>Success Case Details</h1>

      <CaseDetailsInfo label={"Client"} info={"Info"}></CaseDetailsInfo>
      <CaseDetailsInfo label={"Industry"} info={"Entretainment"}></CaseDetailsInfo>
      <CaseDetailsInfo label={"Project type"} info={"Development"}></CaseDetailsInfo>
      <CaseDetailsInfo label={"Offering"} info={"Modernization"}></CaseDetailsInfo>
      <CaseDetailsInfo label={"Date"} info={"Dec 2022 - Nov 2023"}></CaseDetailsInfo>
      <CaseDetailsInfo label={"Project contact"} info={"milton.rodriguez@globant.com"}></CaseDetailsInfo>
      <CaseDetailsInfo label={"Avg. Team size"} info={"10"}></CaseDetailsInfo>

      <Link to={"/"}>
        <Button
          variant="contained"
          style={{ marginRight: "100px" }}
        >
          Back
        </Button>
      </Link>

      <Link to="info">
        <Button
          variant="contained"
          style={{ marginLeft: "100px" }}
        >
          Next
        </Button>
      </Link>
    </Container>
  );
}
