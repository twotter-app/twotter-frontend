import { axiosBase } from '@/lib/axios';
import { getApiEndpointFull } from '@/api/api';
import { OriginalPost } from '../../types/types';

export const getTwoots = async (query: {
  userId: string;
}): Promise<OriginalPost[]> => {
  try {
    console.log(getApiEndpointFull('getTwoot'));
    const res = await axiosBase().get(getApiEndpointFull('getTwoot'));
    console.log('fetch data with userId : ', query.userId);
    console.log('fetch data : ', res.data);

    return res.data;
  } catch (error) {
    console.error('Error occurred:', error);
    throw error; // Re-throw the error for higher-level handling
  }
};
