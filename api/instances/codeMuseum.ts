import axios from "axios";
export const baseURL = "http://45.76.91.102:3000";
export const customAxios = axios.create({
  baseURL: baseURL,
  withCredentials: true,
});
