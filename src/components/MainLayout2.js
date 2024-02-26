import { Box, Button, Container, FormControlLabel, Grid, IconButton, Switch, TextField, Tooltip, Typography } from "@mui/material";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

//Este layout es para probar el routing!!!!
function MainLayout2() {
  return (
    <Container maxWidth='l' sx={{ bgcolor: 'blue' }}>

      <div id="TITLE">
     
        <Typography variant="h3" gutterBottom>
            New Success Case
        </Typography>

      </div>
      <div id="SEARCH BODY">

        <Grid container justifyContent="center" spacing={0} sx={{
          justifyContent: "flex-start"
        }}>

          <Grid key={1} item sx={
            {
              width: '20%'
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
                width: '20%'
              }
            }>

            <FormControlLabel
              value="top"
              control={<Switch color="primary" />}
              label="Make Public"
              labelPlacement="top"
            />
            <Tooltip title={<h1 style={{ color: "black" }}>If the Make Public option is turned on, any person will be able to see the Client
              field, if it is OFF, then the Client field will only be displayed to the Success Case creator</h1>}>
              <IconButton>
                <HelpOutlineIcon />
              </IconButton>
            </Tooltip>


            <Button variant="contained" size="large" sx={
              {
                height: '2rem',
                marginTop: '28rem',
                marginLeft: '10rem',


              }
            }>Create</Button>



          </Grid>
        </Grid>



      </div>
    </Container>
  );
}

export default MainLayout2;