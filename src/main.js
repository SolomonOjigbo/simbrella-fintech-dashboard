import { jsx as _jsx } from "react/jsx-runtime";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from './redux/store';
createRoot(document.getElementById('root')).render(_jsx(StrictMode, { children: _jsx(Provider, { store: store, children: _jsx(PersistGate, { loading: _jsx("p", { children: "Loading ...." }), persistor: persistor, children: _jsx(App, {}) }) }) }));
