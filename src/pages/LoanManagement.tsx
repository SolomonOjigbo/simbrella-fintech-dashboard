import React, { useEffect, useState } from 'react'
import DashboardLayout from '../layouts/DashboardLayout'
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { fetchUser} from '../redux/userSlice';
import { Modal } from '@mui/material';

const LoanManagement = () => {
    const dispatch = useAppDispatch();
    const { user, status, error } = useAppSelector((state) => state.user);
    const [isOpen, setIsOpen ] = useState(false);
  
    useEffect(() => {
      dispatch(fetchUser());
    }, [dispatch]);
  return (
    <DashboardLayout>

<div className="p-4 bg-white shadow rounded">
      <h2 className="text-xl font-bold">Loan Management</h2>


      

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
  )
}

export default LoanManagement