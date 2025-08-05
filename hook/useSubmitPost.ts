import { useMutation, useQueryClient } from "@tanstack/react-query";
import { customAxios } from "@/api/instances/codeMuseum";
import { getCookie } from "cookies-next";

export interface SubmitPayload {
    title: string;
    code: string;
    categoryName: string;
}

const postFn = async (payload: SubmitPayload, anonymous: boolean) => {
    const token = getCookie("token") as string | undefined;
    const body = {
        title: payload.title,
        code: payload.code,
        categoryName: payload.categoryName.toUpperCase(),
    };
    const endpoint = anonymous ? "/posts/anonymous" : "/posts";

    const headers: Record<string, string> = {
        "Content-Type": "application/json",
    };
    if (token) {
        headers["Authorization"] = `Bearer ${token}`;
    }

    const res = await customAxios.post(endpoint, body, {
        headers,
    });
    return res.data;
};
export const useSubmitPost = () => {
    const queryClient = useQueryClient();

    return useMutation<
        any,
        Error,
        { payload: SubmitPayload; anonymous: boolean }
    >({
        mutationFn: ({ payload, anonymous }) => postFn(payload, anonymous),
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ["posts"] });
        },
    });
};
