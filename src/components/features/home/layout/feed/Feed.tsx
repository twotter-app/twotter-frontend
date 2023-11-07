import { postData } from "@/dumyPosts"; // Make sure the path is correct
import TweetBox from "./TweetBox";
import PostComponent from "./PostComponent";

const Feed: React.FC = () => {
  return (
    <div className="basis-2/5 border min-w-fit overflow-y-scroll no-scrollbar">
      {/* header */}
      <div className="sticky top-0 z-50 border-b py-4 px-5 flex justify-around bg-white">
        <h2>For you</h2>
        <h2>Following</h2>
      </div>
      {/* tweet */}
      <TweetBox />
      {postData.map((tweet, index) => (
        <PostComponent key={index} post={tweet} />
      ))}
    </div>
  );
};

export default Feed;
