import { CreatePostDialog } from '@/features/home/components/layout/dialogs/CreatePostDialog';
import Feed from '@/features/home/components/layout/feed/Feed';
import Sidebar from '@/features/home/components/layout/sidebar/Sidebar';
import Widget from '@/features/home/components/layout/widget/Widget';
import { Dialog } from '@/components/ui/dialog';
import { useToast } from '@/components/ui/use-toast';
import { useUserAuth } from '@/features/auth/hooks/useUserAuth';
import { useCreatePost } from '@/features/home/api/hooks/useCreatePost';
import { useGetPosts } from '@/features/home/api/hooks/useGetPosts';
import { usePostForm } from '@/features/home/hooks/usePostForm';
import { Post } from '@/features/home/types/types';
import { modifyPostData } from '@/features/home/utils/modifyPostData';
import { postFormSchema } from '@/features/home/utils/schemas';
import { useAppDispatch } from '@/stores/hooks';
import { updateIsLoading } from '@/stores/slices/loadingSlice';
import { useEffect, useState } from 'react';
import { z } from 'zod';

export const HomePage = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const { checkIfUserAuthenticated, getUserId, getUser } = useUserAuth();
  const { form: postForm, createNewTwootFromForm } = usePostForm();
  const dispatch = useAppDispatch();

  const { toast } = useToast();

  useEffect(() => {
    checkIfUserAuthenticated();
  }, [checkIfUserAuthenticated]);

  const userId = getUserId();

  const { refetch, isLoading: isLoadingGetPosts } = useGetPosts(
    { userId },
    {
      onSuccess: (data) => {
        const newPosts = modifyPostData(data);
        setPosts(newPosts);
      },
      onError: (error) => {
        console.log(error);
        toast({
          variant: 'destructive',
          title: 'Failed to fetch the latest posts',
        });
      },
    }
  );

  const { mutate: createPost, isLoading: isLoadingCreatePost } = useCreatePost({
    onSuccess: () => {
      postForm.reset();
      refetch();
      toast({
        variant: 'successful',
        title: 'Successfully posted!',
        // className: 'bottom-[10%] xl:right-[120%] ',
      });
    },
    onError: (error) => {
      console.log(error);
      toast({
        variant: 'destructive',
        title: 'Failed to create a post!',
      });
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

  useEffect(() => {
    dispatch(updateIsLoading(isLoadingGetPosts || isLoadingCreatePost));
  }, [isLoadingGetPosts, isLoadingCreatePost, dispatch]);

  return (
    <div className="flex h-screen max-w-7xl ml-auto mr-auto bg-background text-foreground">
      <Dialog>
        <CreatePostDialog form={postForm} onSubmitPost={onSubmitPost} />
        <div className="border-r border-border ml-5 basis-1/4 mt-0">
          <Sidebar />
        </div>
        <div className="basis-2/5 overflow-y-scroll no-scrollbar border-r border-border">
          <Feed posts={posts} form={postForm} onSubmitPost={onSubmitPost} />
        </div>
        <div>
          <Widget />
        </div>
      </Dialog>
    </div>
  );
};
