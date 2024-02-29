import * as React from 'react';
import CaseInfoImage from "../caseInfoImage/caseInfoImage";
import FixedContainer from '../containerCaseInfoDescription/caseInfoDescription';
import { Grid } from '@mui/material';

export default function CaseInfo() {
    const arrayimages = [
        "https://htb.com/wp-content/uploads/2022/02/Card-Details-400x800-1.png",
        "https://htb.com/wp-content/uploads/2022/02/Controls-and-Alerts-400x800-1.png"
    ];

    return (
        <div style={{ margin: '3px', border: '4px solid black' }}>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <FixedContainer />
                </Grid>
                <Grid item xs={6} >
                    <CaseInfoImage images={arrayimages} />
                </Grid>
            </Grid>
        </div>
    );
}
