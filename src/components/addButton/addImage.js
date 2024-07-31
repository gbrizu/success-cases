import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useContext } from 'react';
import { ProcessContextProvider } from "../../context/process.context";
import { Grid, Item } from '@mui/material';
import Box from '@mui/material/Box';


const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 5,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,

});

export default function AddImage() {
    const {
        successCaseFile,
        setSuccessCaseFile,
        challengeFile,
        setChallengeFile,
        technologieFile,
        setTechnologieFile,
        improvementsFile,
        setImprovementsFile,
        screen
    } = useContext(ProcessContextProvider);

    const [media, setMedia] = React.useState('')

    React.useEffect(() => {
        if (screen === 'successCase') {
            setMedia(successCaseFile);
        } else if (screen === 'challenge') {
            setMedia(challengeFile);
        } else if (screen === 'technologies') {
            setMedia(technologieFile);
        } else if (screen === 'improvement') {
            setMedia(improvementsFile);
        } else {
            setMedia('');
        }
    }, [successCaseFile, challengeFile, technologieFile, improvementsFile, screen])

    const setFile = ({ currentTarget: { files } }) => {
        if (screen === 'successCase') {
            setSuccessCaseFile(files[0]);
        }
        else if (screen === 'challenge') {
            setChallengeFile(files[0]);
        }
        else if (screen === 'improvement') {
            setImprovementsFile(files[0]);
        }
        else if (screen === 'technologies') {
            setTechnologieFile(files[0]);
        }
    }

    return (
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100%">
            {
                media &&
                <Box mb={2}>
                    <img
                        src={URL.createObjectURL(media)}
                        alt="Imagen Globant"
                        style={{ width: 100, height: 100 }}
                    />
                </Box>
            }
            <Grid>
                <Button
                    component="label"
                    role={undefined}
                    variant="contained"
                    tabIndex={- 1}
                    startIcon={< CloudUploadIcon />}
                >
                    Upload Image
                    <VisuallyHiddenInput
                        type="file"
                        onChange={setFile}
                    />
                </Button>
            </Grid >
        </Box>
    );
}