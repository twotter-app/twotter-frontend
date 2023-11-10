import React from 'react';
import { DialogContent } from '@/components/ui/dialog';
import { PostForm } from '@/features/home/components/PostForm';
import { UseFormReturn } from 'react-hook-form';
import { postFormSchema } from '@/features/home/utils/schemas';
import { z } from 'zod';

interface Props {
  form: UseFormReturn<{
    content: string;
  }>;
  onSubmitPost: (values: z.infer<typeof postFormSchema>) => void;
}

export const CreatePostDialog: React.FC<Props> = ({ form, onSubmitPost }) => {
  return (
    <DialogContent className="text-foreground  sm:max-w-[425px] xl:top-[150px]">
      <PostForm form={form} onSubmit={onSubmitPost} />
    </DialogContent>
  );
};
