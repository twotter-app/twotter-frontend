import { UseMutationOptions, useMutation } from 'react-query';
import { createPost } from '../service/createPost';
import { CreatePostResponse, CreatePostParams } from './../../types/types';
/**
 * Custom hook for creating a post
 *
 * @param {UseMutationOptions<CreatePostResponse, Error, CreatePostParams>} [options]
 */
export const useCreatePost = (
  options?: UseMutationOptions<CreatePostResponse, Error, CreatePostParams>
) =>
  useMutation<CreatePostResponse, Error, CreatePostParams>(
    (values: CreatePostParams) => createPost(values),
    options
  );
