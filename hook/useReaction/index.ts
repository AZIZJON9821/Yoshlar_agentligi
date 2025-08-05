import {useMutation, useQueryClient} from "@tanstack/react-query";
import {reaction, ReactionParam} from "@/api/reaction";
import {useRouter} from "next/router";
import toast from "react-hot-toast";

export const useReactionMutate = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: (params: ReactionParam) => reaction(params),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['posts']}).then();
    },
    onError: (error: any) => {
      console.error(error);
      toast.error("Failed to react");
      if (error.status == 401) {
        router.push("/auth/login");
      }
    }
  })
}
