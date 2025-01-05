import { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Button, Modal, TextField, Typography } from "@mui/material";
import LoansTable from "../components/LoansTable";
import { updateUser } from "../redux/userSlice";

const LoanManagement = () => {
  const { user } = useAppSelector((state) => state.user);
  const loans = user?.loans
  const [loanDetails, setLoanDetails] = useState({
    tenure: "",
    amount: 0,
    purpose: "",
    startDate: "",
    status: "active",
    id: (loans?.length || 0) + 1
  });

  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useAppDispatch();

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!loanDetails.tenure || !loanDetails.amount || !loanDetails.purpose || !loanDetails.startDate) {
      alert("Please fill all fields.");
      return;
    }

    const updatedLoans = [...(user?.loans || []), loanDetails];
    const updatedUser = { ...user, loans: updatedLoans };

    dispatch(updateUser(updatedUser));
    setIsOpen(false); 
    setLoanDetails({ id: 0, tenure: "", amount: 0, purpose: "", startDate: "", status: "active" });

  };

  return (
    <>
      <DashboardLayout>
        {/* Header */}
        <div className="flex flex-row justify-between gap-4 py-8">
          <Typography variant="h6" className="font-bold">
            Loan Management
          </Typography>
          <Button variant="contained" color="info" onClick={handleClick}>
            Request For Loan
          </Button>
        </div>

        {/* Loans Table */}
        <LoansTable />

        {/* Loan Request Modal */}
        <Modal
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="flex justify-center items-center"
        >
          <div className="flex flex-col bg-slate-100 w-11/12 md:w-1/2 px-8 py-6 rounded-lg shadow-lg space-y-6">
            <Typography variant="h6" className="font-bold">
              Loan Request Form
            </Typography>
            <form onSubmit={handleSubmit} className="space-y-4">
              <TextField
                label="Amount"
                type="number"
                fullWidth
                variant="outlined"
                value={loanDetails.amount}
                onChange={(e) => setLoanDetails({ ...loanDetails, amount: +e.target.value })}
              />
              <TextField
                label="Tenure (months)"
                type="text"
                fullWidth
                variant="outlined"
                value={loanDetails.tenure}
                onChange={(e) => setLoanDetails({ ...loanDetails, tenure: e.target.value })}
              />
              <TextField
                label="Start Date"
                type="date"
                fullWidth
                variant="outlined"
                InputLabelProps={{ shrink: true }}
                value={loanDetails.startDate}
                onChange={(e) => setLoanDetails({ ...loanDetails, startDate: e.target.value })}
              />
              <TextField
                label="Purpose"
                multiline
                rows={3}
                fullWidth
                variant="outlined"
                value={loanDetails.purpose}
                onChange={(e) => setLoanDetails({ ...loanDetails, purpose: e.target.value })}
              />
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Submit Loan Request
              </Button>
            </form>
          </div>
        </Modal>
      </DashboardLayout>
    </>
  );
};

export default LoanManagement;
