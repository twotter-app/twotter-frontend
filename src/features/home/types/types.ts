import { User } from "@/types/common.types";

export interface OriginalPost {
  _id: string;
  author: string;
  content: string;
  tags: string[];
  authorSlug: string;
  length: number;
  dateAdded: number;
  dateModified: string;
}

export interface Post extends OriginalPost {
  image: string;
  user: User;
}

export interface NewTwoot {
  author: string;
  content: string;
  authorSlug: string;
  dateAdded: string;
}

export interface CreatePostParams {
  newTwoot: {
    author: string;
    content: string;
    authorSlug: string;
    dateAdded: string;
  };
}

export interface CreatePostResponse {
  newTwoot: OriginalPost;
}
