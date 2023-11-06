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
    <div id="post-container" className="flex items-start  border-b pb-3">
      <div id="avatar-container">
        <Avatar>
          <AvatarImage src={avatar} alt={displayName} />
          <AvatarFallback>{displayName.charAt(0)}</AvatarFallback>
        </Avatar>
      </div>
      <div id="body-container">
        <div id="post-header">
          <div id="post-header-text">
            <h3 className="flex font-bold items-center justify-start">
              {displayName}
              {"  "}
              <span>
                {verified ? (
                  <BadgeCheck className="w-4 fill-primary stroke-background" />
                ) : (
                  ""
                )}
              </span>
              <span className="text-popover text-sm font-semibold ml-1">
                {username}
              </span>
            </h3>
          </div>
          <div id="post-header-description" className="mb-3 text-base">
            <p>{text}</p>
          </div>
        </div>
        <img src={image} alt={username} className="rounded-2xl" />
        <div id="post-footer" className="flex justify-between mt-2">
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
