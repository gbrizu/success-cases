import Grid from "@mui/system/Unstable_Grid/Grid";
import SelectListClients from "../selectListClients/selectListClients";
import MultipleSelect from "../selectListIndustry/selectListIndustry";
import SelectListProjectType from "../selectListProjectType/selectListProjectType";
// import "./filterMainScreen.css"

function FilterMainScreen() {

    const clientsOptions = [
        "one", "two", "three"
    ]

    return (
        <div>
            <Grid container spacing={2} className="wrapperGrid" margin={0.5}>

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
                    <p>Date</p>
                </Grid>

                <Grid item xs={12}>
                    <p>Project contact *</p>
                </Grid>

            </Grid>

            <div className="wrapperDiv">
                <SelectListClients options={clientsOptions}></SelectListClients>
                <MultipleSelect></MultipleSelect>
                <SelectListProjectType></SelectListProjectType>
                <p>Date</p>
                <p>Project contact *</p>
            </div>
        </div>
    );
}
export default FilterMainScreen