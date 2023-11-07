import { useForm } from 'react-hook-form';
import { loginFormSchema } from '../utils/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { dummyUserLogin } from '@/dummyData/dummyUserLogin';
import { useCallback } from 'react';
import { useUserAuth } from './useUserAuth';

export const useLoginForm = () => {
  const { loginUser } = useUserAuth();
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
      if (response.user) loginUser(response.user);
    },
    [loginUser]
  );

  return { form, onSubmit };
};
