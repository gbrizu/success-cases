import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import FormInfoInput from "../BasicFormInfo";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import Grid from "@mui/system/Unstable_Grid/Grid";
import SelectListClients from "../selectListClients/selectListClients";
import SelectListIndustry from "../selectListIndustry";
import SelectListProjectType from "../selectListProjectType/selectListProjectType";


import { getClients, getIndustries, getProyectsTypes, getContacts, getSuccessCasesByFilter} from "../../services/successCaseServerCalls";
import { useContext, useState, useEffect } from 'react';


import { CaseViewContextProvider } from '../../context/casesView.context';
import SearchButton from '../button/searchButton';
import { Box, MenuItem, OutlinedInput, Select, FormControl, InputLabel, Typography } from "@mui/material";
import CreateButton from '../button/createButton';
import { useAuth0 } from '@auth0/auth0-react';

import { siLK } from '@mui/material/locale';

function FilterMainScreen() {
    const { setSuccessCasesList } = useContext(
        CaseViewContextProvider
    );

    const [clients, setClients] = useState(undefined);
    
    const [clientSelected, setClientSelected] = useState(undefined);

    const [type, setProjectType] = useState(undefined);

    const [typeSelected, setTypeSelected] = useState(undefined);

    const [industries, setIndustries] = useState(undefined);

    const [industrySelected, setIndustrySelected] = useState(undefined);

    const [contact, setContact] = useState(undefined);

    const [contactSelected, setContactSelected] = useState(undefined);

    const [dateFrom, setDateFrom] = useState();
    const [dateTo, setDateTo] = useState();

    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;

    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    };

    const handleSearch = async () => {
            let successCasesFiltered = await getSuccessCasesByFilter({
                startdate: dateFrom,
                finishdate: dateTo,
                industryid: industrySelected,
                clientid: clientSelected,
                projecttypeid: typeSelected,
                contactid: contactSelected
            });
            setSuccessCasesList(successCasesFiltered);
        } 

    useEffect(() => {
        if (dateTo < dateFrom && dateTo !== null) {
            alert("El valor Seleccionado es menor a la fecha inicial");
            setDateTo(null);
        }

    }, [dateTo])

    const [token, setToken] = useState(null);

    const { getAccessTokenSilently, isAuthenticated } = useAuth0();

    useEffect(() => {
        if (dateTo < dateFrom && dateFrom !== null) {
           alert("El valor Seleccionado es mayor a la fecha final");
            setDateFrom(null);
        }
    }, [dateFrom]);

    useEffect(() => {
        if(localStorage.getItem('accessToken')){
            getClients().then((result) => {
                setClients(result);
            });
            getProyectsTypes().then((result) => {
                setProjectType(result);
            });
            getIndustries().then((result) => {
                setIndustries(result);
            });
            getContacts().then((result) => {
                setContact(result);
            });
           
        } else {
            setClients(undefined);
            setProjectType(undefined);
            setIndustries(undefined);
            setContact(undefined);
            if (isAuthenticated) {
                setToken(getAccessTokenSilently());
            }
        }
    }, [isAuthenticated, token]);

    return (
        <div>
            <Grid
                container
                spacing={1}
                sx={{ width: "inherit", position: "relative", marginLeft: "10rem" }}
            >
                <Grid
                    container
                    xs={12}
                    md={6}
                    xl={4}
                    sx={{
                        width: "inherit", position: "relative"
                    }}
                >
                    
                    <Grid item xs={12} >
                        <SelectListClients options={clients} value={clientSelected} onChange={setClientSelected}> </SelectListClients>
                    </Grid>

                    <Grid item xs={12} >
                        <SelectListIndustry options={industries} value={industrySelected} onChange={setIndustrySelected}> </SelectListIndustry>
                    </Grid>

                    <Grid item xs={12} >
                        <SelectListProjectType options={type} value={typeSelected} onChange={setTypeSelected}> </SelectListProjectType>
                    </Grid>

                    <Grid item xs={12} >
                        <FormInfoInput
                            marginRight={'4.3rem'}
                            customStyleClass={"form-margin"}
                            label={"Date from"}
                            width={"18.5rem"}
                            customInput={
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker
                                        label="From"
                                        value={dateFrom}
                                        onChange={(newValue) => setDateFrom(newValue)}
                                    />

                                </LocalizationProvider>
                            }
                        ></FormInfoInput>
                    </Grid>

                    <Grid item xs={12} >
                        <FormInfoInput
                            marginRight={'5.8rem'}
                            customStyleClass={"form-margin"}
                            label={"Date to"}
                            width={"18.5rem"}
                            customInput={
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker
                                        label="To"
                                        value={dateTo}
                                        onChange={(newValue) => setDateTo(newValue)}
                                    />
                                </LocalizationProvider>
                            }
                        ></FormInfoInput>
                    </Grid>

                    <Grid item xs={12} >
                        <FormInfoInput
                            id="projectContactsAutoComplete"
                            marginRight={'1rem'}
                            customStyleClass={"form-margin"}
                            label={"Project contact"}
                            customInput={
                                <FormControl sx={{ m: 1, width: 300 }}>
                                    <InputLabel id="demo-multiple-name-label">Name</InputLabel>
                                    <Select
                                        labelId="projectContactsAutoComplete-label"
                                        id="Name"
                                        value={contactSelected}
                                        onChange={(newValue) => {
                                            setContactSelected(newValue.target.value);
                                        }}
                                        input={<OutlinedInput label="Name" />}
                                        MenuProps={MenuProps}
                                    >
                                        {(contact?.length > 0) && (contact?.map((item) => (
                                            <MenuItem
                                                key={item.id}
                                                value={item.id}
                                            >
                                                {item.name + " " + item.surName}
                                            </MenuItem>
                                        )))}
                                    </Select>
                                </FormControl>
                            }
                        ></FormInfoInput>
                    </Grid>
                </Grid>

                <Grid container
                    alignItems={'center'}
                    marginBottom={'1rem'}
                    xs={12} md={3} xl={4}>
                    <Box>
                        <SearchButton handleClick={handleSearch} />
                    </Box>
                </Grid>

                <Grid container
                    alignItems={'center'}
                    marginBottom={'1rem'}
                    xs={12} md={3} xl={4}>
                    <Box>
                        <CreateButton />
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
}
export default FilterMainScreen;








