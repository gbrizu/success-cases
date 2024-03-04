import { Box, Button, Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import DataTable from "../components/dataTable/dataTable";
import FilterMainScreen from "../components/filterMainScreen/filterMainScreen";
import CreateButton from "../components/button/createButton";
import BasicTitle from "../components/basicTitle/basicTitle";


function MainScreen() {
  const enzo = [{ id:1, client: "Martina Laventure", industry: "UCU", projectType: "project", referrer: "Martina Laventure", date: "MM/DD/YYYY"},
{ id:2, client: "Martin Laventure", industry: "UCU", projectType: "project", referrer: "Martin Laventure", date: "MM/DD/YYYY"},
{ id:3, client: "Enzo Aparicio", industry: "UCU pde", projectType: "project challenge", referrer: "Enzo Aparicio", date: "MM/DD/YYYY"},
{ id:4, client: "Lautaro Robayna", industry: "ORT", projectType: "project ort", referrer: "Lautaro Robayna", date: "MM/DD/YYYY"},
{ id:5, client: "Ema Avarez", industry: "UM", projectType: "project um", referrer: "Ema Alvarez", date: "MM/DD/YYYY"}];

  return (
    <Container maxWidth='l' sx={{ bgcolor: '#ffffff' }}>
      <div id="TITLE">
        <BasicTitle basictitle={"Success cases"} />
      </div>
      <div id="SEARCH_BODY">
        <Grid container justifyContent="center" spacing={2} sx={{ justifyContent: "center" }}>
          <Grid item xs={12} sm={6}>
            <FilterMainScreen />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CreateButton />
          </Grid>
        </Grid>
        <div id="TABLE">
          <DataTable rows={enzo} />
        </div>
      </div>
    </Container>
  );
  
}

export default MainScreen;