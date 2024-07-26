import React, { useContext, useState } from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DeleteIcon from '@mui/icons-material/Delete';
import { Grid } from '@mui/material';
import { uploadFileToS3, deleteFileFromS3 } from '../../services/processFiles';
import { ProcessContextProvider } from '../../context/process.context';

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

    const context = useContext(ProcessContextProvider);
    const {screen} = useContext(ProcessContextProvider);
    const [imageUrl, setImageUrl] = useState('');
    const [videoUrl, setVideoUrl] = useState('');

    const handleFileUpload = async (event, type) => {
        const file = event.target.files[0];
        
        const uploadedUrl = await uploadFileToS3(file, type, context);
        
        console.log('after upladedUrl === ' + uploadedUrl);
        if (type === 'image') {
            setImageUrl(uploadedUrl);
            
        } else if (type === 'video') {
            setVideoUrl(uploadedUrl);
        }
              
    };
    const handleDelete = async (type) => {
        if (type === 'image' && imageUrl) {
            await deleteFileFromS3(imageUrl);
            setImageUrl('');
        } else if (type === 'video' && videoUrl) {
            await deleteFileFromS3(videoUrl);
            setVideoUrl('');
        }
    };
    return (
        <Grid item xs={12}>
            <Grid>
                <Button
                    component="label"
                    variant="contained"
                    startIcon={<CloudUploadIcon />}
                >
                    {imageUrl ? 'Cambiar imagen' : 'Agregar imagen'}
                    <VisuallyHiddenInput
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileUpload(e, 'image')}
                    />
                </Button>
                {imageUrl && (
                    <>
                        <img
                            src={imageUrl}
                            alt="Imagen"
                            style={{ width: 100, height: 100, marginLeft: 10 }}
                        />
                        <Button
                            variant="contained"
                            color="secondary"
                            startIcon={<DeleteIcon />}
                            onClick={() => handleDelete('image')}
                            style={{ marginLeft: '10px' }}
                        >
                            Eliminar imagen
                        </Button>
                    </>
                )}
            </Grid>
            <Grid>
                <Button
                    component="label"
                    variant="contained"
                    startIcon={<CloudUploadIcon />}
                    style={{ marginTop: '20px' }}
                >
                    {videoUrl ? 'Cambiar video' : 'Agregar video'}
                    <VisuallyHiddenInput
                        type="file"
                        accept="video/*"
                        onChange={(e) => handleFileUpload(e, 'video')}
                    />
                </Button>
                {videoUrl && (
                    <>
                        <video
                            src={videoUrl}
                            controls
                            style={{ width: 100, height: 100, marginLeft: 10 }}
                        />
                        <Button
                            variant="contained"
                            color="secondary"
                            startIcon={<DeleteIcon />}
                            onClick={() => handleDelete('video')}
                            style={{ marginLeft: '10px' }}
                        >
                            Eliminar video
                        </Button>
                    </>
                )}
            </Grid>
        </Grid>
    );
}