import * as z from 'zod';

export const postFormSchema = z.object({
  email: z.string(),
  password: z.string(),
});
