import { UseFormReturn } from 'react-hook-form';
import { z } from 'zod';

import { PostForm } from '@/features/home/components/PostForm';

import { postFormSchema } from '@/features/home/utils/schemas';

interface TweetBoxProps {
  onSubmit: (values: z.infer<typeof postFormSchema>) => void;
  form: UseFormReturn<{
    content: string;
  }>;
}

export default function TweetBox({ onSubmit, form }: TweetBoxProps) {
  return (
    <div className="border-b pb-3 pr-3 mt-2">
      <PostForm form={form} onSubmit={onSubmit} />
    </div>
  );
}
