import { Autocomplete, TextField, InputAdornment } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import FormInfoInput from "../BasicFormInfo";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import Grid from "@mui/system/Unstable_Grid/Grid";
import SelectListClients from "../selectListClients/selectListClients";
import MultipleSelect from "../selectListIndustry";
import SelectListProjectType from "../selectListProjectType/selectListProjectType";
import { margin } from '@mui/system';
import { getClients, getIndustries, getProyectsTypes, getContacts } from "../../services/successCaseServerCalls";
import { useState } from 'react';
import { useEffect } from 'react';
import { AccountCircle } from "@mui/icons-material";
import NextButton from '../button/nextButton';



function FilterMainScreen() {

    const [clients, setClients] = useState([]);

    const [type, setProjectType] = useState([]);

    const [industries, setIndustries] = useState([]);

    const [contact, setContact] = useState([]);

    const [dateFrom, setDateFrom] = useState()

    const [dateTo, setDateTo] = useState()

    useEffect(() => {
        if (dateTo < dateFrom && dateTo !== null) {
          alert("El valor Seleccionado es menor a la fecha inicial")
          setDateTo(null)
        }
    
      }, [dateTo])

      useEffect(() => {
        if (dateTo < dateFrom && dateFrom !== null) {
          alert("El valor Seleccionado es mayor a la fecha final")
          setDateFrom(null)
        }
    
      }, [dateFrom])

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
    }, [])

    return (
        <div>
            <Grid containerInput
                sx={{ width: "inherit", position: "relative" }}>
                <Grid item xs={12}>
                    {(clients.length > 0) && (<SelectListClients options={clients}></SelectListClients>)}
                </Grid>

                <Grid item xs={12}>
                    <MultipleSelect options={industries}></MultipleSelect>
                </Grid>

                <Grid item xs={12}>
                    <SelectListProjectType options={type}></SelectListProjectType>
                </Grid>

                <Grid item xs={12}>

                </Grid>


                <Grid item xs={12}>
                    <FormInfoInput
                        marginRight={'4rem'}
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
                <Grid item xs={12}>
                    <FormInfoInput
                        marginRight={'5.5rem'}
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

                <Grid item xs={12}>
                    <FormInfoInput
                        marginRight={'1.2rem'}
                        customStyleClass={"form-margin"}
                        label={"Project contact"}
                        customInput={
                            <Autocomplete
                                disablePortal
                                id="projectContactsAutoComplete"
                                options={contact.map((option) => option.name)}
                                sx={{ width: "18.5rem" }}
                                renderInput={(params) => <TextField {...params} label="Project contact" />}
                            // renderInput={(params) => (
                            //     <TextField
                            //         {...params}
                            //         label="Project contact"
                            //         InputProps={{
                            //             startAdornment: (
                            //                 <InputAdornment position="start">
                            //                     <AccountCircle />
                            //                 </InputAdornment>
                            //             ),
                            //         }}
                            //     />
                            // )}
                            />
                        }
                    ></FormInfoInput>


                </Grid>


            </Grid>


        </div>
    );
}
export default FilterMainScreen