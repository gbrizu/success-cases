import { Grid, Typography } from "@mui/material";

function FormInfoInput({ label, customInput, customStyleClass }) {

  return (
    <>
      <div className={`${customStyleClass}`}>
        <Grid container  wrap="nowrap">
          <Grid item xl={4}>
            <Typography variant="h6" marginTop={'1rem'} gutterBottom>
              {label}
            </Typography>
          </Grid>
          <Grid item xs={8}>
            {customInput}
          </Grid>
        </Grid>
      </div>
    </>
  )
}


export default FormInfoInput;