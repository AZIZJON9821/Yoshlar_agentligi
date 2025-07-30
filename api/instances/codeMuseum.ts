import axios from "axios";
export const baseURL = "";
export const customAxios = axios.create({
  baseURL: baseURL,
  withCredentials: true,
});
