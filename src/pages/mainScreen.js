import { Box, Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DataTable from "../components/dataTable/dataTable";
import FilterMainScreen from "../components/filterMainScreen/filterMainScreen";
import CreateButton from "../components/button/createButton";
import BasicTitle from "../components/basicTitle/basicTitle";
import { getClients, getIndustries, getProyectsTypes, getContacts, getSuccessCases } from "../services/successCaseServerCalls";

function MainScreen() {

  const enzo = [{ id: 1, client: "Martina Laventure", industry: "UCU", projectType: "project", referrer: "Martina Laventure", date: "MM/DD/YYYY" },
  { id: 2, client: "Martin Laventure", industry: "UCU", projectType: "project", referrer: "Martin Laventure", date: "MM/DD/YYYY" },
  { id: 3, client: "Enzo Aparicio", industry: "UCU pde", projectType: "project challenge", referrer: "Enzo Aparicio", date: "MM/DD/YYYY" },
  { id: 4, client: "Lautaro Robayna", industry: "ORT", projectType: "project ort", referrer: "Lautaro Robayna", date: "MM/DD/YYYY" },
  { id: 5, client: "Ema Avarez", industry: "UM", projectType: "project um", referrer: "Ema Alvarez", date: "MM/DD/YYYY" }];

  /* const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const successCases = getSuccessCases();
  
      const combinedData = successCases.map((successCases, id) => {
        return {
          id:id,
          client: successCases[id].Client.name,
          industry: successCases[id].Industry.name,
          projectType: successCases[id].ProjectType.name,
          referrer: successCases[id].Contact.name,
      }});
    
      setData(combinedData); 
    };
  
    fetchData();
  }, []); */

  return (
    <Container maxWidth='l' sx={{ bgcolor: '#ffffff' }}>
      <div id="TITLE">
        <img src='/globant_logo.png' alt='' width='190' height='60' alignItem='center' />
        <BasicTitle basictitle={"Success cases"} />
      </div>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              height: '20rem',
              marginTop: '2rem',
              width: { xs: '100%', md: '100%' },
            }}
          ><FilterMainScreen /></Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box sx={{ textAlign: 'center', marginTop: '1rem' }}>
            <Link to="/layout2">
              <CreateButton />
            </Link>
          </Box>
        </Grid>
      </Grid>

      <div id="TABLE">
        <Box sx={{ height: '21.8rem', mt: '2rem', marginTop: '7rem' }} >
          <DataTable rows={enzo} />
        </Box>
      </div>
    </Container>
  );
}

export default MainScreen;
