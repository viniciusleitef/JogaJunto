// hooks/useAuth.ts
import { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import { DecodedToken } from '../types';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      try {
        const decoded: DecodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000;
        setIsAuthenticated(decoded.exp > currentTime);
      } catch {
        setIsAuthenticated(false);
      }
    } else {
      setIsAuthenticated(false);
    }

    setLoading(false); 
  }, []);

  return { isAuthenticated, loading };
};
