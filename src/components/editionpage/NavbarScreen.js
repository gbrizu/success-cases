import { Box, Button, Grid, Typography } from '@mui/material'
import React, { useContext } from 'react'
import SuccesCaseButton from '../createSuccessCaseButtons/succesCaseButton'
import SaveIcon from "@mui/icons-material/Save";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { ProcessContextProvider } from '../../context/process.context';

export default function NavbarScreen() {
    const { navigate, screen, submitSuccessCaseHandler } = useContext(
        ProcessContextProvider
    );

    const buttonContainerStyle = {
        display: "flex",
        alignItems: "center",
        marginLeft: "1.5rem",
    };

    const iconStyle = {
        fontSize: "2rem",
        fill: "black",
    };

    return (
        <Grid item xs={2}>
            <Box
                sx={{
                    marginLeft: "auto",
                    textAlign: "center",
                    marginTop: "1rem",
                }}
            >
                <Button>
                    <Typography variant="h4" gutterBottom color={'black'}>
                        + Page
                    </Typography>
                </Button>
                <SuccesCaseButton
                    targetName={'successCase'}
                    onClick={() => navigate('successCase', screen,)}
                >
                    Succes Case
                </SuccesCaseButton>

                <SuccesCaseButton
                    targetName={'challenge'}
                    onClick={() => navigate('challenge')}
                >
                    Challenges
                </SuccesCaseButton>

                <SuccesCaseButton
                    targetName={'improvement'}
                    onClick={() => navigate('improvement')}
                >
                    Improvements
                </SuccesCaseButton>

                <SuccesCaseButton
                    targetName={'technologies'}
                    onClick={() => navigate('technologies')}
                >
                    Technologies
                </SuccesCaseButton>
                <Box sx={buttonContainerStyle}>
                    <Button>
                        <VisibilityIcon sx={iconStyle} />
                        <Typography color="black">View</Typography>
                    </Button>
                </Box>
                {
                    screen === 'technologies' &&
                    <Box sx={buttonContainerStyle}>
                        <Button onClick={submitSuccessCaseHandler}>
                            <SaveIcon sx={iconStyle} />

                            <Typography color="black">Save</Typography>
                        </Button>
                    </Box>
                }
            </Box>
        </Grid>
    )
}
