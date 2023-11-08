import * as z from 'zod';

export const postFormSchema = z.object({
  content: z
    .string()
    .min(1, { message: 'Has to be move than 1 word' })
    .max(140, { message: '140 is the maximum word count' }),
});
