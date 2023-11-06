//  SKY
//  Twoot button aka post button in the sidebar created by using ui/button
import { PencilLine } from "lucide-react";
import { Button } from "@/components/ui/button";

const PostButton = () => {
  return (
    <Button
      variant="default"
      size="lg"
      className="text-white bg-blue-500 hover:bg-blue-600 mt-5 rounded-3xl"
    >
      <PencilLine />
      <h2 className="mr-5 pl-5 text-lg font-semibold md:block hidden">
        TwooT
      </h2>{" "}
      {/* Hide text on small screens */}
    </Button>
  );
};

export default PostButton;
