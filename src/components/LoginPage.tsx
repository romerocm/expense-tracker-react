import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleAuthProvider } from '../firebase/firebase';

const LoginPage: React.FC = () => {
  const handleLogin = () => {
    signInWithPopup(auth, googleAuthProvider).catch((error) => {
      console.error('Error during sign-in:', error);
    });
  };

  return (
    <div className="box-layout">
      <div className="box-layout__box">
        <h1 className="box-layout__title">Expense Tracker</h1>
        <p>Manage your expenses efficiently</p>
        <button className="button" onClick={handleLogin}>Login with Google</button>
      </div>
    </div>
  );
};

export default LoginPage;
