import { Box, Button, Typography } from "@mui/material";
import SaveIcon from '@mui/icons-material/Save';
import VisibilityIcon from '@mui/icons-material/Visibility';


function EditionUtils() {

const buttonStyle = { margin: '0.5rem', height:'3.5rem',borderRadius:'48%',minWidth:'10rem',minHeight: '3.5rem', fontFamily: 'Arial',border: '2px solid',}

const buttonContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    marginLeft:'3rem',
    
    

};

const iconStyle = {
    fontSize: '3.5rem',
    marginBottom: '1rem',
};

    
    return (
        <>
            < div class="contenedor"  >
                <Typography variant="h4" gutterBottom>
                    + Pages
                </Typography>
                <div>
                    <Button  style={buttonStyle} variant="outlined" >Success Case</Button>
                </div>
                <div>
                    <Button style={buttonStyle} variant="outlined" >Challenges </Button>
                </div>
                <div>
                    <Button style={buttonStyle} variant="outlined" >Improvements</Button>
                </div>
                <div>
                    <Button style={buttonStyle} variant="outlined" >Technologies</Button>
                </div>
                <Box sx={buttonContainerStyle}>
                    <Button>
                        <SaveIcon sx={iconStyle} />
                    </Button>
                    <Typography>
                        Save
                    </Typography>
                </Box>
                <Box sx={buttonContainerStyle}>
                    <Button>
                        <VisibilityIcon sx={iconStyle} />
                    </Button>
                    <Typography>
                        Visibility
                    </Typography>
                </Box>
            </div>
        </>

    )
}

export default EditionUtils;