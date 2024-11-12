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
    <div>
      <h1>Dashboard</h1>
      <button onClick={logout}>Logout</button>
      {/* Add components to list and manage expenses here */}
    </div>
  );
};

export default Dashboard;
