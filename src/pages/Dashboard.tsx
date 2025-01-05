import React from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import UserOverview from "./UserOverview";
import TransactionHistory from "./TransactionHistory";
import LoanManagement from "./LoanManagement";
import TransactionTable from "../components/TransactionTable";
import LoansTable from "../components/LoansTable";


const Dashboard = () => {

  return(
    <DashboardLayout>
   <UserOverview/>
   <TransactionTable/>
   <LoansTable/>
    </DashboardLayout>
);
}

export default Dashboard;
