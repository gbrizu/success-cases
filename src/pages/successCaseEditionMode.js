import React, { useContext, useState, useEffect } from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { ProcessContextProvider } from "../context/process.context";
import CaseInfoEdition from "../components/caseInfoEdition/caseInfoEdition";
import AddImage from "../components/addButton/addImage"; // Importa tu componente AddImage
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import NavbarScreen from "../components/editionpage/NavbarScreen";

function SuccessCaseEditionMode() {
  const { navigate, successCasePage, successCase, onChangeTextInput } =
    useContext(ProcessContextProvider);

  return (
    <Container maxWidth="lg" sx={{ bgcolor: "white", minHeight: "100vh" }}>
      <Grid container spacing={1} justifyContent="center" alignItems="center" style={{ height: '100%' }}>
        <Grid container item xs={12} spacing={-2} justifyContent="center" alignItems="center">
          <Grid item xs={5} display="flex" justifyContent="center" alignItems="center">
            
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
          <Grid item xs={5} display="flex" justifyContent="center" alignItems="center">
            
            <Box
              sx={{
                border: "2px solid black",
                borderRadius: "5px",
                padding: "1rem",
                height: "65%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "468px",
                maxHeight: "468px",
                width: "318px", 
                minWidth: "318px", 
                maxWidth: "318px",
                marginTop: "0.2rem"
                
              }}
            >
              <AddImage />
            </Box>
          </Grid>

          {/* <NavbarScreen /> */}
          
        </Grid>
      </Grid>
    </Container>
  );
}

export default SuccessCaseEditionMode;