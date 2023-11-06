import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BadgeCheck, MessageCircle, Repeat2, Heart, Share } from "lucide-react";
interface PostProps {
  displayName: string;
  username: string;
  verified: boolean;
  text: string;
  image: string;
  avatar: string;
}

const Post: React.FC<PostProps> = ({
  displayName,
  username,
  verified,
  text,
  image,
  avatar,
}) => {
  return (
    <div id="post-container">
      <div id="avatar-container">
        <Avatar>
          {/* If avatar is a URL to the user's avatar image, it should be used here */}
          <AvatarImage src={avatar} alt={displayName} />
          <AvatarFallback>{displayName.charAt(0)}</AvatarFallback>
        </Avatar>
        {/* Other elements like displayName, username, etc. should be rendered here */}
      </div>
      <div id="body-container">
        <div id="post-header">
          <div id="post-header-text">
            <h3>
              {displayName}
              <span>
                {verified ? <BadgeCheck /> : ""} {username}
              </span>
            </h3>
          </div>
          <div id="post-header-description">
            <p>{text}</p>
          </div>
        </div>
        <img src={image} alt={username} />
        <div id="post-footer">
          <MessageCircle />
          <Repeat2 />
          <Heart />
          <Share />
        </div>
      </div>
    </div>
  );
};

export default Post;
