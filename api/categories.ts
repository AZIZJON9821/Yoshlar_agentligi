import { ALlCategories } from "@/types";
import { customAxios } from "./instances";

export const getAllCategories = async () => {
  try {
    const response = await customAxios.get<ALlCategories>("/categories");
    return response.data.data
  } catch (error) {
    console.log(error);
  }
};
