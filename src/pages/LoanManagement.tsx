import React, { useEffect, useState } from 'react'
import DashboardLayout from '../layouts/DashboardLayout'
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { Button, Modal } from '@mui/material';
import LoansTable from '../components/loansTable';

const LoanManagement = () => {
    
    const [isOpen, setIsOpen ] = useState(false);
 
  return (
    <>

   
    <DashboardLayout>

    <div>
      <h2 className="text-xl font-bold">Loan Management</h2>

      <Button variant="contained" color='info'>Request For Loan</Button>

    <LoansTable />




      <Modal open={isOpen} onClose={()=> setIsOpen(false)} >

      <form onSubmit={()=> console.log("Form Submitted")} className="space-y-4">
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
      </Modal>
    </div>
    </DashboardLayout>
    </>
  )
}

export default LoanManagement