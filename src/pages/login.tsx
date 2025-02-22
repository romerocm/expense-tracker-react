import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useFirebase } from '../../context/FirebaseContext';

const LoginPage: React.FC = () => {
  const { login, user, loading } = useFirebase();
  const router = useRouter();

  useEffect(() => {
    if (!loading && user) {
      router.push('/dashboard');
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  if (user) {
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-3xl font-bold text-center mb-4">Expense Tracker</h1>
        <p className="text-gray-600 text-center mb-6">Manage your expenses efficiently</p>
        <button 
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
          onClick={login}
        >
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
