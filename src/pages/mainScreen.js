import { Box, Button, Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import CaseInfoScreen from "../components/caseInfoScreen/caseInfoScreen";
import CaseDetails from "../components/caseDetails/caseDetails";
import DataTable from "../components/dataTable/dataTable";
function MainLayout() {

  const rows = [
    { id: 1, client: "Client 1", industry: "Industry 1", projectType: "Project 1", referrer: "Referrer 1", date: "2022-03-01" },
    { id: 2, client: "Client 2", industry: "Industry 2", projectType: "Project 2", referrer: "Referrer 2", date: "2022-03-02" },
    { id: 3, client: "Client 3", industry: "Industry 3", projectType: "Project 3", referrer: "Referrer 3", date: "2022-03-03" },
  ];
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
      <div id="TITLE">
        <Box  sx={{ bgcolor: 'red', height: '8.1rem', marginBottom:'1.5rem'}} />
      </div>
      <div id="SEARCH BODY">
        <Grid container spacing={2} sx={{
          justifyContent: "center"
        }}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                bgcolor: 'green',
                height: '20rem',
                marginTop: '2rem',
                width: { xs: '100%', md: '100%' },
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: 'center', marginTop: '1rem' }}>
              <Link to="/layout2">
                <Button variant="contained" size="large">
                  Create new Success Case
                </Button>
              </Link>
            </Box>
          </Grid>
        </Grid>
        <div id="TABLE">
          <DataTable rows={rows}></DataTable>
        </div>
      </div>
      {/* <CaseInfoScreen></CaseInfoScreen> */}
      {/* <CaseDetails client={client}></CaseDetails> */}
    </Container>
  );
}
export default MainLayout;