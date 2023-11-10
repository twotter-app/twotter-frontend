import { z } from 'zod';
import { UseFormReturn } from 'react-hook-form';

import TweetBox from './TweetBox';
import PostComponent from './PostComponent';

import { Post } from '@/features/home/types/types';
import { postFormSchema } from '@/features/home/utils/schemas';
import { useAppSelector } from '@/stores/hooks';
import { selectIsLoading } from '@/stores/slices/loadingSlice';
import { SkeltonPostComponent } from './SkeltonPostComponent';

interface Props {
  posts: Post[];
  form: UseFormReturn<{
    content: string;
  }>;
  onSubmitPost: (values: z.infer<typeof postFormSchema>) => void;
}

const Feed: React.FC<Props> = ({ posts, form, onSubmitPost }) => {
  const { isLoading } = useAppSelector(selectIsLoading);
  return (
    <div className="">
      {/* header */}
      <div className="sticky top-0 z-50 border-b py-4 px-5 flex justify-around bg-background border-border">
        <h2>For you</h2>
        <h2>Following</h2>
      </div>
      {/* tweet */}
      <TweetBox form={form} onSubmit={onSubmitPost} />
      {isLoading && (
        <>
          <SkeltonPostComponent />
          <SkeltonPostComponent />
          <SkeltonPostComponent />
        </>
      )}
      {posts.map((post, index) => (
        <PostComponent key={index} post={post} />
      ))}
    </div>
  );
};

export default Feed;
