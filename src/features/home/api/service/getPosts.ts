import { axiosBase } from '@/lib/axios';
import { getApiEndpointFull } from '@/api/api';
import { OriginalPost } from '../../types/types';

export const getTwoots = async (query: {
  userId: string;
}): Promise<OriginalPost[]> => {
  try {
    const res = await axiosBase().get(getApiEndpointFull('getTwoot'));

    return res.data;
  } catch (error) {
    console.error('Error occurred:', error);
    throw error; // Re-throw the error for higher-level handling
  }
};
