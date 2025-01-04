import React, { useEffect, useState } from "react";
import TransactionTable from "../components/TransactionTable";
import { fetchTransactions } from "../services/api";
import DashboardLayout from "../layouts/DashboardLayout";

const TransactionHistory = () => {
  
  

  return (
    <DashboardLayout>
    <div className="p-4 bg-white shadow rounded">
      <h2 className="text-xl font-bold">Transaction History</h2>

      <TransactionTable  />
     
    </div>
    </DashboardLayout>
  );
};

export default TransactionHistory;
