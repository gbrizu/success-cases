import * as React from 'react';
import FixedContainer from '../containerCaseInfoDescription/caseInfoDescription';
import { Grid } from '@mui/material';
import { useContext } from "react";
import { CaseViewContextProvider } from '../../context/casesView.context';
import CaseDetailsButtons from '../caseDetails/caseDeatailsButtons';
import CaseInfoImage from '../caseInfoImage/caseInfoImage';

export default function CaseInfo({ title, description, image, video, prevPage, nextPage }) {
    const { navigate } = useContext(
        CaseViewContextProvider
    );

    return (
        <div style={{ border: 'none', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <div style={{ margin: '1rem' }}>
                        <FixedContainer title={title} textTest={description} />
                    </div>
                </Grid>
                <Grid item xs={12} md={6}>

                    <div style={{ height: '50%', display:'flex' }}>
                        
                        <div style={{ margin: "auto", display: "flex" }}>
                            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                                <img style={{ marginTop: '15%'}} src={image}></img>
                                
                                {video && <video controls style={{ marginTop: '15%',}} src={video}></video>}
                                {console.log(video)}
                            </div>
                        </div>
                        {/* <CaseInfoImage image={image}></CaseInfoImage> */}
                        
                    </div>
                </Grid>
            </Grid>
            <CaseDetailsButtons prevPage={prevPage} nextPage={nextPage}></CaseDetailsButtons>
        </div>
    );
}
