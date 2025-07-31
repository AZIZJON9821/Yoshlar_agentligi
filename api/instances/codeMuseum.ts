import axios from "axios";
export const baseURL = "http://localhost:3000";
export const customAxios = axios.create({
  baseURL: baseURL,
  withCredentials: true,
});
