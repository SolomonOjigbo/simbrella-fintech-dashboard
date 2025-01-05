import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import TransactionTable from "../components/TransactionTable";
import DashboardLayout from "../layouts/DashboardLayout";
const TransactionHistory = () => {
    return (_jsx(DashboardLayout, { children: _jsxs("div", { className: "p-4 bg-white shadow rounded", children: [_jsx("h3", { className: "text-xl font-bold py-8", children: "Transaction History" }), _jsx(TransactionTable, {})] }) }));
};
export default TransactionHistory;
