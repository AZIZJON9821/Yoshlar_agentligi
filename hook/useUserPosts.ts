import { getAllUserPosts } from "@/api/userPosts"
import { useQuery } from "@tanstack/react-query"

export const useUserPosts=()=>{
    return useQuery({
        queryKey:['userPosts'],
        queryFn:getAllUserPosts
    })
}