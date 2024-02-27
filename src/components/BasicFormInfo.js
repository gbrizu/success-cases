import { Grid, Typography } from "@mui/material";

function FormInfoInput({ label, customInput, customStyleClass }) {

  return (
    <>
      <div className={`${customStyleClass}`}>
        <Grid container spacing={10}>
          <Grid item l={5} wrap="nowrap">
            <Typography variant="h6" gutterBottom>
              {label}
            </Typography>
          </Grid>
          <Grid item l={8}>
            {customInput}
          </Grid>
        </Grid>
      </div>
    </>
  )
}


export default FormInfoInput;