import { Grid, Typography } from "@mui/material";

function FormInfoInput({ label, customInput, marginRight }) {

  return (
    <>
      
      <div style={{ display: "flex", alignItems: "center",marginBottom:'10px' }}>
      <Typography variant = "h6" style={{ marginRight: marginRight }}>  {label}</Typography> 
      {customInput}
    </div>
    </>
  )
}


export default FormInfoInput;