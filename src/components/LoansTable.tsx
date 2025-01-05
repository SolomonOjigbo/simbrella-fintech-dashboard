import { useMemo } from 'react';
import { DataGrid, GridToolbar, GridColDef } from '@mui/x-data-grid';
import { useAppSelector } from '../redux/hooks';
import { CircularProgress, Box, Typography } from '@mui/material';

const LoansTable = () => {
    const { user, status, error } = useAppSelector((state) => state.user);
    const loans = user?.loans || []; 
  
    const columns = useMemo<GridColDef[]>(
      () => [
        { field: "id", headerName: "Loan ID", flex: 1 },
        { field: "amount", headerName: "Amount", flex: 1, sortable: true },
        { field: "tenure", headerName: "Tenure/Duration", flex: 1, sortable: true },
        { field: "purpose", headerName: "Purpose", flex: 1, sortable: true },
        { field: "startDate", headerName: "Start Date", flex: 1, sortable: true },
      ],
      []
    );
  
    if (status === "loading" || status === "idle") {
      return <CircularProgress size={46} />;
    }

    if (error) {
        return (
          <Box textAlign="center" padding="16px">
            <Typography variant="h6" color="error">
              Failed to load loans: {error}
            </Typography>
          </Box>
        );
      }
  
    return (
      <div style={{ width: "768px", height: "480px" }}>
        <DataGrid
          rows={loans}
          columns={columns}
          pageSizeOptions={[10, 30, 50]}
          autoPageSize
          slots={{ toolbar: GridToolbar }}
          sx={{ "& .MuiDataGrid-root": { backgroundColor: "#fff" } }}
        />
      </div>
    );
  };
  

export default LoansTable;
