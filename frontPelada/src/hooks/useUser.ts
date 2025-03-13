import { useState } from 'react';
import { loginGoogleUser } from '../api/userApi';
import { AxiosError } from 'axios';
import { GoogleLogin } from '../types';

type ErrorType = string | null;

export const useUser = () => {

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<ErrorType>(null);

  const loginGoogle = async (credential: GoogleLogin) => {

    setLoading(true);
    setError(null);

    try {
      return await loginGoogleUser(credential);
    } catch (err) {
      if (err instanceof AxiosError) {
        if (!err.response) {
          setError('Erro de conexão');
          return;
        }
        setError(err.response?.data?.message);
        return false;
      }
      setError('Ocorreu um erro inesperado');
      return false;
    } finally {
      setLoading(false);
    }
  };
  
  return {  loginGoogle, loading, error };
};