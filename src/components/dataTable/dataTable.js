import { IconButton } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Link } from "react-router-dom";

function DataTable() {
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

    // Dummy data
    const rows = [
        { id: 1, client: "a", industry: "a", projectType: "a", referrer: "a", date: '   01/01/2024' },
        { id: 2, client: "b", industry: "b", projectType: "b", referrer: "b", date: '   02/01/2024' },
        { id: 3, client: "c", industry: "c", projectType: "c", referrer: "c", date: '   03/01/2024' },
        { id: 4, client: "d", industry: "d", projectType: "d", referrer: "d", date: '   04/01/2024' },
        { id: 5, client: "e", industry: "e", projectType: "e", referrer: "e", date: '   05/01/2024' },
        { id: 6, client: "f", industry: "f", projectType: "f", referrer: "f", date: '   06/01/2024' },
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