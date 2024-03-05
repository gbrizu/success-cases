import { Box, Button, Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import CaseInfoScreen from "../components/caseInfoScreen/CaseInfoScreen";
import CaseDetails from "../components/caseDetails/CaseDetails";
function MainLayout() {

  const client = {
    name: "juan",
    industry: "a",
    projectType: "a",
    offering: "a",
    dateRange: "a",
    mail: "a",
    teamSize: ""
  }

  return (
    <Container maxWidth='l' sx={{ bgcolor: '#CFE8FC' }}>
      
      <CaseDetails succesCase={client}></CaseDetails>
    </Container>
  );
}
export default MainLayout;