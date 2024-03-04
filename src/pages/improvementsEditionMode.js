import React, { useContext } from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { ProcessContextProvider } from "../context/process.context";
import CaseInfoEdition from "../components/caseInfoEdition/caseInfoEdition";
import AddImage from "../components/addButton/addImage"; // Importa tu componente AddImage
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SuccesCaseButton from "../components/createSuccessCaseButtons/succesCaseButton";
import SaveIcon from "@mui/icons-material/Save";
import VisibilityIcon from "@mui/icons-material/Visibility";

function ImprovementsEditionMode() {
  const { step, nextStep, previousStep, resetStep } = useContext(
    ProcessContextProvider
  );
  const buttonContainerStyle = {
    display: "flex",
    alignItems: "center",
    marginLeft: "1.5rem",
  };

  const iconStyle = {
    fontSize: "2rem",
    fill: "black",
  };

  return (
    <Container maxWidth="lg" sx={{ bgcolor: "white", minHeight: "100vh" }}>
      <Grid container spacing={2} justifyContent="flex-start">
        <Grid item xs={12}>
          <Button
            variant="text"
            size="large"
            sx={{
              marginLeft: "0rem",
              marginTop: "1rem",
              justifyContent: "start",
            }}
            onClick={() => resetStep()}
          >
            <ArrowBackIcon style={{ justifyContent: "start" }} />
          </Button>
        </Grid>

        <Grid item xs={12}>
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              marginLeft: "0rem",
              marginRight: "auto",
              marginTop: "0rem",
              fontWeight: "bold",
            }}
          >
            Improvements
          </Typography>
        </Grid>

        {/* Grid para organizar CaseInfoEdition y AddImage en una fila */}
        <Grid container item xs={12} spacing={2}>
          <Grid item xs={5}>
            {/* Envuelve CaseInfoEdition en un contenedor con fondo y borde negro */}
            <Box
              sx={{
                //border: "2px solid black",
                //borderRadius: "5px",
                height: "50%",
                maxHeight: "500px",
                minHeight: "500px",
              }}
            >
              <CaseInfoEdition />
            </Box>
          </Grid>
          <Grid item xs={5}>
            {/* Envuelve AddImage en un contenedor con fondo y borde negro */}
            <Box
              sx={{
                border: "2px solid black",
                borderRadius: "5px",
                padding: "1rem",
                height: "65%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "520px",
                maxHeight: "520px",
              }}
            >
              <AddImage />
            </Box>
          </Grid>

          <Grid item xs={2}>
            <Box
              sx={{
                marginLeft: "auto",
                textAlign: "center",
                marginTop: "1rem",
              }}
            >
              <Typography variant="h4" gutterBottom>
                + Pages
              </Typography>
              <SuccesCaseButton
                onClick={() => console.log("Success Case button clicked")}
              >
                Succes Case
              </SuccesCaseButton>

              <SuccesCaseButton onClick={() => previousStep()}>
                Challenges
              </SuccesCaseButton>

              <SuccesCaseButton
                targetStep={step}
                onClick={() => console.log("Success Case button clicked")}
              >
                Improvements
              </SuccesCaseButton>

              <SuccesCaseButton onClick={() => nextStep()}>
                Technologies
              </SuccesCaseButton>
              <Box sx={buttonContainerStyle}>
                <Button>
                  <VisibilityIcon sx={iconStyle} />
                  <Typography color="black">View</Typography>
                </Button>
              </Box>
              <Box sx={buttonContainerStyle}>
                <Button>
                  <SaveIcon sx={iconStyle} />

                  <Typography color="black">Save</Typography>
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ImprovementsEditionMode;
