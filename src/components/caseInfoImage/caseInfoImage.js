import { Typography } from "@mui/material"
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';

export default function CaseInfoImage({ image, video }) {
    return (
        <>
            {image ? (
                <div style={{ margin: "auto", position: "relative", display: "flex" }}>
                    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                        <img src={image} style={{ margin: "10px", width: "30%" }} />
                    </div>
                </div>
            ) : video ? (
                <div style={{ margin: "auto", position: "relative", display: "flex" }}>
                    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                        <video src={video} controls style={{ margin: "10px", width: "30%" }} />
                    </div>
                </div>
            ) : (
                <>
                    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                        <DoNotDisturbIcon sx={{ fontSize: '10rem' }}></DoNotDisturbIcon>
                        <Typography variant="h3" gutterBottom>
                            No Images or Videos Available
                        </Typography>
                    </div>
                </>
            )}
        </>
    );
}
