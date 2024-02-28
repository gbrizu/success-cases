import Grid from "@mui/system/Unstable_Grid/Grid";
import SelectListClients from "../selectListClients/selectListClients";
import MultipleSelect from "../selectListIndustry";
import SelectListProjectType from "../selectListProjectType/selectListProjectType";
import "./filterMainScreen.css"

function FilterMainScreen() {

    const clientsOptions = [
        "one", "two", "three"
    ]

    return (
        <Grid container spacing={2}>
            {/* <div className="wrapper"> */}
            <Grid item xs={8}>
                <SelectListClients options={clientsOptions}></SelectListClients>
            </Grid>

            <Grid item xs={8}>
                <MultipleSelect></MultipleSelect>
            </Grid>

            <Grid item xs={8}>
                <SelectListProjectType></SelectListProjectType>
            </Grid>

            <Grid item xs={8}>
                <p>Date</p>
            </Grid>

            <Grid item xs={8}>
                <p>Project contact *</p>
            </Grid>

            {/* </div> */}
        </Grid>
    );
}
export default FilterMainScreen