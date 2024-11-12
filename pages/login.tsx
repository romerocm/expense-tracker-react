import React from 'react';
import { useFirebase } from '../context/FirebaseContext';

const LoginPage: React.FC = () => {
  const { login } = useFirebase();

  return (
    <div className="box-layout">
      <div className="box-layout__box">
        <h1 className="box-layout__title">Expense Tracker</h1>
        <p>Manage your expenses efficiently</p>
        <button className="button" onClick={login}>Login with Google</button>
      </div>
    </div>
  );
};

export default LoginPage;
