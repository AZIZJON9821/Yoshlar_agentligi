import toast from "react-hot-toast";
import { customAxios } from "./instances";
import { Post } from "@/types";

export const getAllPosts = async () => {
  try {
    const response = await customAxios.get<Post[]>(
      `/posts`
    );
    return response.data || [];
  } catch (error) {
    toast.error("Something went wrong!");
    console.log(error);
  }
};
