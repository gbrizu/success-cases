import * as React from 'react';
import FixedContainer from '../containerCaseInfoDescription/caseInfoDescription';
import { Grid } from '@mui/material';
import { useContext } from "react";
import { CaseViewContextProvider } from '../../context/casesView.context';
import CaseDetailsButtons from '../caseDetails/caseDeatailsButtons';
import CaseInfoImage from '../caseInfoImage/caseInfoImage';

export default function CaseInfo({ title, description, image, prevPage, nextPage }) {
    const { navigate } = useContext(
        CaseViewContextProvider
    );

    const arrayimages = [
        "https://htb.com/wp-content/uploads/2022/02/Card-Details-400x800-1.png",
        "https://htb.com/wp-content/uploads/2022/02/Controls-and-Alerts-400x800-1.png",
        "https://htb.com/wp-content/uploads/2022/02/Controls-and-Alerts-400x800-1.png",
    ];

    return (
        <div style={{ border: 'none', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <div style={{ margin: '1rem' }}>
                        <FixedContainer title={title} textTest={description} />
                    </div>
                </Grid>
                <Grid item xs={12} md={6}>
                    <div style={{ height: '50%', marginTop: '25%' }}>
                        <div style={{ height: '50%' }}>
                            <CaseInfoImage images={[image]}></CaseInfoImage>
                        </div>
                    </div>
                </Grid>
            </Grid>
            <CaseDetailsButtons prevPage={prevPage} nextPage={nextPage}></CaseDetailsButtons>
        </div>
    );
}
