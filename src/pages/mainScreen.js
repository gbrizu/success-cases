import { Box, Container, Grid } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DataTable from "../components/dataTable/dataTable";
import FilterMainScreen from "../components/filterMainScreen/filterMainScreen";
import CreateButton from "../components/button/createButton";
import BasicTitle from "../components/basicTitle/basicTitle";
import { getSuccessCase } from "../services/successCaseServerCalls";
import { CaseViewContextProvider } from "../context/casesView.context";

function MainScreen() {

  const [data, setData] = useState([]);
  const { successCasesList } = useContext(
    CaseViewContextProvider
  );

  useEffect(() => {
    if (successCasesList && successCasesList.length > 0) {
      const temp = successCasesList.map((successCase) => {
        return {
          id: successCase.id,
          client: successCase.Client.name,
          industry: successCase.Industry.name,
          projectType: successCase.ProjectType.name,
          referrer: successCase.Contact.name,
          date: successCase.startdate + " " + successCase.finishdate,
        };
      });
      setData(temp);
    }
  }, [successCasesList]);

  return (
    <Container maxWidth='l' sx={{ bgcolor: '#ffffff' }}>
      <div id="TITLE">
        <img src='/globant_logo.png' alt='' width='190' height='60' alignItem='center' />
        <BasicTitle basictitle={"Success cases"} />
      </div>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6} xl={4}>
          <Box
            sx={{
              textAlign: 'center',
              height: '27.5rem',
              marginTop: '2rem',
              width: { xs: '100%', md: '100%' },
            }}
          >
            <FilterMainScreen />
          </Box>
        </Grid>

        {/* CAMBIAR BOTÓN POR SEARCH*/}
        <Grid item xs={12} md={3} xl={4}>
          <Box sx={{ textAlign: 'center', marginTop: '1rem' }}>
            {/* <Link to="/layout2"> */}
            <CreateButton />
            {/* </Link> */}
          </Box>
        </Grid>

        <Grid item xs={12} md={3} xl={4}>
          <Box sx={{ textAlign: 'center', marginTop: '1rem' }}>
            <Link to="/layout2">
              <CreateButton />
            </Link>
          </Box>
        </Grid>
      </Grid>

      <div id="TABLE">
        <Box sx={{ height: '21.8rem', mt: '2rem', marginTop: '2rem' }} >
          <DataTable rows={data} />
        </Box>
      </div>
    </Container>
  );
}

export default MainScreen;