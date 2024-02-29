import { Box, Button, Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";

function MainLayout() {
  return (
    <Container maxWidth='l' sx={{ bgcolor: '#cfe8fc', minHeight: '67.5rem' }}>
      <div id="TITLE">
        <Box sx={{ bgcolor: 'red', height: '8.1rem'}} />
      </div>

      <div id="SEARCH BODY" sx={{ padding: '2rem' }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Box sx={{ bgcolor: 'green', height: { xs: '13.5rem', md: '18rem' } }} />
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
