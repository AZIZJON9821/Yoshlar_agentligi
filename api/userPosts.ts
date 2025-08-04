import toast from "react-hot-toast";
import { customAxios } from "./instances";
import { UserPosts } from "@/types/api/user/posts";

export const getAllUserPosts = async () => {
  try {
    const res = await customAxios.get<{ message: string; data: UserPosts[] }>(
      `/users/my-posts?limit=100`
    );
    return res.data.data;
  } catch (e) {
    console.log(e);
  }
};
