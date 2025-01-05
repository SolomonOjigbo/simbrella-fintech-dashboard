import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
const LoanRequestForm = () => {
    const [loanDetails, setLoanDetails] = useState({ amount: 0, tenure: 0, purpose: "" });
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Loan Request Submitted", loanDetails);
    };
    return (_jsxs("div", { className: "p-4 bg-white shadow rounded", children: [_jsx("h2", { className: "text-xl font-bold", children: "Loan Management" }), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [_jsx("input", { type: "number", placeholder: "Amount", className: "border p-2 w-full", onChange: (e) => setLoanDetails({ ...loanDetails, amount: +e.target.value }) }), _jsx("input", { type: "number", placeholder: "Tenure (months)", className: "border p-2 w-full", onChange: (e) => setLoanDetails({ ...loanDetails, tenure: +e.target.value }) }), _jsx("textarea", { placeholder: "Purpose", className: "border p-2 w-full", onChange: (e) => setLoanDetails({ ...loanDetails, purpose: e.target.value }) }), _jsx("button", { type: "submit", className: "bg-blue-500 text-white p-2 rounded", children: "Submit Loan Request" })] })] }));
};
export default LoanRequestForm;
