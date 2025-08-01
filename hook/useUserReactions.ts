import { getAllUserReactions } from "@/api/userReactions";
import { useQuery } from "@tanstack/react-query";

export const useUserReactions = () => {
  return useQuery({
    queryKey: ["userReactions"],
    queryFn: getAllUserReactions,
  });
};
