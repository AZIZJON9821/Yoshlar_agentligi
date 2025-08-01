import { Category } from "./categories";
import { Comment } from "./comments";
import { Like } from "./likes";
import { User } from "./user";

export interface Post {
  id: string;
  title: string;
  code: string;
  userId: string;
  createdAt: string;
  user: User;
  PostCategory: Category
  comments: Comment[];
  likes: Like[];
}
