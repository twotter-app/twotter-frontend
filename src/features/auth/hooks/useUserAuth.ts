import { User } from '@/types/common.types';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export const useUserAuth = () => {
  const navigate = useNavigate();
  // TODO: Save user using API
  const loginUser = useCallback(
    (user: User) => {
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/');
    },
    [navigate]
  );

  const checkIfUserAuthenticated = useCallback(() => {
    const user = localStorage.getItem('user');
    if (!user) {
      navigate('/login');
    }
  }, [navigate]);

  return { loginUser, checkIfUserAuthenticated };
};
