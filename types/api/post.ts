import { Category } from "./categories";
import { Comment } from "./comments";
import { Like } from "./likes";
import { User } from "./user";

export interface PostCategory {
  id: string;
  postId: string;
  categoryId: string;
  createdAt: string;
  category: Category;
}

export interface Post {
  id: string;
  title: string;
  code: string;
  userId: string;
  createdAt: string;
  user: User;
  PostCategory: PostCategory[];
  comments: Comment[];
  likes: Like[];
}
