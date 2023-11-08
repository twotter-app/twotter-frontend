import TweetBox from './TweetBox';
import PostComponent from './PostComponent';
import { Post } from '@/features/home/types/types';

interface Props {
  posts: Post[];
}

const Feed: React.FC<Props> = ({ posts }) => {
  return (
    <div className="basis-2/5 border min-w-fit overflow-y-scroll no-scrollbar">
      {/* header */}
      <div className="sticky top-0 z-50 border-b py-4 px-5 flex justify-around bg-white">
        <h2>For you</h2>
        <h2>Following</h2>
      </div>
      {/* tweet */}
      <TweetBox />
      {posts.map((post, index) => (
        <PostComponent key={index} post={post} />
      ))}
    </div>
  );
};

export default Feed;
