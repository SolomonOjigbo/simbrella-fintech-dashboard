import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useAppSelector } from '../redux/hooks';
import { CircularProgress, Box, Typography } from '@mui/material';
const LoansTable = () => {
    const { user, status, error } = useAppSelector((state) => state.user);
    const loans = user?.loans || [];
    const columns = useMemo(() => [
        { field: "id", headerName: "Loan ID", flex: 1 },
        { field: "amount", headerName: "Amount", flex: 1, sortable: true },
        { field: "tenure", headerName: "Tenure/Duration", flex: 1, sortable: true },
        { field: "purpose", headerName: "Purpose", flex: 1, sortable: true },
        { field: "startDate", headerName: "Start Date", flex: 1, sortable: true },
    ], []);
    if (status === "loading" || status === "idle") {
        return _jsx(CircularProgress, { size: 46 });
    }
    if (error) {
        return (_jsx(Box, { textAlign: "center", padding: "16px", children: _jsxs(Typography, { variant: "h6", color: "error", children: ["Failed to load loans: ", error] }) }));
    }
    return (_jsx("div", { style: { width: "768px", height: "480px" }, children: _jsx(DataGrid, { rows: loans, columns: columns, pageSizeOptions: [10, 30, 50], autoPageSize: true, slots: { toolbar: GridToolbar }, sx: { "& .MuiDataGrid-root": { backgroundColor: "#fff" } } }) }));
};
export default LoansTable;
