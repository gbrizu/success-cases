import { IconButton } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Link } from "react-router-dom";

function DataTable({rows}) {
    const renderDetailsButton = (params) => {
        return (
            <IconButton>
                <RemoveRedEyeIcon></RemoveRedEyeIcon>
            </IconButton>
        )
    }

    const columns = [
        { field: 'client', headerName: 'Client', width: 300, disableClickEventBubbling: true },
        { field: 'industry', headerName: 'Industry', width: 300, disableClickEventBubbling: true },
        {
            field: 'projectType',
            headerName: 'projectType',
            disableClickEventBubbling: true,
            width: 300
        },
        {
            field: 'referrer',
            headerName: 'Referrer',
            width: 300,
            disableClickEventBubbling: true,
        },
        { field: 'date', headerName: 'Date', width: 150, disableClickEventBubbling: true },
        {
            width: 50,
            disableClickEventBubbling: true,
            renderCell: renderDetailsButton
        }
    ];

    
    return (
        <div style={{ height: 400 }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
            />
        </div>
    );
}
export default DataTable;