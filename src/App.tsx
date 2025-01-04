import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import LoanManagement from './pages/LoanManagement';
import TransactionHistory from './pages/TransactionHistory';
import Dashboard from './pages/Dashboard';
import UserOverview from './pages/UserOverview';
import { fetchUser } from './redux/userSlice';
import { useAppDispatch } from './redux/hooks';

function App() {
  const dispatch = useAppDispatch();
const id = "1"
  useEffect(() => {
    dispatch(fetchUser(id));
  }, [dispatch]);

  return (
    <Router>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/user-overview" element={<UserOverview/>} />
      <Route path="/loan-management" element={<LoanManagement />} />
      <Route path="/transaction-history" element={<TransactionHistory />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
  );
}

export default App;
