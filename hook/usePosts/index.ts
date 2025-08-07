import { getAllPosts } from "@/api";
import { useQuery } from "@tanstack/react-query";

export const useGetAllPosts = (page=1,limit=10) => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: () => getAllPosts(page,limit),
  });
};
