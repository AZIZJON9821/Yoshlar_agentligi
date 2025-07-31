import { Category } from "./categories";
import { User } from "./user";

export interface Post {
  id: number;
  title: string;
  code: string;
  userId: string;
  categoryId: string;
  createdAt: string;
  user: User;
  category: Category;
}
