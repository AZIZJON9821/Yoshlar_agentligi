import toast from "react-hot-toast";
import { customAxios } from "./instances";
import { Post } from "@/types";

export const leaveComment = async (payload: any) => {
    try {
        const response = await customAxios.post<Post[]>(
            `/leave-comment`, payload
        );
        return response.data || [];
    } catch (error) {
        toast.error("Something went wrong!");
        console.log(error);
    }
};

export const getAllComments = async () => {
    try {
        const response = await customAxios.get(`/posts/1/comments`)
        return response.data
    } catch (error) {
        toast.error("Something went wrong!");
        console.log(error);
    }
}
