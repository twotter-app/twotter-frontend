import { axiosBase } from '@/lib/axios';
import { getApiEndpointFull } from '@/api/api';
import { CreatePostParams, CreatePostResponse } from '../../types/types';

export const createPost = async (
  createPostParams: CreatePostParams
): Promise<CreatePostResponse> => {
  const { newTwoot } = createPostParams;
  const body = { newTwoot };
  const res = await axiosBase().post(getApiEndpointFull('postTwoot'), body);
  return res.data;
};
