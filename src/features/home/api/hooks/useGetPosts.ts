import { useQuery, UseQueryOptions } from 'react-query';
import { OriginalPost } from '../../types/types';
import { getTwoots } from '../service/getPosts';

/**
 * Custom hook for getting the latest work session
 *
 * @param {UseQueryOptions<WorkSession, Error, WorkSession, GetLatestWorkSessionParams>} [options]
 */
export const useGetPosts = (
  query: { userId: string },
  options?: UseQueryOptions<OriginalPost[]>
) => {
  return useQuery<OriginalPost[]>(
    ['getTwoots', query],
    () => getTwoots(query),
    options
  );
};
