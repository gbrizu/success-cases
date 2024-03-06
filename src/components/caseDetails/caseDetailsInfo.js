import { Grid, Button } from "@mui/material";

export default function CaseDetailsInfo({ label, info }) {
  function backButton() {
    alert("This should go to cases list");
  }

  function nextButton() {
    alert("This should go to case description");
  }

  return (
    <div style={{fontSize: "1.5rem"}}>
      <Grid container spacing={0} style={{display:"flex", justifyContent:"center"}} >
        <Grid item xs={5}  >
          <item>
            <div className="labelDetails">{label}</div>
          </item>
        </Grid>
        <Grid item xs={5}>
          <item>
            <div style={{overflowWrap:"break-word"}} className="valueDetails">{info}</div>
          </item>
        </Grid>
      </Grid>
    </div>
  );
}
