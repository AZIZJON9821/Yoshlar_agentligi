import toast from "react-hot-toast";
import { customAxios } from "./instances";

export const getAllUserReactions = async () => {
  try {
    const { data: likes } = await customAxios.get(
      `/users/my-reactions?limit=100?type='like'`
    );
    const { data: dislikes } = await customAxios.get(
      `/users/my-reactions?limit=100?type='dislike'`
    );
    const reactions=[...likes.data,...dislikes.data]
    return reactions;
  } catch (e) {
    console.log(e);
  }
};
