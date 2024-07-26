import { CircularProgress } from "@mui/material";

export function GradientCircularProgress() {
    return (
        <>
            <svg width={0} height={0}>
                <defs>
                    <linearGradient id="my_gradient" x1="10%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#d9e021" />
                        <stop offset="100%" stopColor="#8cc63f" />
                    </linearGradient>
                </defs>
            </svg>
            <CircularProgress sx={{
                'svg circle': {
                    stroke: 'url(#my_gradient)'
                },
            }}
                size={30}
            />
        </>
    );
}