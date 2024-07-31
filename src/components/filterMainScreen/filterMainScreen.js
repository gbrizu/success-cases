import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import FormInfoInput from "../BasicFormInfo";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import Grid from "@mui/system/Unstable_Grid/Grid";
import MultipleSelect from "../selectListIndustry";
import { getClients, getIndustries, getProyectsTypes, getContacts, getSuccessCasesByFilter } from "../../services/successCaseServerCalls";
import { useContext, useState, useEffect } from 'react';
import { CaseViewContextProvider } from '../../context/casesView.context';
import SearchButton from '../button/searchButton';
import { Box, MenuItem, OutlinedInput, Select, FormControl, InputLabel, Typography } from "@mui/material";
import CreateButton from '../button/createButton';
import { siLK } from '@mui/material/locale';
import SelectListGeneric from '../selectList/SelectListGeneric';

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
        setClients([
            { id: 1, name: "Cliente 1" },
            { id: 2, name: "Cliente 2" },
            { id: 3, name: "Cliente 3" }
        ]);
        setProjectType([
            { id: 1, name: "Proyecto 1" },
            { id: 2, name: "Proyecto 2" },
            { id: 3, name: "Proyecto 3" }
        ]);
        setIndustries([
            { id: 1, name: "Industria 1" },
            { id: 2, name: "Industria 2" },
            { id: 3, name: "Industria 3" }
        ]);
        setContact([
            { id: 1, name: "Enzo", surName: "Aparicio" },
            { id: 2, name: "Gustavo", surName: "Gonzalez" },
            { id: 3, name: "Yazmin", surName: "Espagnolo" }
        ]);
    }, [])
    return (
        <div>
            <Grid
                container
                spacing={1}
                sx={{ width: "inherit", position: "relative", marginLeft: "10rem" }}
            >
                <Grid item xs={6} md={3.5}>
                    {(clients.length > 0) && (
                        <SelectListGeneric options={clients} value={clientSelected} onChange={setClientSelected} label= "Client" />
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
                                sx={{
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
                                    value={dateFrom}
                                    onChange={(newValue) => setDateFrom(newValue)}
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
                    />
                </Grid>

                <Grid item xs={6} md={3.5} style={{ whiteSpace: 'nowrap', display: 'flex', alignItems: 'center' }}>
                    <SelectListGeneric options={type} value={typeSelected} onChange={setTypeSelected} label= "Project Type" />
                </Grid>

                <Grid item xs={6} md={3.5}>
                    <SelectListGeneric options={industries} value={industrySelected} onChange={setIndustrySelected} label= "Industry"/>
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
                    />
                </Grid>

                <Grid item xs={6} md={3.5} style={{ whiteSpace: 'nowrap', display: 'flex', alignItems: 'center' }}>
                    <FormInfoInput
                        id="projectContactsAutoComplete"
                        marginRight={'1rem'}
                        style={{ display: 'box' }}
                        label={"Project contact"}
                        customInput={
                            <FormControl 
                                sx={{ m: 1, 
                                    width: 300, 
                                    '& .MuiOutlinedInput-root': {
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#BFD52E',
                                    },
                                    },}}>
                                <InputLabel 
                                id="demo-multiple-name-label"
                                    sx={{ 
                                    '&.Mui-focused': { 
                                        color: '#6A8B06' 
                                    }
                                    }}
                                >
                                Name
                                </InputLabel>
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








