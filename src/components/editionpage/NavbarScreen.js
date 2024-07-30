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
                    marginLeft: "5rem",
                    textAlign: "center",
                    marginTop: "1rem",
                }}
            >
                <Box sx={buttonContainerStyle}>
                    <Button>
                        <VisibilityIcon sx={iconStyle} />
                        <Typography color="black">View</Typography>
                    </Button>
                </Box>
                <Box sx={buttonContainerStyle}>
                    <Button onClick={submitSuccessCaseHandler}>
                        <SaveIcon sx={iconStyle} />

                        <Typography color="black">Save</Typography>
                    </Button>
                </Box>
            </Box>
        </Grid>
    )
}
