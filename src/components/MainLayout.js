import { Box, Button, Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import DataTable from "./dataTable/dataTable";
import SelectListClients from "./selectListClients/selectListClients";
import MultipleSelect from "./selectListIndustry/selectListIndustry";
import SelectListProjectType from "./selectListProjectType/selectListProjectType";
import FilterMainScreen from "./filterMainScreen/filterMainScreen";
import CreateButton from "./button/createButton";
import BasicTitle from "./basicTitle/basicTitle";

function MainLayout() {
  const enzo = [{ id:1, client: "Martina Laventure", industry: "UCU", projectType: "project", referrer: "Martina Laventure", date: "MM/DD/YYYY"},
{ id:2, client: "Martin Laventure", industry: "UCU", projectType: "project", referrer: "Martin Laventure", date: "MM/DD/YYYY"},
{ id:3, client: "Enzo Aparicio", industry: "UCU pde", projectType: "project challenge", referrer: "Enzo Aparicio", date: "MM/DD/YYYY"},
{ id:4, client: "Lautaro Robayna", industry: "ORT", projectType: "project ort", referrer: "Lautaro Robayna", date: "MM/DD/YYYY"},
{ id:5, client: "Ema Avarez", industry: "UM", projectType: "project um", referrer: "Ema Alvarez", date: "MM/DD/YYYY"}];

  const client = ["Enzo","Martina"];

  const industry = ["UCU","ORT","UM","UCU pde"];

  const projectTypes = ["Mobile","Web","Development"]

  return (
    <Container maxWidth='l' sx={{ bgcolor: '#cfe8fc' }}>
      <div id="TITLE">
        <BasicTitle basictitle={"Success cases"}/>
      </div>
      <div id="SEARCH BODY">
        <Grid container justifyContent="center" spacing={15} sx={{
          justifyContent: "flex-start"
        }}>
          <Grid key={1} item sx={
            {
              width: '50%'
            }
          }>
          < FilterMainScreen />
          </Grid>

          <Grid key={2} item

            sx={
              {
                width: '50%'
              }
            }>
            
            <CreateButton />

          </Grid>
        </Grid>

        <div id="TABLE">
              <DataTable rows = {enzo} />
        </div>
      </div>
    </Container>
  );
}

export default MainLayout;