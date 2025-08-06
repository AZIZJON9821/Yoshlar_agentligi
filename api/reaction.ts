import {customAxios} from "@/api/instances";

export interface ReactionParam {
  type: 'like' | 'dislike';
  id: string;
}

export const reaction = async ({id, type}: ReactionParam) => {
  const res = await customAxios.post(`/posts/${id}/reactions`, {type});
  return res.data;
}
