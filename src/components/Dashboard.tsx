import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => (
  <div>
    <h1>Dashboard</h1>
    <Link to="/add">Add Expense</Link>
    {/* Here you can add components to list and manage expenses */}
  </div>
);

export default Dashboard;
