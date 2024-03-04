import * as React from 'react';
import CaseInfoImage from "../caseInfoImage/caseInfoImage";
import FixedContainer from '../containerCaseInfoDescription/caseInfoDescription';
import { Grid } from '@mui/material';
import Button from 'react';

export default function CaseInfo({nextButton}) {
    const arrayimages = [
        "https://htb.com/wp-content/uploads/2022/02/Card-Details-400x800-1.png",
        "https://htb.com/wp-content/uploads/2022/02/Controls-and-Alerts-400x800-1.png",
        "https://htb.com/wp-content/uploads/2022/02/Controls-and-Alerts-400x800-1.png",
    ];

    return (
        <div style={{ margin: '3px', border: '4px solid black' }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <FixedContainer />
                </Grid>
                <Grid item xs={12} md={6}>
                    <CaseInfoImage images={arrayimages} />
                </Grid>
            </Grid>
            <Button variant="contained" onClick={nextButton} style={{marginLeft: "100px"}}>Next</Button>
        </div>
    );
}
