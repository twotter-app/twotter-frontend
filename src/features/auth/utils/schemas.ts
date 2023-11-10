import * as z from 'zod';

export const loginFormSchema = z.object({
  emailOrUserName: z.string(),
  password: z.string(),
});

export const signUpFormSchema = z
  .object({
    userName: z
      .string()
      .min(3, { message: 'Name must be at least 3 characters' }),
    email: z.string().email({ message: 'Please enter a valid email address' }),
    password: z
      .string()
      .min(8, { message: 'Password must be at least 8 characters' }),
    passWordConfirm: z.string().min(8),
  })
  .refine((data) => data.password === data.passWordConfirm, {
    message: "Password confirmation doesn't match with the password",
  });
