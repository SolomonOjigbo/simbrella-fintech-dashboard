import React, { useEffect, useState } from "react";
import { fetchTransactions } from "../services/api";

const TransactionTable = ({transactions}) => {

  return (
    <div className="p-4 bg-white shadow rounded">
      <h2 className="text-xl font-bold">Transaction History</h2>
      {/* {Transactions Table} */}
      Transactions Table

      {transactions}
    </div>
  );
};

export default TransactionTable;
