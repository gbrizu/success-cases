import { Box, Button, Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";

function MainLayout() {
  return (
    <Container maxWidth='l' sx={{ bgcolor: '#cfe8fc' }}>

      <div id="TITLE">
        <Box  sx={{ bgcolor: 'red', height: '8.1rem', marginBottom:'1.5rem'}} />
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
                height: '20rem',
                marginTop: '2rem'

              }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: 'center' }}>
              <Link to="/layout2">
                <Button variant="contained" size="large" sx={{ mt: { xs: '2rem', md: '15rem' } }}>
                  Create new Success Case
                </Button>
              </Link>
            </Box>
          </Grid>
        </Grid>

        <div id="TABLE">
          <Box sx={{ bgcolor: 'yellow', height: '21.8rem', mt: '2rem' }} />
        </div>
      </div>
    </Container>
  );
}

export default MainLayout;