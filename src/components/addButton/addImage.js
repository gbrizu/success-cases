import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DeleteIcon from '@mui/icons-material/Delete';
import { useContext } from 'react';
import { ProcessContextProvider } from "../../context/process.context";
import { Grid } from '@mui/material';

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

export default function AddMedia() {
    const {
        successCaseFile,
        setSuccessCaseFile,
        challengeFile,
        setChallengeFile,
        technologieFile,
        setTechnologieFile,
        improvementsFile,
        setImprovementsFile,
        successCaseVideo,
        setSuccessCaseVideo,
        challengeVideo,
        setChallengeVideo,
        technologieVideo,
        setTechnologieVideo,
        improvementsVideo,
        setImprovementsVideo,
        screen
    } = useContext(ProcessContextProvider);

    const [media, setMedia] = React.useState('');

    React.useEffect(() => {
        if (screen === 'successCase') {
            setMedia(successCaseFile || successCaseVideo);
        } else if (screen === 'challenge') {
            setMedia(challengeFile || challengeVideo);
        } else if (screen === 'technologies') {
            setMedia(technologieFile || technologieVideo);
        } else if (screen === 'improvement') {
            setMedia(improvementsFile || improvementsVideo);
        } else {
            setMedia('');
        }
    }, [successCaseFile, challengeFile, technologieFile, improvementsFile, successCaseVideo, challengeVideo, technologieVideo, improvementsVideo, screen]);

    const setImageFile = ({ currentTarget: { files } }) => {
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
    };

    const setVideoFile = ({ currentTarget: { files } }) => {
        if (screen === 'successCase') {
            setSuccessCaseVideo(files[0]);
        }
        else if (screen === 'challenge') {
            setChallengeVideo(files[0]);
        }
        else if (screen === 'improvement') {
            setImprovementsVideo(files[0]);
        }
        else if (screen === 'technologies') {
            setTechnologieVideo(files[0]);
        }
    };

    const removeFile = () => {
        if (screen === 'successCase') {
            setSuccessCaseFile('');
            setSuccessCaseVideo('');
        }
        else if (screen === 'challenge') {
            setChallengeFile('');
            setChallengeVideo('');
        }
        else if (screen === 'improvement') {
            setImprovementsFile('');
            setImprovementsVideo('');
        }
        else if (screen === 'technologies') {
            setTechnologieFile('');
            setTechnologieVideo('');
        }
        setMedia('');
    };

    return (
        <Grid item xs={12}>
            {
                media &&
                <Grid>
                    {media.type.startsWith('image/') &&
                        <img
                            src={URL.createObjectURL(media)}
                            alt="Media Preview"
                            style={{ width: 100, height: 100 }}
                        />
                    }
                    {media.type.startsWith('video/') &&
                        <video
                            src={URL.createObjectURL(media)}
                            controls
                            style={{ width: 100, height: 100 }}
                        />
                    }
                </Grid>
            }
            <Grid>
                <Button
                    component="label"
                    variant="contained"
                    startIcon={<CloudUploadIcon />}
                >
                    {
                        media ? 'Cambiar imagen' :
                            screen === 'successCase' ? 'Agregar imagen de caso de éxito' :
                                screen === 'challenge' ? 'Agregar imagen de reto' :
                                    screen === 'improvement' ? 'Agregar imagen de mejora' :
                                        screen === 'technologies' ? 'Agregar imagen de tecnología' : ''
                    }
                    <VisuallyHiddenInput
                        type="file"
                        accept="image/*"
                        onChange={setImageFile}
                    />
                </Button>
                <Button
                    component="label"
                    variant="contained"
                    startIcon={<CloudUploadIcon />}
                >
                    {
                        media ? 'Cambiar video' :
                            screen === 'successCase' ? 'Agregar video de caso de éxito' :
                                screen === 'challenge' ? 'Agregar video de reto' :
                                    screen === 'improvement' ? 'Agregar video de mejora' :
                                        screen === 'technologies' ? 'Agregar video de tecnología' : ''
                    }
                    <VisuallyHiddenInput
                        type="file"
                        accept="video/*"
                        onChange={setVideoFile}
                    />
                </Button>
                {
                    media &&
                    <Button
                        variant="contained"
                        startIcon={<DeleteIcon />}
                        onClick={removeFile}
                    >
                        Eliminar {media.type.startsWith('image/') ? 'imagen' : 'video'}
                    </Button>
                }
            </Grid>
        </Grid>
    );
}
