import Feed from '@/components/features/home/layout/feed/Feed';
import Sidebar from '@/components/features/home/layout/sidebar/Sidebar';
import Widget from '@/components/features/home/layout/widget/Widget';
import { useUserAuth } from '@/features/auth/hooks/useUserAuth';
import { useCreatePost } from '@/features/home/api/hooks/useCreatePost';
import { useGetPosts } from '@/features/home/api/hooks/useGetPosts';
import { usePostForm } from '@/features/home/hooks/usePostForm';
import { Post } from '@/features/home/types/types';
import { modifyPostData } from '@/features/home/utils/modifyPostData';
import { postFormSchema } from '@/features/home/utils/schemas';
import { useEffect, useState } from 'react';
import { z } from 'zod';
export const HomePage = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const { checkIfUserAuthenticated, getUserId, getUser } = useUserAuth();
  const { form: postForm, createNewTwootFromForm } = usePostForm();

  useEffect(() => {
    checkIfUserAuthenticated();
  }, [checkIfUserAuthenticated]);

  const userId = getUserId();

  const { refetch, isLoading } = useGetPosts(
    { userId },
    {
      onSuccess: (data) => {
        const newPosts = modifyPostData(data);

        setPosts(newPosts);
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );

  const { mutate: createPost } = useCreatePost({
    onSuccess: () => {
      postForm.reset();
      refetch();
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const onSubmitPost = (values: z.infer<typeof postFormSchema>) => {
    const user = getUser();
    // if user hasn't logged in, return
    // TODO : add a toast message, "you need to login to post"
    if (!user) return;
    const newTwoot = createNewTwootFromForm(values, user);
    createPost({ newTwoot });
  };

  return (
    <div className="flex h-screen max-w-7xl ml-auto mr-auto bg-background text-foreground">
      <div className="border-r border-border ml-5 basis-1/4 mt-0">
        <Sidebar />
      </div>
      <div className="basis-2/5 overflow-y-scroll no-scrollbar border-r border-border">
        <Feed posts={posts} form={postForm} onSubmitPost={onSubmitPost} />
      </div>
      <div>
        <Widget />
      </div>
    </div>
  );
};
