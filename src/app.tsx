import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FirebaseProvider } from './context/FirebaseContext';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import ExpenseList from './components/ExpenseList';
import './styles/styles.scss';

const App: React.FC = () => (
  <FirebaseProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/expenses" element={<ExpenseList />} />
      </Routes>
    </BrowserRouter>
  </FirebaseProvider>
);

const root = ReactDOM.createRoot(document.getElementById('app') as HTMLElement);
root.render(<App />);
