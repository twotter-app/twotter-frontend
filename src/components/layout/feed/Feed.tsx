import TweetBox from "./TweetBox";
import Post from "./Post";
const Feed = () => {
  return (
    <div className="basis-2/5 border min-w-fit overflow-y-scroll no-scrollbar ">
      {/* header */}
      <div className="sticky top-0 z-50 border-b py-4 px-5 flex justify-around bg-white">
        <h2>For you</h2>
        <h2>Following</h2>
      </div>
      {/* tweet */}
      <TweetBox />
      <Post
        avatar={"https://github.com/shadcn.png"}
        displayName={"Goktug Yildiz"}
        username={"gktgyldz08"}
        verified={true}
        text={"heyyy it is the clone project for twitter"}
        image={"https://picsum.photos/400/200"}
      />
      {/*Posts */}
      {/*Posts */}
      {/*Posts */}
    </div>
  );
};

export default Feed;
