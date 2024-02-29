import { Box, Button, Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";

function MainLayout() {
  return (
    <Container maxWidth='l' sx={{ bgcolor: '#cfe8fc', minHeight: '100vh' }}>
      <div id="TITLE">
        <Box sx={{ bgcolor: 'red', height: '12vh' }} />
      </div>

      <div id="SEARCH BODY" sx={{ padding: '2rem' }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Box sx={{ bgcolor: 'green', height: { xs: '20vh', md: '50vh' } }} />
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
          <Box sx={{ bgcolor: 'yellow', height: '32.3vh', mt: '2rem' }} />
        </div>
      </div>
    </Container>
  );
}

export default MainLayout;
