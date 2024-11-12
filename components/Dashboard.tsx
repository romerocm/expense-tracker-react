import React from 'react';
import Link from '../../node_modules/next/link';

const DashboardContent: React.FC = () => (
  <div className="min-h-screen bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <Link 
        href="/expenses/add" 
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
      >
        Add Expense
      </Link>
    </div>
  </div>
);

export default Dashboard;
