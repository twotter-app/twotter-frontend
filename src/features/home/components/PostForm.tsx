import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { z } from 'zod';
import { Image, Smile } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import CharCounter from '@/components/features/home/layout/feed/char_limit/CharCounter';

// type declaration for the form values
import { postFormSchema } from '../utils/schemas';

interface Props {
  form: UseFormReturn<{
    content: string;
  }>;
  onSubmit: (values: z.infer<typeof postFormSchema>) => void;
}

export const PostForm: React.FC<Props> = ({ form, onSubmit }) => {
  const { formState, watch } = form;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col">
        <div className="flex space-x-3 ml-4">
          <Avatar>
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="Your Avatar"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="What's happening?"
                    className="flex-1 border-none outline-none resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
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
              <CharCounter value={watch('content').length} maxValue={140} />
            </div>
            <div>
              <Button
                type="submit"
                variant={formState.isValid ? 'default' : 'secondary'}
                size="lg"
                disabled={!formState.isValid}
                className="py-2 px-4 rounded-full"
              >
                Post
              </Button>
            </div>
          </div>
        </div>
      </form>
    </Form>
  );
};
