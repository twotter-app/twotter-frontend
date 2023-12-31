import { useForm } from 'react-hook-form';
import { postFormSchema } from '../utils/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useCallback } from 'react';
import { User } from '@/types/types';
import { NewTwoot } from '../types/types';

export const usePostForm = () => {
  const form = useForm<z.infer<typeof postFormSchema>>({
    resolver: zodResolver(postFormSchema),
    defaultValues: {
      content: '',
    },
  });

  const createNewTwootFromForm = useCallback(
    (values: z.infer<typeof postFormSchema>, user: User): NewTwoot => {
      const { content } = values;
      const { displayName, userName } = user;

      const dateAdded = new Date().toISOString();
      const newTwoot: NewTwoot = {
        content,
        author: displayName,
        authorSlug: userName,
        dateAdded,
      };
      return newTwoot;
    },

    []
  );
  return { form, createNewTwootFromForm };
};
