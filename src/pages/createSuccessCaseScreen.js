import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  Container,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  Autocomplete,
  Switch,
  TextField,
  Tooltip,
  Typography,
  Select,
  OutlinedInput,
  MenuItem,
} from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import OfferingSelectList from "../components/selectListSuccessCaseScreen/offeringSelectList";
import ClientSelectList from "../components/selectListSuccessCaseScreen/clientSelectList";
import IndustrySelectList from "../components/selectListSuccessCaseScreen/industrySelectList";
import ProjectTypeSelectList from "../components/selectListSuccessCaseScreen/projectTypeSelectList";
import FormInfoInput from "../components/BasicFormInfo";
import { ProcessContextProvider } from "../context/process.context";
import { getContacts } from "../services/successCaseServerCalls";
import BasicTabs from "../components/BasicTabs";
import {
  getClients,
  getOfferings,
  getIndustries,
  getProyectsTypes,
} from "../services/successCaseServerCalls";
import { useAuth0 } from "@auth0/auth0-react";

const initialPage = {
  text: "",
  image: "",
};

export default function CreateSuccessCaseScreen() {
  const { navigate, setSuccessCase } = useContext(ProcessContextProvider);
  const [projectTitleValue, setProjectTitleValue] = useState("");
  const [selectedOffering, setSelectedOffering] = useState("");
  const [selectedProjectType, setSelectedProjectType] = useState([]);
  const [selectedClient, setSelectedClient] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState([]);
  const [projectContactValue, setProjectContactValue] = useState("");
  const [avgTeamSizeValue, setAvgTeamSizeValue] = useState(0);
  const [isPublic, setIsPublic] = useState(false);
  const [startDateValue, setStartDateValue] = useState();
  const [finishDateValue, setFinishDateValue] = useState();
  const [contacts, setContacts] = useState([]);

  const [offerings, setOfferings] = useState([]);
  const [clients, setClients] = useState([]);
  const [industry, setIndustry] = useState([]);
  const [projectType, setProjectType] = useState([]);

  const submitHandler = () => {

    setSuccessCase({
      title: projectTitleValue,
      offeringId: selectedOffering,
      clientId: selectedClient,
      industryId: selectedIndustry,
      projectTypeId: selectedProjectType,
      startDate: startDateValue,
      finishDate: finishDateValue,
      contactId: projectContactValue,
      teamSize: parseInt(avgTeamSizeValue),
      isPublic: isPublic,
      successCase: [initialPage],
      challenge: [initialPage],
      improvements: [initialPage],
      technologie: [initialPage],
    });
    navigate("successCase");
  };

  const handleProjectTitleChange = (event) => {
    setProjectTitleValue(event.target.value);
  };

  const handleOfferingChange = (event) => {
    setSelectedOffering(event.target.value);
  };

  const handleClientChange = (event) => {
    setSelectedClient(event.target.value);
  };

  const handleIndustryChange = (event) => {
    setSelectedIndustry(event.target.value);
  };

  const handleProjectTypeChange = (event) => {
    setSelectedProjectType(event.target.value);
  };

  const handleAvgTeamSizeChange = (event) => {
    setAvgTeamSizeValue(event.target.value);
  };

  const handleIsPublicChange = (event) => {
    setIsPublic(event.target.checked);
  };

  /*   const getOfferingsInit = () => {
      getOfferings().then((response) => {
        setOfferings(response);
      });
    };
  
    const getClientsInit = () => {
      getClients().then((response) => {
        setClients(response);
      });
    };
  
    const getIndustryInit = () => {
      getIndustries().then((response) => {
        setIndustry(response);
      });
    };
  
    const getProjectTypeInit = () => {
      getProyectsTypes().then((response) => {
        setProjectType(response);
      });
    }; */

  //quiero hardcodear los datos

  useEffect(() => {
    setOfferings([
      { id: 1, name: "Offering 1" },
      { id: 2, name: "Offering 2" },
      { id: 3, name: "Offering 3" },
    ]);
    setClients([
      { id: 1, name: "Client 1" },
      { id: 2, name: "Client 2" },
      { id: 3, name: "Client 3" },
    ]);
    setIndustry([
      { id: 1, name: "Industry 1" },
      { id: 2, name: "Industry 2" },
      { id: 3, name: "Industry 3" },
    ]);
    setProjectType([
      { id: 1, name: "Project Type 1" },
      { id: 2, name: "Project Type 2" },
      { id: 3, name: "Project Type 3" },
    ]);
    setContacts([
      { id: 1, name: "Contact 1", surName: "Surname 1" },
      { id: 2, name: "Contact 2", surName: "Surname 2" },
      { id: 3, name: "Contact 3", surName: "Surname 3" },
    ]);
  }, [])

  /*   useEffect(() => {
        getOfferingsInit();
        getClientsInit();
        getIndustryInit();
        getProjectTypeInit();
      }, []);  */

  
  useEffect(() => {
    if (finishDateValue < startDateValue) {
      alert("El valor Seleccionado es menor a la fecha inicial");
      setFinishDateValue(null);
    }
  }, [startDateValue, finishDateValue]);

  const { getAccessTokenSilently, isAuthenticated } = useAuth0();

  const [token, setToken] = useState(null);
  
  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      getContacts().then((result) => setContacts(result));
    }
    else {
      setContacts(undefined);
      if (isAuthenticated) {
        setToken(getAccessTokenSilently());
      }
    }
  }, [isAuthenticated, token]);

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
              fontWeight: "bold",
              color: "#c42116",
            }}
          >
            New Success Case
          </Typography>
        </Grid>

        <Grid item xs={12} sx={{ marginBottom: '0.2rem' }}>
          <FormControlLabel
            value="top"
            control={
              <Switch
                color="primary"
                checked={isPublic}
                onChange={handleIsPublicChange}
              />
            }
            label="Make Public"
            labelPlacement="top"
            sx={{
              marginLeft: "30rem ",
              marginRight: "auto",
              marginTop: "2rem",
              '& .MuiSwitch-switchBase.Mui-checked': {
                color: '#BFD52E',
                '&:hover': {
                  backgroundColor: 'rgba(191, 213, 46, 0.1)',
                }
              },

              '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                backgroundColor: '#BFD52E'
              },

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
        </Grid>

        <Grid container spacing={25} >
          <Grid item xs={6}>
            <Grid container spacing={2} direction="column" sx={{ marginTop: '-5rem' }}>
              <Grid item xs={12} sx={{ marginBottom: '0.5rem' }}>
                <FormInfoInput
                  marginRight={"7.4rem"}
                  marginLeft={"-1rem"}
                  customStyleClass={"form-margin"}
                  label={"Title"}
                  customInput={
                    <TextField
                      inputProps={{ type: "text" }}
                      onChange={handleProjectTitleChange}
                      value={projectTitleValue}
                      sx={{
                        width: 300,
                        height: 50,
                        '& .MuiOutlinedInput-root': {
                          '&.Mui-focused fieldset': {
                            borderColor: '#BFD52E',
                          },
                        },
                      }}
                    />
                  }
                ></FormInfoInput>
              </Grid>

              <Grid item xs={12} sx={{ marginBottom: '0.01rem' }}>
                <OfferingSelectList
                  value={selectedOffering}
                  onChange={handleOfferingChange}
                  options={offerings}
                ></OfferingSelectList>
              </Grid>

              <Grid item xs={12} sx={{ marginBottom: '0.5rem' }}>
                <ClientSelectList
                  value={selectedClient}
                  onChange={handleClientChange}
                  options={clients}
                />
              </Grid>


              <Grid item xs={12} sx={{ marginBottom: '0.5rem' }}>
                <FormInfoInput
                  marginRight={"7rem"}
                  customStyleClass={"form-margin"}
                  label={"Date"}
                  customInput={
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        label="From"
                        value={startDateValue}
                        onChange={(newValue) => {
                          setStartDateValue(newValue.$d)
                        }}
                        sx={{
                          width: 150,
                          height: 50,
                          '& .MuiOutlinedInput-root': {
                            '&.Mui-focused fieldset': {
                              borderColor: '#BFD52E',
                            }
                          },
                          '& .MuiInputLabel-root.Mui-focused': {
                            color: '#6A8B06',
                          }
                        }}
                      />
                      <DatePicker
                        label="To"
                        value={finishDateValue}

                        onChange={(newValue) => setFinishDateValue(newValue.$d)}
                        sx={{
                          width: 150,
                          height: 50,
                          '& .MuiOutlinedInput-root': {
                            '&.Mui-focused fieldset': {
                              borderColor: '#BFD52E',
                            }
                          },
                          '& .MuiInputLabel-root.Mui-focused': {
                            color: '#6A8B06',
                          }
                        }}
                      />
                    </LocalizationProvider>
                  }
                ></FormInfoInput>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={6}>
            <Grid container spacing={1.6} direction="column" sx={{ marginTop: '-5.3rem' }}>


              <Grid item xs={12} sx={{ marginBottom: '0.2rem' }}>
                <ProjectTypeSelectList
                  value={selectedProjectType}
                  onChange={handleProjectTypeChange}
                  options={projectType}
                ></ProjectTypeSelectList>
              </Grid>

              <Grid item xs={12} sx={{ marginBottom: '0.2rem' }}>
                <IndustrySelectList
                  value={selectedIndustry}
                  onChange={handleIndustryChange}
                  options={industry}
                ></IndustrySelectList>
              </Grid>



              <Grid item xs={12} sx={{ marginBottom: '0.2rem' }}>
                <FormInfoInput
                  marginRight={"0.8rem"}
                  customStyleClass={"form-margin"}
                  label={"Project contact"}
                  id={"projectContact"}
                  customInput={
                    <FormControl variant="standard"
                      sx={{
                        m: 1,
                        width: 300,
                        height: 50,
                        border: '2px #BFD52E',
                        '& .Mui-focused': {
                          borderColor: '#BFD52E',
                        },
                        '& .MuiOutlinedInput-root': {
                          '&.Mui-focused fieldset': {
                            borderColor: '#BFD52E',
                          },
                        },
                      }}>
                      <Select
                        labelId="projectContactsAutoComplete-label"
                        id="projectContact"
                        value={projectContactValue}
                        onChange={(newValue) => {
                          setProjectContactValue(newValue.target.value);
                        }}
                        input={<OutlinedInput label="Name" />}
                      >
                        {/*                         {contacts.map((item) => (
                          <MenuItem
                            key={item.id}
                            value={item.id}
                          >
                            {item.name + " " + item.surName}
                          </MenuItem>
                        ))} */}
                      </Select>
                    </FormControl>
                  }
                ></FormInfoInput>
              </Grid>

              <Grid item xs={12} >
                <FormInfoInput
                  marginRight={"-0.2rem"}
                  customStyleClass={"form-margin"}
                  label={"Avg. Team size *"}
                  width={300}
                  customInput={
                    <TextField
                      inputProps={{ type: "number" }}
                      onChange={handleAvgTeamSizeChange}
                      value={avgTeamSizeValue}
                      sx={{
                        m: 1,
                        width: 300,
                        height: 50,
                        border: '2px #BFD52E',
                        '& .Mui-focused': {
                          borderColor: '#BFD52E',
                        },
                        '& .MuiOutlinedInput-root': {
                          '&.Mui-focused fieldset': {
                            borderColor: '#BFD52E',
                          },
                        },
                      }}
                    />
                  }
                ></FormInfoInput>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sx={{ marginTop: '2rem' }}>
          <BasicTabs />
        </Grid>

        <Grid item xs={12} style={{ display: 'flex' }}>
          <Button

            variant="contained"
            size="large"
            sx={{

              height: "4rem",
              width: "8rem",
              marginTop: "-17rem",
              marginLeft: "52.5rem",
              // marginRight: "0rem",
              marginBottom: "50px",
              background: '#BFD52E',
              '&:hover': {
                backgroundColor: '#6A8B06',
              }
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