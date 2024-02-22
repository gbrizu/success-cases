import { Box, Button, Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";

function MainLayout() {
  return (
    <Container maxWidth='xl' sx={{ bgcolor: '#cfe8fc' }}>

      <div id="TITLE">
        <Box sx={{ bgcolor: 'red', height: '10vh' }} />
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

            <Link to="/layout2">
              <Button variant="contained" size="large" sx={
                {
                  height: '5rem',
                  marginTop: '10rem'
                }
              }>Create new Success Case</Button></Link>

          </Grid>
        </Grid>

        <div id="TABLE">
          <Box sx={{ bgcolor: 'yellow', height: '30vh', marginTop: '2rem' }} />
        </div>
      </div>
    </Container>
  );
}

export default MainLayout;