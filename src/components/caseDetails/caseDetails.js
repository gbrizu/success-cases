import { Grid, Button, Box, Container } from "@mui/material";
import "../../App.css";
import { Widgets } from "@mui/icons-material";

export default function CaseDetails({ client, backButton, nextButton }) {
  function backButton() {
    alert("This should go to cases list");
  }

  function nextButton() {
    alert("This should go to case description");
  }

  return (
    <div style={{width:"25rem", border:"solid", padding:"15px"}}>
        <div>
          <h1>Success Case Details</h1>
        </div>
        <Box>
          <Grid container rowSpacing={1.5} columnSpacing={3}>
            <Grid item xs={6}>
              <item>
                <div className="labelDetails">Client</div>
              </item>
            </Grid>
            <Grid item xs={6}>
              <item>
                <div className="valueDetails">{client.name}</div>
              </item>
            </Grid>

            <Grid item xs={6}>
              <item>
                <div className="labelDetails">Industry</div>
              </item>
            </Grid>
            <Grid item xs={6}>
              <item>
                <div className="valueDetails">{client.industry}</div>
              </item>
            </Grid>

            <Grid item xs={6}>
              <item>
                <div className="labelDetails">Project type</div>
              </item>
            </Grid>
            <Grid item xs={6}>
              <item>
                <div className="valueDetails">{client.projectType}</div>
              </item>
            </Grid>

            <Grid item xs={6}>
              <item>
                <div className="labelDetails">Offering</div>
              </item>
            </Grid>
            <Grid item xs={6}>
              <item>
                <div className="valueDetails">{client.offering}</div>
              </item>
            </Grid>

            <Grid item xs={6}>
              <item>
                <div className="labelDetails">Date</div>
              </item>
            </Grid>
            <Grid item xs={6}>
              <item>
                <div className="valueDetails">{client.dateRange}</div>
              </item>
            </Grid>

            <Grid item xs={6}>
              <item>
                <div className="labelDetails">Project contact</div>
              </item>
            </Grid>
            <Grid item xs={6}>
              <item>
                <div className="valueDetails">{client.mail}</div>
              </item>
            </Grid>

            <Grid item xs={6}>
              <item>
                <div className="labelDetails">Avg. team size</div>
              </item>
            </Grid>
            <Grid item xs={6}>
              <item>
                <div className="valueDetails">{client.teamSize}</div>
              </item>
            </Grid>
          </Grid>
        </Box>

        <div>
          <Button
            variant="contained"
            onClick={backButton}
            style={{ marginRight: "100px" }}
          >
            Back
          </Button>
          <Button
            variant="contained"
            onClick={nextButton}
            style={{ marginLeft: "100px" }}
          >
            Next
          </Button>
        </div>
      
    </div>
  );
}

