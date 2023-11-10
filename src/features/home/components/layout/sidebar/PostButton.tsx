import { PencilLine } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DialogTrigger } from '@radix-ui/react-dialog';

const PostButton = () => {
  return (
    <DialogTrigger asChild>
      <Button
        type="submit"
        variant="default"
        size="lg"
        className="text-primary-foreground bg-primary hover:bg-primary mt-5 rounded-3xl"
      >
        <PencilLine />
        <h2 className="mr-5 pl-5 text-lg font-semibold md:block hidden">
          TwooT
        </h2>{' '}
        {/* Hide text on small screens */}
      </Button>
    </DialogTrigger>
  );
};

export default PostButton;
