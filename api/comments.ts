import toast from "react-hot-toast";
import { customAxios } from "./instances";

interface CommentProps {
  postId: number | string;
  message: string;
  userId: number | string;
}

export const leaveComment = async (payload: CommentProps) => {
  try {
    const response = await customAxios.post(
      `/posts/${payload.postId}/comment`,
      payload
    );
    return response.data;
  } catch (error) {
    toast.error("Failed to post comment");
    console.error(error);
  }
};

export const getAllComments = async (postId: number | string) => {
  try {
    const response = await customAxios.get(`/posts/${postId}/comments`);
    const data = response.data;

    if (Array.isArray(data)) {
      return data;
    } else {
      return []; 
    }
  } catch (error) {
    console.error("Error fetching comments:", error);
    return [];
  }
};
