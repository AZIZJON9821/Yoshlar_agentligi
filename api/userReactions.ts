import toast from "react-hot-toast";
import { customAxios } from "./instances";
import { ReactionData } from "@/types/api/user/reactions";

export const getAllUserReactions = async () => {
  try {
const res = await customAxios.get<{data: ReactionData[]}>(
      `/users/my-reactions?limit=100`
    );
    return res.data?.data || [];
  } catch (e) {
    console.log(e);
  }
};
