// components/ProtectedRoute.tsx
import { Navigate } from 'react-router';
import { useAuth } from './hooks/useAuth';

interface ProtectedRouteProps {
  children: JSX.Element;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!isAuthenticated) {
    console.log(isAuthenticated);
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
