import React, { useContext } from "react";
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
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import OfferingSelect from "../components/selectListOfferings/selectListOfferings";
import SelectListClients from "../components/selectListClients/selectListClients";
import MultipleSelect from "../components/selectListIndustry";
import FormInfoInput from "../components/BasicFormInfo";
import { ProcessContextProvider } from "../context/process.context";

function CreateSuccessCaseScreen() {
  const { nextStep, setSuccessCase } = useContext(ProcessContextProvider);

  const submitHandler = () => {
    setSuccessCase({
      offering: "Mobile",
      client: "Mercado Libre",
      industry: ["Entertainment", "Healthcare"],
      date: "2022-12-12",
      projectContact: "Juan Perez",
      avgTeamSize: 5,
    })
    nextStep();
  }

  return (
    <Container maxWidth="lg" sx={{ bgcolor: "white", minHeight: "100vh" }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              marginLeft: "24rem ",
              marginRight: "auto",
              marginTop: "3rem",
            }}
          >
            New Success Case
          </Typography>
        </Grid>

        <div>
          <FormControlLabel
            value="top"
            control={<Switch color="primary" />}
            label="Make Public"
            labelPlacement="top"
            sx={{
              marginLeft: "48rem ",
              marginRight: "auto",
              marginTop: "2rem",
            }}
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
            <IconButton sx={{ marginTop: "3.4rem" }}>
              <HelpOutlineIcon />
            </IconButton>
          </Tooltip>
        </div>
        <Grid
          containerInput
          sx={{ width: "inherit", marginLeft: "25rem", position: "relative" }}
        >
          <Grid item xs={12}>
            <OfferingSelect
              options={["Mobile", "Web", "Integration", "Development"]}
            ></OfferingSelect>
          </Grid>

          <Grid item xs={12}>
            <SelectListClients
              options={["Mercado Libre", "Pedidos ya"]}
            ></SelectListClients>
          </Grid>

          <Grid item xs={12}>
            <MultipleSelect
              options={["Entertainment", "Healthcare", "Banking", "Education"]}
            ></MultipleSelect>
          </Grid>

          <Grid item xs={12}>
            <FormInfoInput
              marginRight={'6.9rem'}
              customStyleClass={"form-margin"}
              label={"Date"}
              customInput={
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker variant="standard" />
                </LocalizationProvider>
              }
            ></FormInfoInput>
          </Grid>

          <Grid item xs={12}>
            <FormInfoInput
              marginRight={'1.4rem'}
              customStyleClass={"form-margin"}
              label={"Project contact"}
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
              marginRight={'0.3rem'}
              customStyleClass={"form-margin"}
              label={"Avg. Team size *"}
              width={300}
              customInput={<TextField inputProps={{ type: "number" }} />}
            ></FormInfoInput>
          </Grid>
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
              marginBottom: "200px",
            }}
            onClick={submitHandler}
          >
            Create
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default CreateSuccessCaseScreen;
