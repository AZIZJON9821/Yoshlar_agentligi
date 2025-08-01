import toast from "react-hot-toast";
import { customAxios } from "./instances";
import { UserPosts } from "@/types/api/user/posts";

export const getAllUserPosts = async () => {
  try {
    const res = await customAxios.get<UserPosts[]>(`/users/my-posts?limit=100`);
    return res.data;
  } catch (e) {
    console.log(e);
    toast.error("get posts user failed");
  }
};
