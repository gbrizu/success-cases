import { Autocomplete, TextField } from '@mui/material';
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

function FilterMainScreen() {

    const [clients, setClients] = useState([]);

    const [type, setProjectType] = useState([]);

    const [industries, setIndustries] = useState([]);

    const [contact, setContact] = useState([]);
    

    useEffect ( () => {
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
    },[])

    return (
        <div>
            <Grid container spacing={2} margin={1}>
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
                        label={'Project contact *'}
                        width={300}
                        customInput={
                            <Autocomplete
                                disablePortal
                                id="projectContactsAutoComplete"
                                options={contact.map((option) => option.name)}
                                sx={300}
                                renderInput={(params) => <TextField {...params} label="Project contact" />}
                            />
                        }
                    ></FormInfoInput>
                </Grid> 

            </Grid>

        </div>
    );
}
export default FilterMainScreen