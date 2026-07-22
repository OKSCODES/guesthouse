import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import Skeleton from './Skeleton';
import { ADMIN_EMAIL, auth } from '../services/firebase';

export default function ProtectedAdminRoute({ children }) {
  const [state, setState] = useState({ loading: true, allowed: false });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setState({
        loading: false,
        allowed: Boolean(user?.email && user.email.toLowerCase() === ADMIN_EMAIL.toLowerCase()),
      });
    });

    return unsubscribe;
  }, []);

  if (state.loading) {
    return (
      <main className="min-h-screen bg-slate-50 p-4 dark:bg-slate-950">
        <div className="mx-auto max-w-6xl pt-10">
          <Skeleton className="h-96" />
        </div>
      </main>
    );
  }

  return state.allowed ? children : <Navigate to="/admin/login" replace />;
}
