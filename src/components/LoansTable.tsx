import React, { useMemo } from 'react'
import { DataGrid, GridToolbar, GridToolbarContainer, GridToolbarExport, GridToolbarQuickFilter, GridActionsCellItem, GridRowId, GridColDef, GridRowParams, } from '@mui/x-data-grid';
import { useAppSelector } from '../redux/hooks';

const LoansTable = () => {
 const { user, status, error } = useAppSelector((state) => state.user);
 const loans = user?.loans;

 const columns = useMemo<GridColDef[]>(
    () => [
    {
      field: "id",
      headerName: "Loan ID",
      flex: 1,
    },
    {
      field: "amount",
      headerName: "Amount",
      flex: 1,
      sortable: true,
    },
    {
      field: "tenure",
      headerName: "Tenure/ Duration",
      flex: 1,
      sortable: true,
    },
    {
      field: "purpose",
      headerName: "Purpose",
      flex: 1,
      sortable: true,
    },
    {
      field: "startDate",
      headerName: "Start Date",
      flex: 1,
      sortable: true,
    },
    // {
    //   field: "actions",
    //   headerName: "Actions",
    //   type: "actions",
    //   width: 80,
    //   getActions: (params: GridRowParams) => [
    //     <GridActionsCellItem
    //       icon={<Edit color="info"/>}
    //       label="Edit"
    //       onClick={handleEdit(params.id)}
    //     />,
    //     <GridActionsCellItem
    //       icon={<DeleteOutline color="error" />}
    //       label="Delete"
    //       onClick={handleDelete(params.id)}
    //     />,
    //   ]
    // },
  ], []);

  return (
    <div style={{ width: '768px', height: "480px"}}>
        <DataGrid 
         rows={loans}
        columns={columns}
        pageSizeOptions={[10, 30, 50]}
        autoPageSize
        slots={{
          toolbar:  GridToolbar,
         
        }}
        sx={{
          "& .MuiDataGrid-root": {
            backgroundColor: "#fff",
          },
        }}
        />
      </div>
  )
}

export default LoansTable