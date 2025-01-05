import {useMemo, useState } from "react";
import { DataGrid, GridToolbar, GridColDef } from '@mui/x-data-grid';
import { useAppSelector } from '../redux/hooks';
import { MoreVert} from "@mui/icons-material";
import { CircularProgress, IconButton, Menu, MenuItem } from "@mui/material";

const TransactionTable = () => {
const { user, status, error } = useAppSelector((state) => state.user);
 const transactions = user?.transactions;
 const [anchorEl, setAnchorEl] = useState(null);
 // @ts-ignore
 const [selectedRow, setSelectedRow] = useState(null);




 const handleMoreActionsClose = () => {
   setAnchorEl(null);
   setSelectedRow(null);
 };

 const handleView = () => {
   handleMoreActionsClose();
 };



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
      field: "type",
      headerName: "Tenure/ Duration",
      flex: 1,
      sortable: true,
    },
    {
      field: "description",
      headerName: "Purpose",
      flex: 1,
      sortable: true,
    },
    {
      field: "date",
      headerName: "Start Date",
      flex: 1,
      sortable: true,
    },
    {
      field: "actions",
      headerName: "Actions",
      type: "actions",
      width: 80,
      renderCell: () => (
        <>
          <IconButton
            aria-label="more actions"
          >
            <MoreVert />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMoreActionsClose}
          >
            <MenuItem onClick={handleView}>View</MenuItem>
          </Menu>
        </>
      ),
    },
  ], []);

   if (status === "loading" || status === "idle") {
        return <CircularProgress size={46} />;
      }
      if (error) {
        return (
          <div className="flex justify-center items-center ">
            <h4>
              Failed to load loans: {error}
            </h4>
          </div>
        );
      }

  return (
    <div className="p-1 bg-white shadow rounded ">
     
      {/* {Transactions Table} */}
      
<div className="h-[640px] lg:w-[1024px] xs:w-[480px]">
        <DataGrid 
         rows={transactions}
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
      
    </div>
  );
};

export default TransactionTable;
