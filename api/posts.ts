import toast from "react-hot-toast";
import { customAxios } from "./instances";
import { Post } from "@/types";

export const getAllPosts = async () => {
  try {
    const response = await customAxios.get<{ data: Post[] }>(`/posts`);
    return response.data?.data || [];
  } catch (error) {
    toast.error("Something went wrong!");
    console.log(error);
  }
};
