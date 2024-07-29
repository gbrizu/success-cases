import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import FormInfoInput from "../BasicFormInfo";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import Grid from "@mui/system/Unstable_Grid/Grid";
import SelectListClients from "../selectListClients/selectListClients";
import MultipleSelect from "../selectListIndustry";
import SelectListProjectType from "../selectListProjectType/selectListProjectType";
import { getClients, getIndustries, getProyectsTypes, getContacts, getSuccessCasesByFilter } from "../../services/successCaseServerCalls";
import { useContext, useState, useEffect } from 'react';
import { CaseViewContextProvider } from '../../context/casesView.context';
import SearchButton from '../button/searchButton';
import { Box, MenuItem, OutlinedInput, Select, FormControl, InputLabel, Typography } from "@mui/material";
import CreateButton from '../button/createButton';
import { siLK } from '@mui/material/locale';
function FilterMainScreen() {
    const { setSuccessCasesList } = useContext(CaseViewContextProvider);
    const [clients, setClients] = useState([]);
    const [clientSelected, setClientSelected] = useState(null);
    const [type, setProjectType] = useState([]);
    const [typeSelected, setTypeSelected] = useState(null);
    const [industries, setIndustries] = useState([]);
    const [industrySelected, setIndustrySelected] = useState(null);
    const [contact, setContact] = useState([]);
    const [contactSelected, setContactSelected] = useState(null);
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
    }, [dateTo]);
    useEffect(() => {
        if (dateTo < dateFrom && dateFrom !== null) {
            alert("El valor Seleccionado es mayor a la fecha final");
            setDateFrom(null);
        }
    }, [dateFrom]);
    useEffect(() => {
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
    }, []);
    return (
        <div>
            <Grid
                container
                spacing={1}
                sx={{ width: "inherit", position: "relative", marginLeft: "10rem" }}
            >
                <Grid item xs={6} md={3.5}>
                    {(clients.length > 0) && (
                        <SelectListClients options={clients} value={clientSelected} onChange={setClientSelected}>
                        </SelectListClients>
                    )}
                </Grid>
                <Grid item xs={6} md={3.5} style={{ whiteSpace: 'nowrap', display: 'flex', alignItems: 'center' }}>
                    <FormInfoInput
                        marginRight={'2.3rem'}
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
                    />
                </Grid>
                <Grid item xs={6} md={3.5} style={{ whiteSpace: 'nowrap', display: 'flex', alignItems: 'center' }}>
                    <SelectListProjectType options={type} value={typeSelected} onChange={setTypeSelected}>
                    </SelectListProjectType>
                </Grid>
                <Grid item xs={6} md={3.5}>
                    <MultipleSelect options={industries} value={industrySelected} onChange={setIndustrySelected}>
                    </MultipleSelect>
                </Grid>
                <Grid item xs={6} md={3.5} style={{ whiteSpace: 'nowrap', display: 'flex', alignItems: 'center' }}>
                    <FormInfoInput
                        marginRight={'3.8rem'}
                        label={'Date to'}
                        width={'18.5rem'}
                        customInput={
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    label="To"
                                    value={dateTo}
                                    onChange={(newValue) => setDateTo(newValue)}
                                />
                            </LocalizationProvider>
                        }
                    />
                </Grid>
                <Grid item xs={6} md={3.5} style={{ whiteSpace: 'nowrap', display: 'flex', alignItems: 'center' }}>
                    <FormInfoInput
                        id="projectContactsAutoComplete"
                        marginRight={'1rem'}
                        style={{ display: 'box' }}
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
                                    {contact.map((item) => (
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
                    />
                </Grid>
                <Grid item xs={12} display="flex" justifyContent="center" marginBottom="1rem" marginTop="-2.8rem" marginRight={"5rem"}>
                    <Box>
                        <SearchButton handleClick={handleSearch} />
                    </Box>
                    <Box sx={{ ml: 6 }}>
                        <CreateButton />
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
}
export default FilterMainScreen;
