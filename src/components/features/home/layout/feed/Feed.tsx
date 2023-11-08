import { z } from 'zod';
import { UseFormReturn } from 'react-hook-form';

import TweetBox from './TweetBox';
import PostComponent from './PostComponent';

import { Post } from '@/features/home/types/types';
import { postFormSchema } from '@/features/home/utils/schemas';

interface Props {
  posts: Post[];
  form: UseFormReturn<{
    content: string;
  }>;
  onSubmitPost: (values: z.infer<typeof postFormSchema>) => void;
}

const Feed: React.FC<Props> = ({ posts, form, onSubmitPost }) => {
  return (
    <div className="">
      {/* header */}
      <div className="sticky top-0 z-50 border-b py-4 px-5 flex justify-around bg-white">
        <h2>For you</h2>
        <h2>Following</h2>
      </div>
      {/* tweet */}
      <TweetBox form={form} onSubmit={onSubmitPost} />
      {posts.map((post, index) => (
        <PostComponent key={index} post={post} />
      ))}
    </div>
  );
};

export default Feed;
