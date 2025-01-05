import { useState } from "react";

const LoanRequestForm = () => {
  const [loanDetails, setLoanDetails] = useState({ amount: 0, tenure: 0, purpose: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Loan Request Submitted", loanDetails);
  };

  return (
    <div className="p-4 bg-white shadow rounded">
      <h2 className="text-xl font-bold">Loan Management</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="number"
          placeholder="Amount"
          className="border p-2 w-full"
          onChange={(e) => setLoanDetails({ ...loanDetails, amount: +e.target.value })}
        />
        <input
          type="number"
          placeholder="Tenure (months)"
          className="border p-2 w-full"
          onChange={(e) => setLoanDetails({ ...loanDetails, tenure: +e.target.value })}
        />
        <textarea
          placeholder="Purpose"
          className="border p-2 w-full"
          onChange={(e) => setLoanDetails({ ...loanDetails, purpose: e.target.value })}
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Submit Loan Request
        </button>
      </form>
    </div>
  );
};

export default LoanRequestForm;
