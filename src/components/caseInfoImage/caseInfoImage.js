import { Typography } from "@mui/material"
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';

export default function CaseInfoImage({ image }) {
    return (
        <>
            {image ? (
                <div style={{ margin: "auto", position: "relative", display: "flex" }}>
                    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                        <img src={image} style={{ margin: "10px", width: "30%" }} />
                    </div>
                </div>
            ) : (
                <>
                    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                        <DoNotDisturbIcon sx={{ fontSize: '10rem' }}></DoNotDisturbIcon>
                        <Typography variant="h3" gutterBottom>
                            No Images Available
                        </Typography>
                    </div>
                </>
            )}
        </>
    )
}