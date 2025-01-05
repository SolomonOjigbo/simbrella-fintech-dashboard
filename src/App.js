import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import LoanManagement from './pages/LoanManagement';
import TransactionHistory from './pages/TransactionHistory';
import UserOverview from './pages/UserOverview';
import { fetchUser } from './redux/userSlice';
import { useAppDispatch } from './redux/hooks';
function App() {
    const dispatch = useAppDispatch();
    const id = "1";
    useEffect(() => {
        dispatch(fetchUser(id));
    }, [dispatch]);
    return (_jsx(Router, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(UserOverview, {}) }), _jsx(Route, { path: "/loan-management", element: _jsx(LoanManagement, {}) }), _jsx(Route, { path: "/transaction-history", element: _jsx(TransactionHistory, {}) }), _jsx(Route, { path: "*", element: _jsx(NotFound, {}) })] }) }));
}
export default App;
