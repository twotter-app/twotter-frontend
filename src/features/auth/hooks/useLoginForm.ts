import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { loginFormSchema } from '../utils/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { dummyUserLogin } from '@/dummyData/dummyUserLogin';
import { useCallback } from 'react';

export const useLoginForm = () => {
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = useCallback(
    (values: z.infer<typeof loginFormSchema>) => {
      const { email, password } = values;
      const response = dummyUserLogin({ email, password });
      if (response.error) {
        // TODO: Show error message with toast
        alert(response.error);
        return;
      }
      // TODO: Save user using API
      localStorage.setItem('user', JSON.stringify(response.user));
      navigate('/');
    },
    [navigate]
  );

  const checkIfUserIsLoggedIn = useCallback(() => {
    const user = localStorage.getItem('user');
    if (user) {
      navigate('/');
    }
  }, [navigate]);
  return { form, onSubmit, checkIfUserIsLoggedIn };
};
