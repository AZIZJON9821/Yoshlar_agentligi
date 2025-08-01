import toast from "react-hot-toast";
import { customAxios } from "./instances";
import { Post } from "@/types";

export const getAllPosts = async (categoryId: number) => {
  try {
    const response = await customAxios.get<Post[]>(
      `/get-all-posts?categoryId=${categoryId}`
    );
    return response.data || [];
  } catch (error) {
    toast.error("Something went wrong!");
    console.log(error);
  }
};
