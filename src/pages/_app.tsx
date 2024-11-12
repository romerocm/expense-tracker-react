import React from 'react';
import { AppProps } from 'next/app';
import { FirebaseProvider } from '../../context/FirebaseContext';
import '../styles/globals.css';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <FirebaseProvider>
    <Component {...pageProps} />
  </FirebaseProvider>
);

export default MyApp;
