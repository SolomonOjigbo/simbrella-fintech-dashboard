import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import LoanManagement from './pages/LoanManagement';
import TransactionHistory from './pages/TransactionHistory';
import Dashboard from './pages/Dashboard';
import UserOverview from './pages/UserOverview';

function App() {
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
