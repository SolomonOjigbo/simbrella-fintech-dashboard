import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import DashboardLayout from "../layouts/DashboardLayout";
import UserOverview from "./UserOverview";
import TransactionTable from "../components/TransactionTable";
import LoansTable from "../components/LoansTable";
const Dashboard = () => {
    return (_jsxs(DashboardLayout, { children: [_jsx(UserOverview, {}), _jsx(TransactionTable, {}), _jsx(LoansTable, {})] }));
};
export default Dashboard;
