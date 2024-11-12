import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useFirebase } from '../context/FirebaseContext';

const IndexPage = () => {
  const router = useRouter();
  const { user } = useFirebase();

  useEffect(() => {
    if (user) {
      router.push('/dashboard');
    } else {
      router.push('/login');
    }
  }, [user, router]);

  return null; // This page redirects, so we don't need to render anything
};

export default IndexPage;
