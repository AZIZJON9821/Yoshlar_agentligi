import { getAllPosts } from "@/api";
import { useQuery } from "@tanstack/react-query";

export const useGetAllPosts = (categoryId: number) => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: () => getAllPosts(categoryId),
    enabled: !!categoryId,
  });
};
