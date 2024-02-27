import React from "react";
import {
  Button,
  Container,
  FormControlLabel,
  Grid,
  IconButton,
  Switch,
  Tooltip,
  Typography,
} from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

function MainLayout2() {
  return (
    <Container maxWidth="lg" sx={{ bgcolor: "white", minHeight: "100vh" }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography
            variant="h3"
            gutterBottom
            sx={{ marginLeft: "auto", marginRight: "auto", marginTop: "3rem" }}
          >
            New Success Case
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            value="top"
            control={<Switch color="primary" />}
            label="Make Public"
            labelPlacement="top"
            sx={{ marginLeft: "auto", marginRight: "auto", marginTop: "2rem" }}
          />
          <Tooltip
            title={
              <h1 style={{ color: "black" }}>
                If the Make Public option is turned on, any person will be able
                to see the Client field. If it is OFF, then the Client field
                will only be displayed to the Success Case creator
              </h1>
            }
          >
            <IconButton>
              <HelpOutlineIcon />
            </IconButton>
          </Tooltip>
        </Grid>

        <Grid item xs={12}>
          <Button
            variant="contained"
            size="large"
            sx={{
              height: "2rem",
              marginTop: { xs: "1rem", md: "4rem" },
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Create
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default MainLayout2;
