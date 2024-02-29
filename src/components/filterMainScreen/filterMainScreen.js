import { Autocomplete, TextField } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import FormInfoInput from "../BasicFormInfo";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import Grid from "@mui/system/Unstable_Grid/Grid";
import SelectListClients from "../selectListClients/selectListClients";
import MultipleSelect from "../selectListIndustry/selectListIndustry";
import SelectListProjectType from "../selectListProjectType/selectListProjectType";
import { margin } from '@mui/system';

function FilterMainScreen() {

    // Dummy data for selectListItems
    const clientsOptions = [
        "one", "two", "three"
    ]

    const projectContactOptions = [
        "pc1", "pc2", "abc"
    ]

    return (
        <div>
            <Grid container spacing={2} margin={1}>

                <Grid item xs={12}>
                    <SelectListClients options={clientsOptions}></SelectListClients>
                </Grid>

                <Grid item xs={12}>
                    <MultipleSelect></MultipleSelect>
                </Grid>

                <Grid item xs={12}>
                    <SelectListProjectType></SelectListProjectType>
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
                            id= "projectContactsAutoComplete"
                            options = {projectContactOptions}
                            sx={300}
                            renderInput={(params) => <TextField {...params} label="Project contact"/>}
                            />
                        }
                    ></FormInfoInput>
                </Grid>

            </Grid>

        </div>
    );
}
export default FilterMainScreen