import { IconButton } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Link } from "react-router-dom";

function DataTable({ rows }) {
    const renderDetailsButton = (params) => {
        return (
            <Link to={`succesCase/${params.id}`}>
                <IconButton>
                    <RemoveRedEyeIcon></RemoveRedEyeIcon>
                </IconButton>
            </Link>
        )
    }

    const columns = [
        { field: 'client', headerName: 'Client', width: 250, disableClickEventBubbling: true },
        { field: 'industry', headerName: 'Industry', width: 250, disableClickEventBubbling: true },
        {
            field: 'projectType',
            headerName: 'projectType',
            disableClickEventBubbling: true,
            width: 250
        },
        {
            field: 'referrer',
            headerName: 'Referrer',
            width: 250,
            disableClickEventBubbling: true,
        },
        { field: 'date', headerName: 'Date', width: 250, disableClickEventBubbling: true },
        {
            width: 50,
            disableClickEventBubbling: true,
            renderCell: (row) => renderDetailsButton(row)
        }
    ];


    return (
        <div style={{ height: 400 }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 20 },
                    },
                }}
            />
        </div>
    );
}
export default DataTable;