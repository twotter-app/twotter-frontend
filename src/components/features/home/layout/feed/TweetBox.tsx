import { useState, ChangeEvent, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Image, Smile } from "lucide-react";
import CharCounter from "./char_limit/CharCounter";

export default function TweetBox() {
  const [tweet, setTweet] = useState<string>("");
  const [isPostDisabled, setIsPostDisabled] = useState<boolean>(true);

  const handleTweetChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const tweetValue = event.target.value;
    setTweet(tweetValue);
    setIsPostDisabled(tweetValue.length === 0 || tweetValue.length > 140);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Submit logic here
  };

  return (
    <div className="border-b pb-3 pr-3 mt-2">
      <form action="" className="flex flex-col" onSubmit={handleSubmit}>
        <div className="flex space-x-3 ml-4">
          <Avatar>
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="Your Avatar"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Textarea
            placeholder="What's happening?"
            className="flex-1 border-none outline-none resize-none"
            value={tweet}
            onChange={handleTweetChange}
            maxLength={140}
          />
        </div>
        <div className="flex justify-between items-center mt-4">
          <div className="flex space-x-2 text-gray-500 pl-14">
            <button
              type="button"
              className="p-2 hover:bg-gray-200 rounded-full"
            >
              <Image />
            </button>
            <button
              type="button"
              className="p-2 hover:bg-gray-200 rounded-full"
            >
              <Smile />
            </button>
          </div>
          <div className="flex items-center gap-4">
            <div>
              <CharCounter value={tweet.length} maxValue={140} />
            </div>
            <div>
              <Button
                type="submit"
                variant="default"
                size="lg"
                disabled={isPostDisabled}
                className={`py-2 px-4 rounded-full ${
                  isPostDisabled
                    ? "bg-gray-500"
                    : "bg-blue-500 hover:bg-blue-600"
                } text-white`}
              >
                Post
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
