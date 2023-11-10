import { User } from '@/types/types';
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

  const getUserId = useCallback(() => {
    const user = localStorage.getItem('user');
    if (!user) {
      return;
    }
    const parsedUser = JSON.parse(user);
    return parsedUser._id;
  }, []);

  const getUser = useCallback((): User | undefined => {
    const user = localStorage.getItem('user');
    if (!user) {
      return;
    }
    const parsedUser = JSON.parse(user);
    return parsedUser;
  }, []);

  return { loginUser, checkIfUserAuthenticated, getUserId, getUser };
};
