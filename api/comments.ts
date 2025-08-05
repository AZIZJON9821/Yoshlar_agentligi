import toast from "react-hot-toast";
import { customAxios } from "./instances";

interface CommentProps {
  postId: number | string;
  message: string;
}

export const leaveComment = async (payload: CommentProps) => {
  try {
    const message = {
      message: payload.message,
    };
    const response = await customAxios.post(
      `/posts/${payload.postId}/comments`,
      message
    );
    return response.data.data;
  } catch (error) {
    toast.error("Failed to post comment");
    console.error(error);
  }
};

export const getAllComments = async (postId: number | string) => {
  try {
    const response = await customAxios.get(`/posts/${postId}/comments`);
    const data = response.data;
    return data.data;
  } catch (error) {
    console.error("Error fetching comments:", error);
    return [];
  }
};
