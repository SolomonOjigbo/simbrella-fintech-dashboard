import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo, useState } from "react";
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useAppSelector } from '../redux/hooks';
import { MoreVert } from "@mui/icons-material";
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
    const columns = useMemo(() => [
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
            renderCell: () => (_jsxs(_Fragment, { children: [_jsx(IconButton, { "aria-label": "more actions", children: _jsx(MoreVert, {}) }), _jsx(Menu, { anchorEl: anchorEl, open: Boolean(anchorEl), onClose: handleMoreActionsClose, children: _jsx(MenuItem, { onClick: handleView, children: "View" }) })] })),
        },
    ], []);
    if (status === "loading" || status === "idle") {
        return _jsx(CircularProgress, { size: 46 });
    }
    if (error) {
        return (_jsx("div", { className: "flex justify-center items-center ", children: _jsxs("h4", { children: ["Failed to load loans: ", error] }) }));
    }
    return (_jsx("div", { className: "p-1 bg-white shadow rounded ", children: _jsx("div", { className: "h-[640px] lg:w-[1024px] xs:w-[480px]", children: _jsx(DataGrid, { rows: transactions, columns: columns, pageSizeOptions: [10, 30, 50], autoPageSize: true, slots: {
                    toolbar: GridToolbar,
                }, sx: {
                    "& .MuiDataGrid-root": {
                        backgroundColor: "#fff",
                    },
                } }) }) }));
};
export default TransactionTable;
