import { User } from '@/types/common.types';

export interface OriginalPost {
  _id: string;
  author: string;
  content: string;
  tags: string[];
  authorSlug: string;
  length: number;
  dateAdded: string;
  dateModified: string;
}

export interface Post extends OriginalPost {
  image: string;
  user: User;
}
