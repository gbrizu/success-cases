import * as React from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FixedContainer from '../containerCaseInfoDescription/caseInfoDescription';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import { useContext } from "react";
import { CaseViewContextProvider } from '../../context/casesView.context';
import CaseInfoImagesCarousel from '../caseInfoImage/caseInfoImagesCarousel';
import CaseDetailsButtons from '../caseDetails/caseDeatailsButtons';

export default function CaseInfo({ title, description, images, prevPage, nextPage }) {
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
                        </div>
                    </div>
                </Grid>
            </Grid>
            <CaseDetailsButtons prevPage={prevPage} nextPage={nextPage}></CaseDetailsButtons>
        </div>
    );
}
