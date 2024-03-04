import { Grid, Button } from "@mui/material";

export default function CaseDetailsInfo({ label, info }) {
  function backButton() {
    alert("This should go to cases list");
  }

  function nextButton() {
    alert("This should go to case description");
  }

  return (
    <>
      <Grid container>
        <Grid item xs={2}>
          <item>
            <div className="labelDetails">{label}</div>
          </item>
        </Grid>
        <Grid item>
          <item>
            <div className="valueDetails">{info}</div>
          </item>
        </Grid>
      </Grid>
    </>
  );
}
