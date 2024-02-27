import { Button, Typography } from "@mui/material";
import SaveIcon from '@mui/icons-material/Save';
import VisibilityIcon from '@mui/icons-material/Visibility';


function EditionUtils() {


    return (
        <>
            <Typography variant="h4" gutterBottom>
                + Pages
            </Typography>
            <div>
                <Button variant="outlined" color="secondary">Success Case</Button>
            </div>
            <div>
                <Button variant="outlined" color="secondary">Challenges</Button>
            </div>
            <div>
                <Button variant="outlined" color="secondary">Improvements</Button>
            </div>
            <div>
                <Button variant="outlined" color="secondary">Technologies</Button>
            </div>
            <div>
                <Button><SaveIcon></SaveIcon></Button>
            </div>
            <div>
                <Button><VisibilityIcon></VisibilityIcon></Button>
            </div>
        </>
    )
}

export default EditionUtils;
