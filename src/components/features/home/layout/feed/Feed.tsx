import TweetBox from './TweetBox';
import PostComponent from './PostComponent';
import {
  CreatePostParams,
  CreatePostResponse,
  Post,
} from '@/features/home/types/types';
import { MutateOptions } from 'react-query';
import { createPost } from '@/features/home/api/service/createPost';

interface Props {
  posts: Post[];
  createPost: (
    variables: CreatePostParams,
    options?:
      | MutateOptions<CreatePostResponse, Error, CreatePostParams, unknown>
      | undefined
  ) => void;
}

const Feed: React.FC<Props> = ({ posts }) => {
  return (
    <div className="">
      {/* header */}
      <div className="sticky top-0 z-50 border-b py-4 px-5 flex justify-around bg-white">
        <h2>For you</h2>
        <h2>Following</h2>
      </div>
      {/* tweet */}
      <TweetBox createPost={createPost} />
      {posts.map((post, index) => (
        <PostComponent key={index} post={post} />
      ))}
    </div>
  );
};

export default Feed;
