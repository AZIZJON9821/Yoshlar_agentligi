import toast from "react-hot-toast";
import { customAxios } from "./instances";
import { Post } from "@/types";
import { Pagination } from "@/types/api/pagination";

export const getAllPosts = async (page=1,limit=10) => {
  try {
    const response = await customAxios.get<{ data: Post[],pagination:Pagination }>(`/posts?page=${page},limit=${limit}`);
    return {posts: response.data?.data || [],pagination:response.data.pagination};
  } catch (error) {
    toast.error("Something went wrong!");
    console.log(error);
  }
};
