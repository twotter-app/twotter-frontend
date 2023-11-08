import { PostForm } from '@/features/home/components/PostForm';
import {
  CreatePostParams,
  CreatePostResponse,
} from '@/features/home/types/types';
import { MutateOptions } from 'react-query';
import { usePostForm } from '@/features/home/hooks/usePostForm';
import { z } from 'zod';
import { postFormSchema } from '@/features/home/utils/schemas';
import { useUserAuth } from '@/features/auth/hooks/useUserAuth';

interface TweetBoxProps {
  createPost: (
    variables: CreatePostParams,
    options?:
      | MutateOptions<CreatePostResponse, Error, CreatePostParams, unknown>
      | undefined
  ) => void;
}

export default function TweetBox({ createPost }: TweetBoxProps) {
  const { form, createNewTwootFromForm } = usePostForm();
  const { getUser } = useUserAuth();

  const onSubmit = (values: z.infer<typeof postFormSchema>) => {
    const user = getUser();
    // if user hasn't logged in, return
    // TODO : add a toast message, "you need to login to post"
    if (!user) return;
    const newTwoot = createNewTwootFromForm(values, user);

    createPost({ newTwoot });
  };

  return (
    <div className="border-b pb-3 pr-3 mt-2">
      <PostForm form={form} onSubmit={onSubmit} />
    </div>
  );
}
