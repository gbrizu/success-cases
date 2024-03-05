import React, { useContext } from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { ProcessContextProvider } from "../context/process.context";
import CaseInfoEdition from "../components/caseInfoEdition/caseInfoEdition";
import AddImage from "../components/addButton/addImage"; // Importa tu componente AddImage
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import NavbarScreen from "../components/editionpage/NavbarScreen";
import { useState } from "react";

function ChallengesEditionMode() {
  const { navigate, challengePage, successCase, onChangeTextInput } =
    useContext(ProcessContextProvider);

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
            onClick={() => navigate("createPage")}
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
            Challenges
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
              <CaseInfoEdition
              />
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

          <NavbarScreen />
        </Grid>
      </Grid>
    </Container>
  );
}

export default ChallengesEditionMode;
