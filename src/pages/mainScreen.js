import { Box, Button, Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";
function MainLayout() {
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
          <Box sx={{ bgcolor: 'yellow', height: '21.8rem', mt: '2rem' }} />
        </div>
      </div>
    </Container>
  );
}
export default MainLayout;