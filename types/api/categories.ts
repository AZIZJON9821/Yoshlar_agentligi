import { Post } from "./post";

export interface Category {
  id: number;
  name: string;
  createdAt: string;
  posts: Post
}
