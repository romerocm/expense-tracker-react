import React from 'react';
import { useFirebase } from '../context/FirebaseContext';
import { useRouter } from 'next/router';

const Dashboard: React.FC = () => {
  const { user, logout } = useFirebase();
  const router = useRouter();

  if (!user) {
    router.push('/login');
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <button 
            onClick={logout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
          >
            Logout
          </button>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Add components to list and manage expenses here */}
      </main>
    </div>
  );
};

export default Dashboard;
