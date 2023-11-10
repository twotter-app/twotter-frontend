import React from 'react';
import { UseFormReturn } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

// type declaration for the form values
import { loginFormSchema } from '../utils/schemas';
import { z } from 'zod';

interface Props {
  form: UseFormReturn<{
    emailOrUserName: string;
    password: string;
  }>;
  onSubmit: (values: z.infer<typeof loginFormSchema>) => void;
}

export const LoginForm: React.FC<Props> = ({ form, onSubmit }) => {
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 text-foreground "
      >
        <FormField
          control={form.control}
          name="emailOrUserName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">Username or Email</FormLabel>
              <FormControl>
                <Input
                  className="border-foreground focus:border-none opacity-60 focus:opacity-100"
                  placeholder="type your username or mail.."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">Password</FormLabel>
              <FormControl>
                <Input
                  className="border-foreground focus:border-none opacity-60 focus:opacity-100 "
                  placeholder="password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full hover:bg-blue-600">
          Submit
        </Button>
      </form>
    </Form>
  );
};
