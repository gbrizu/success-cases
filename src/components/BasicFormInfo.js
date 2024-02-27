import { Grid, Typography } from "@mui/material";

function FormInfoInput({ label, customInput, customStyleClass }) {

  return (
    <>
      <div className={`${customStyleClass}`}>
        <Grid container  wrap="nowrap">
          <Grid item xl={2}>
            <Typography variant="h6" marginTop={'1rem'} gutterBottom>
              {label}
            </Typography>
          </Grid>
          <Grid item>
            {customInput}
          </Grid>
        </Grid>
      </div>
    </>
  )
}


export default FormInfoInput;