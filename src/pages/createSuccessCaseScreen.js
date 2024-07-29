import React, { useContext, useEffect, useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  Switch,
  TextField,
  Tooltip,
  Typography,
  Tabs,
  Tab,
  Select,
  OutlinedInput,
  MenuItem,
} from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { ProcessContextProvider } from "../context/process.context";
import { getContacts, getClients, getOfferings, getIndustries, getProyectsTypes } from "../services/successCaseServerCalls";
import CaseInfoEdition from "../components/caseInfoEdition/caseInfoEdition";
import AddImage from "../components/addButton/addImage";
import NavbarScreen from "../components/editionpage/NavbarScreen";
import { getContacts } from "../services/successCaseServerCalls";
import {
  getClients,
  getOfferings,
  getIndustries,
  getProyectsTypes,
} from "../services/successCaseServerCalls";
import GeneratePDF from "../components/pdf/generatePDF";

const initialPage = { text: "", image: "" };

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const CreateSuccessCaseScreen = () => {
  const { navigate, setSuccessCase } = useContext(ProcessContextProvider);
  const [value, setValue] = useState(0);
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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    getOfferings().then(setOfferings);
    getClients().then(setClients);
    getIndustries().then(setIndustry);
    getProyectsTypes().then(setProjectType);
    getContacts().then(setContacts);
  }, []);

  useEffect(() => {
    if (finishDateValue < startDateValue) {
      alert("El valor Seleccionado es menor a la fecha inicial");
      setFinishDateValue(null);
    }
  }, [startDateValue, finishDateValue]);

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
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Title"
              value={projectTitleValue}
              onChange={(e) => setProjectTitleValue(e.target.value)}
            />
            <Grid item xs={12}>
              <FormControlLabel
                value="top"
                control={
                  <Switch
                    color="primary"
                    checked={isPublic}
                    onChange={(e) => setIsPublic(e.target.checked)}
                  />
                }
                label="Make Public"
                labelPlacement="top"
                sx={{
                  marginLeft: "48rem ",
                  marginRight: "auto",
                  marginTop: "2rem",
                }}
              />
              <Tooltip title={<h1 style={{ color: "black" }}>If the Make Public option is turned on, any person will be able to see the Client field. If it is OFF, then the Client field will only be displayed to the Success Case creator</h1>}>
                <IconButton sx={{ marginTop: "3.4rem" }}>
                  <HelpOutlineIcon />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <FormControl variant="outlined" sx={{ width: '100%' }}>
              <Select value={selectedOffering} onChange={(e) => setSelectedOffering(e.target.value)} input={<OutlinedInput label="Offering" />}>
                {offerings.map((item) => (
                  <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl variant="outlined" sx={{ width: '100%' }}>
              <Select value={selectedClient} onChange={(e) => setSelectedClient(e.target.value)} input={<OutlinedInput label="Client" />}>
                {clients.map((item) => (
                  <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl variant="outlined" sx={{ width: '100%' }}>
              <Select value={selectedIndustry} onChange={(e) => setSelectedIndustry(e.target.value)} input={<OutlinedInput label="Industry" />}>
                {industry.map((item) => (
                  <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl variant="outlined" sx={{ width: '100%' }}>
              <Select value={selectedProjectType} onChange={(e) => setSelectedProjectType(e.target.value)} input={<OutlinedInput label="Project Type" />}>
                {projectType.map((item) => (
                  <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormInfoInput
              marginRight={"6.9rem"}
              customStyleClass={"form-margin"}
              label={"Date"}
              customInput={
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    sx={{
                      m: 1,
                      width: 300,
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
                    label="From"
                    value={startDateValue}
                    onChange={(newValue) => {
                      setStartDateValue(newValue.$d)
                    }}
                    sx={{
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
                    sx={{
                      m: 1,
                      width: 300,
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
                    label="To"
                    value={finishDateValue}
                    onChange={(newValue) => setFinishDateValue(newValue.$d)}
                    sx={{
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

          <Grid item xs={12}>
            <FormInfoInput
              marginRight={"1.4rem"}
              customStyleClass={"form-margin"}
              label={"Project contact"}
              id={"projectContact"}
              customInput={
                <FormControl variant="standard"
                  sx={{
                    m: 1,
                    width: 300,
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
                    {contacts.map((item) => (
                      <MenuItem
                        key={item.id}
                        value={item.id}
                      >
                        {item.name + " " + item.surName}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              }
            ></FormInfoInput>
          </Grid>

          <Grid item xs={12}>
            <FormInfoInput
              marginRight={"0.3rem"}
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

        <Grid item xs={12}>
          <Box sx={{ width: '100%' }}>
            <AppBar position="static">
              <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                <Tab label="Success Case" />
                <Tab label="Challenges" />
                <Tab label="Improvements" />
                <Tab label="Technologies" />
              </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>

            </TabPanel>
            <TabPanel value={value} index={1}>
              <CaseInfoEdition label="Challenges" />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <CaseInfoEdition label="Improvements" />
            </TabPanel>
            <TabPanel value={value} index={3}>
              <CaseInfoEdition label="Technologies" />
            </TabPanel>
          </Box>
        </Grid>
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
          <Button
            variant="contained"
            onClick={submitHandler}
            sx={{
              width: "10rem",
              height: "3rem",
              borderRadius: "1.5rem",
              bgcolor: "#ff642f",
              color: "white",
              fontWeight: "bold",
              fontSize: "1rem",
              textTransform: "none",
            }}
          >
            Save
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CreateSuccessCaseScreen;
