import Feed from '@/components/features/home/layout/feed/Feed';
import Sidebar from '@/components/features/home/layout/sidebar/Sidebar';
import Widget from '@/components/features/home/layout/widget/Widget';
import { useUserAuth } from '@/features/auth/hooks/useUserAuth';
import { useCreatePost } from '@/features/home/api/hooks/useCreatePost';
import { useGetPosts } from '@/features/home/api/hooks/useGetPosts';
import { Post } from '@/features/home/types/types';
import { modifyPostData } from '@/features/home/utils/modifyPostData';
import { useEffect, useState } from 'react';
export const HomePage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const { checkIfUserAuthenticated, getUserId } = useUserAuth();

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
      refetch();
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return (
    <div className="flex h-screen max-w-7xl ml-auto mr-auto">
      <div className="border-r ml-5 basis-1/4 mt-0">
        <Sidebar />
      </div>
      <div className="basis-2/5 overflow-y-scroll no-scrollbar border">
        <Feed posts={posts} createPost={createPost} />
      </div>
      <div>
        <Widget />
      </div>
    </div>
  );
};
