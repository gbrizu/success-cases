import React from "react";
import {
  Button,
  Container,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  Switch,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AccountCircle } from "@mui/icons-material";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import OfferingSelect from "../components/selectListOfferings/selectListOfferings";
import SelectListClients from "../components/selectListClients/selectListClients";
import MultipleSelect from "../components/selectListIndustry";
import FormInfoInput from "../components/BasicFormInfo";


function CreateSuccessCaseScreen() {
  return (
    <Container maxWidth="lg" sx={{ bgcolor: "white", minHeight: "100vh", }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography
            variant="h3"
            gutterBottom
            sx={{ marginLeft: "24rem ", marginRight: "auto", marginTop: "3rem", }}
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

            sx={{ marginLeft: "48rem ", marginRight: "auto", marginTop: "2rem" }}
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
            <IconButton sx={{ marginTop: '3.4rem' }}>
              <HelpOutlineIcon />
            </IconButton>
          </Tooltip>
        </Grid>

        <Grid item xs={12}>
          <OfferingSelect></OfferingSelect>
        </Grid>

        <Grid item xs={12}>
          <SelectListClients options={["Mercado Libre", "Pedidos ya"]}></SelectListClients>
        </Grid>

        <Grid item xs={12}>
          <MultipleSelect></MultipleSelect>
        </Grid>

        <Grid item xs={12}>
          <FormInfoInput
            customStyleClass={"form-margin"}
            label={'Date'}
            customInput={
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker variant="standard" />
              </LocalizationProvider>
            }
          ></FormInfoInput>
        </Grid>

        <Grid item xs={12}>
          <FormInfoInput
            customStyleClass={"form-margin"}
            label={'Project contact'}
            customInput={
              <FormControl variant="standard">
                <Input
                  id="input-with-icon-adornment"
                  startAdornment={
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  }
                />
              </FormControl>
            }
          ></FormInfoInput>
        </Grid>

        <Grid item xs={12}>
          <FormInfoInput
            customStyleClass={"form-margin"}
            label={'Avg. Team size *'}
            width={300}
            customInput={<TextField inputProps={{ type: 'number' }} />}
          ></FormInfoInput>
        </Grid>

        <Grid item xs={12}>
          <Button
            variant="contained"
            size="large"
            sx={{
              height: "2.5rem",
              marginTop: { xs: "1rem", md: "4rem" },
              marginLeft: "35rem",
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

export default CreateSuccessCaseScreen;
