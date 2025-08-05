import { useQuery } from "@tanstack/react-query";
import { customAxios } from "@/api/instances/codeMuseum";

export interface Category {
    id: string;
    name: string;
}

const fetchCategories = async (): Promise<Category[]> => {
    const resp = await customAxios.get("/categories");
    const data = resp.data?.data;
    if (Array.isArray(data)) {
        return data;
    }
    throw new Error("Unexpected categories format");
};

export const useCategories = () => {
    return useQuery<Category[], Error>({
        queryKey: ["categories"],
        queryFn: fetchCategories,
    });
};
