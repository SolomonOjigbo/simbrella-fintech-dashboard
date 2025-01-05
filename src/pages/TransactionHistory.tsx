
import TransactionTable from "../components/TransactionTable";
import DashboardLayout from "../layouts/DashboardLayout";

const TransactionHistory = () => {
  
  

  return (
    <DashboardLayout>
    <div className="p-4 bg-white shadow rounded">
      <h3 className="text-xl font-bold py-8">Transaction History</h3>

      <TransactionTable  />
     
    </div>
    </DashboardLayout>
  );
};

export default TransactionHistory;
