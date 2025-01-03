import React from "react";

import DashboardLayout from "../layouts/DashboardLayout";

const UserOverview = () => {

  return (
    <DashboardLayout>
    <div className="p-4 bg-white shadow rounded">
      <h2 className="text-xl font-bold">User Overview</h2>
      <p>Name: Solomon Ojigbo</p>
      <p>Account Balance: 0.00</p>
      <p>Recent Transactions: 0</p>
    </div>
    </DashboardLayout>
  );
};

export default UserOverview;
