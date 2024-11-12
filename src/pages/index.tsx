import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useFirebase } from '../../context/FirebaseContext';

const IndexPage = () => {
  const router = useRouter();
  const { user, loading } = useFirebase();

  useEffect(() => {
    if (!loading) {
      if (user) {
        router.push('/dashboard');
      } else {
        router.push('/login');
      }
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  return null;
};

export default IndexPage;
