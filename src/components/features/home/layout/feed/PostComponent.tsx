import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Post } from '@/features/home/types/types';
import { BadgeCheck, MessageCircle, Repeat2, Heart, Share } from 'lucide-react';
interface PostProps {
  post: Post;
}

const PostComponent: React.FC<PostProps> = ({ post }) => {
  const { content, image, user } = post;
  const { avatar, displayName, userName, isVerified } = user;
  return (
    <div id="post-container" className="flex items-start  border-b pb-3">
      <div id="avatar-container" className="p-4">
        <Avatar>
          <AvatarImage src={avatar} alt={displayName} />
          <AvatarFallback>{displayName.charAt(0)}</AvatarFallback>
        </Avatar>
      </div>
      <div id="body-container" className="flex-1 pt-2 pr-2">
        <div id="post-header">
          <div id="post-header-text">
            <h3 className="flex font-bold items-center justify-start">
              {displayName}
              <span>
                {isVerified ? (
                  <BadgeCheck className="w-4 fill-primary stroke-background" />
                ) : (
                  ''
                )}
              </span>
              <span className="text-tertiary text-sm font-semibold ml-1">
                {'@' + userName}
              </span>
            </h3>
          </div>
          <div id="post-header-description" className="mb-3 text-base">
            <p>{content}</p>
          </div>
        </div>
        <img src={image} alt={userName} className="rounded-2xl" />
        <div id="post-footer" className="flex justify-between mt-2 mr-2">
          <MessageCircle />
          <Repeat2 />
          <Heart />
          <Share />
        </div>
      </div>
    </div>
  );
};

export default PostComponent;
