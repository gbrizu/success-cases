import { Box, Button, Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { UserContext } from "../App";
import { useContext } from "react";

function MainScreen() {
  return (
    <Container maxWidth='l' sx={{ bgcolor: '#cfe8fc' }}>
      
      <div id="TITLE">
      <Box sx={{ bgcolor: 'red', height: '12vh',display: 'flex', alignItems: 'center' }}>
            <img src='/globant_logo.png' alt='' width='190' height='60' alignItem = 'center' />
        </Box>
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
            <Box
              sx={{
                bgcolor: 'green',
                height: '50vh',
                marginTop: '2rem'

              }}
            />
          </Grid>

          <Grid key={2} item

            sx={
              {
                width: '50%'
              }
            }>

            <Link to="/NewSuccessCases">
              <Button variant="contained" size="large" sx={
                {
                  height: '5rem',
                  marginTop: '15rem',
                  marginLeft:'13rem',

                }
              }>Create new Success Case</Button></Link>

          </Grid>
        </Grid>

        <div id="TABLE">
          <Box sx={{ bgcolor: 'yellow', height: '32.3vh', marginTop: '2rem' }} />
        </div>
      </div>
    </Container>
  );
}

export default MainScreen;